"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { graphEdges, graphLabels, graphNodes, type GraphNodeId } from "./method.content";
import styles from "./MethodGraph.module.css";

type Point = { x: number; y: number };
type Positions = Record<GraphNodeId, Point>;

const VIEW_W = 1000;
const VIEW_H = 620;
/** Screen-space movement (px) below which a press+release counts as a click, not a drag. */
const CLICK_THRESHOLD = 6;

const initialPositions = Object.fromEntries(
  graphNodes.map((n) => [n.id, { x: n.cx, y: n.cy }])
) as Positions;

const radiusById = new Map(graphNodes.map((n) => [n.id, n.r]));

/** Unlocked-node color alternates accent/main, same two brand colors the hero pills use. */
const nonPhotoNodes = graphNodes.filter((n) => n.id !== "yo");
const variantById = new Map(
  nonPhotoNodes.map((n, i) => [n.id, i % 2 === 0 ? "accent" : "main"] as const)
);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function labelStartDy(lineCount: number) {
  return -((lineCount - 1) * 9);
}

/** Lock (not opened) / check (opened) badge, bottom-right of a node — the same
 * visual language games use for locked vs. cleared levels. */
function NodeBadge({ x, y, visited: isVisited }: { x: number; y: number; visited: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle className={styles.badgeRing} r={15} />
      <circle className={isVisited ? styles.badgeCircleVisited : styles.badgeCircleLocked} r={12} />
      {isVisited ? (
        <path className={styles.badgeIconVisited} d="M -4 0.3 L -1.2 3.2 L 4.5 -3.5" />
      ) : (
        <>
          <rect
            className={styles.badgeIconLockedBody}
            x={-4}
            y={-0.5}
            width={8}
            height={6.5}
            rx={1.2}
          />
          <path className={styles.badgeIconLocked} d="M -2.6 -0.5 v -2.2 a 2.6 2.6 0 0 1 5.2 0 v 2.2" />
        </>
      )}
    </g>
  );
}

type DragState = {
  id: GraphNodeId;
  pointerId: number;
  offsetX: number;
  offsetY: number;
  startClientX: number;
  startClientY: number;
  moved: boolean;
};

export function MethodGraph({ onSelect }: { onSelect: (id: GraphNodeId) => void }) {
  const { lang } = useLanguage();
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const [positions, setPositions] = useState<Positions>(initialPositions);
  const [draggingId, setDraggingId] = useState<GraphNodeId | null>(null);
  const [visited, setVisited] = useState<ReadonlySet<GraphNodeId>>(() => new Set());

  function markVisited(id: GraphNodeId) {
    setVisited((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }

  const toSvgPoint = useCallback((clientX: number, clientY: number): Point => {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return { x: clientX, y: clientY };
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const transformed = pt.matrixTransform(ctm.inverse());
    return { x: transformed.x, y: transformed.y };
  }, []);

  function handlePointerDown(e: React.PointerEvent<SVGGElement>, id: GraphNodeId) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    const svgPoint = toSvgPoint(e.clientX, e.clientY);
    const nodePos = positions[id];
    dragRef.current = {
      id,
      pointerId: e.pointerId,
      offsetX: svgPoint.x - nodePos.x,
      offsetY: svgPoint.y - nodePos.y,
      startClientX: e.clientX,
      startClientY: e.clientY,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<SVGGElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    if (!drag.moved) {
      const dx = e.clientX - drag.startClientX;
      const dy = e.clientY - drag.startClientY;
      if (Math.hypot(dx, dy) < CLICK_THRESHOLD) return;
      drag.moved = true;
      setDraggingId(drag.id);
    }

    const r = radiusById.get(drag.id) ?? 0;
    const svgPoint = toSvgPoint(e.clientX, e.clientY);
    const nextX = clamp(svgPoint.x - drag.offsetX, r, VIEW_W - r);
    const nextY = clamp(svgPoint.y - drag.offsetY, r, VIEW_H - r);
    setPositions((prev) => ({ ...prev, [drag.id]: { x: nextX, y: nextY } }));
  }

  function endDrag(e: React.PointerEvent<SVGGElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    dragRef.current = null;
    setDraggingId(null);
    if (!drag.moved) {
      markVisited(drag.id);
      onSelect(drag.id);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<SVGGElement>, id: GraphNodeId) {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    markVisited(id);
    onSelect(id);
  }

  // Render the node currently being dragged last so it stays visually on top.
  const orderedNodes = useMemo(() => {
    if (!draggingId) return graphNodes;
    const dragged = graphNodes.find((n) => n.id === draggingId);
    if (!dragged) return graphNodes;
    return [...graphNodes.filter((n) => n.id !== draggingId), dragged];
  }, [draggingId]);

  const yoPos = positions.yo;
  const yoRadius = radiusById.get("yo") ?? 0;

  return (
    <div className={styles.graphWrap}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="group"
        aria-label="Mapa de cómo trabajo"
      >
        <defs>
          <clipPath id="clip-yo">
            <circle cx={yoPos.x} cy={yoPos.y} r={yoRadius} />
          </clipPath>
        </defs>

        <g>
          {graphEdges.map(([fromId, toId]) => {
            const from = positions[fromId];
            const to = positions[toId];
            return (
              <line
                key={`${fromId}-${toId}`}
                className={styles.edge}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </g>

        {orderedNodes.map((node) => {
          const pos = positions[node.id];
          const isPhoto = node.id === "yo";
          const lines = graphLabels[node.id][lang];

          const isVisited = visited.has(node.id);
          const isMainVariant = isVisited && variantById.get(node.id) === "main";

          return (
            <g
              key={node.id}
              className={
                isPhoto
                  ? styles.node
                  : `${styles.node} ${isVisited ? styles.visited : styles.locked} ${isMainVariant ? styles.variantMain : ""}`
              }
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={isPhoto ? "Yo" : undefined}
              onPointerDown={(e) => handlePointerDown(e, node.id)}
              onPointerMove={handlePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onKeyDown={(e) => handleKeyDown(e, node.id)}
            >
              {isPhoto ? (
                <>
                  <image
                    href="/img/Profile.png"
                    x={pos.x - node.r}
                    y={pos.y - node.r}
                    width={node.r * 2}
                    height={node.r * 2}
                    clipPath="url(#clip-yo)"
                    preserveAspectRatio="xMidYMin slice"
                  />
                  <circle className={styles.ring} cx={pos.x} cy={pos.y} r={node.r} />
                </>
              ) : (
                <>
                  <circle className={styles.circle} cx={pos.x} cy={pos.y} r={node.r} />
                  <text x={pos.x} y={pos.y}>
                    {lines.map((line, i) => (
                      <tspan key={i} x={pos.x} dy={i === 0 ? labelStartDy(lines.length) : 18}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                  <NodeBadge
                    x={pos.x + node.r * 0.68}
                    y={pos.y + node.r * 0.68}
                    visited={isVisited}
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
