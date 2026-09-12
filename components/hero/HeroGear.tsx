"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/providers/ThemeProvider";

type MetalConfig = {
  color: number;
  metalness: number;
  roughness: number;
  envIntensity: number;
};

type ModeMetals = {
  steel: MetalConfig;
  accent: MetalConfig;
  top: string;
  bottom: string;
  key: number;
  rim: number;
  ambient: number;
};

const METALS: Record<"light" | "dark", ModeMetals> = {
  light: {
    steel: { color: 0xc7cdd4, metalness: 0.92, roughness: 0.26, envIntensity: 1.0 },
    accent: { color: 0x2f86c4, metalness: 0.8, roughness: 0.26, envIntensity: 1.8 },
    top: "#FFFFFF",
    bottom: "#98A3AE",
    key: 0xffffff,
    rim: 0xbdd6eb,
    ambient: 0.45,
  },
  dark: {
    steel: { color: 0xb9c0c8, metalness: 0.92, roughness: 0.28, envIntensity: 1.0 },
    accent: { color: 0xf3bf8f, metalness: 0.9, roughness: 0.24, envIntensity: 1.2 },
    top: "#FFF1DC",
    bottom: "#2A2018",
    key: 0xffe7c4,
    rim: 0x78111f,
    ambient: 0.3,
  },
};

function makeGearShape(teeth: number, root: number, tip: number, bore: number) {
  const step = (Math.PI * 2) / teeth;
  const profile: [number, number][] = [
    [0.0, root],
    [0.22, root],
    [0.34, tip],
    [0.66, tip],
    [0.78, root],
  ];
  const shape = new THREE.Shape();
  for (let i = 0; i < teeth; i++) {
    for (let j = 0; j < profile.length; j++) {
      const a = (i + profile[j][0]) * step;
      const r = profile[j][1];
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0 && j === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, bore, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

function makeGear(
  teeth: number,
  root: number,
  tip: number,
  bore: number,
  depth: number,
  material: THREE.Material
) {
  const geometry = new THREE.ExtrudeGeometry(makeGearShape(teeth, root, tip, bore), {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.07,
    bevelSize: 0.07,
    bevelSegments: 2,
    curveSegments: 48,
    steps: 1,
  });
  geometry.center();
  return new THREE.Mesh(geometry, material);
}

function envTexture(top: string, bottom: string) {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 512;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(0.0, top);
  g.addColorStop(0.46, top);
  g.addColorStop(0.54, bottom);
  g.addColorStop(1.0, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  // Equirect env maps go through WebGL2's texImage3D internally, which
  // rejects UNPACK_FLIP_Y_WEBGL — flip the gradient in canvas space instead.
  t.flipY = false;
  return t;
}

/** Two interlocking gears, rendered with three.js. Client-only (WebGL/canvas). */
export function HeroGear() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useTheme();
  const applyMetalRef = useRef<(mode: "light" | "dark") => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const container: HTMLElement = parent;

    const reduceMotion = !!(
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 11.4);

    const steelMat = new THREE.MeshStandardMaterial({ metalness: 0.92, roughness: 0.26 });
    const accentMat = new THREE.MeshStandardMaterial({ metalness: 0.88, roughness: 0.28 });

    const TEETH_BIG = 12;
    const TEETH_SMALL = 8;
    const bigGear = makeGear(TEETH_BIG, 1.74, 2.38, 1.02, 0.86, steelMat);
    const smallGear = makeGear(TEETH_SMALL, 1.0533, 1.6933, 0.58, 0.72, accentMat);

    // Same module (step 0.3433, addendum 0.32) on both gears, so they mesh for real.
    const AXIS = (-40 * Math.PI) / 180;
    const CENTER_DIST = 3.4333;
    smallGear.position.set(Math.cos(AXIS) * CENTER_DIST, Math.sin(AXIS) * CENTER_DIST, 0);
    bigGear.rotation.z = AXIS - Math.PI / TEETH_BIG;
    smallGear.rotation.z = AXIS + Math.PI;

    const assembly = new THREE.Group();
    assembly.add(bigGear, smallGear);
    assembly.position.set(-0.97, 0.76, 0);

    const tilt = new THREE.Group();
    tilt.rotation.x = -0.6;
    tilt.rotation.y = 0.42;
    tilt.add(assembly);
    scene.add(tilt);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    const key = new THREE.DirectionalLight(0xffffff, 1.7);
    key.position.set(3, 4.5, 5);
    const rim = new THREE.DirectionalLight(0xffffff, 0.9);
    rim.position.set(-4.5, -1.5, 2);
    scene.add(ambient, key, rim);

    let currentEnv: THREE.Texture | null = null;

    function render() {
      renderer.render(scene, camera);
    }

    function applyMetal(nextMode: "light" | "dark") {
      const m = METALS[nextMode] ?? METALS.light;
      if (currentEnv) currentEnv.dispose();
      currentEnv = envTexture(m.top, m.bottom);
      ([
        [steelMat, m.steel],
        [accentMat, m.accent],
      ] as const).forEach(([mat, cfg]) => {
        mat.color.setHex(cfg.color);
        mat.metalness = cfg.metalness;
        mat.roughness = cfg.roughness;
        mat.envMap = currentEnv;
        mat.envMapIntensity = cfg.envIntensity;
        mat.needsUpdate = true;
      });
      key.color.setHex(m.key);
      rim.color.setHex(m.rim);
      ambient.intensity = m.ambient;
      render();
    }
    applyMetalRef.current = applyMetal;

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      render();
    }

    applyMetal(mode);
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("resize", resize);

    let frameId = 0;
    if (!reduceMotion) {
      let prev = performance.now();
      const loop = (now: number) => {
        frameId = requestAnimationFrame(loop);
        const dt = Math.min((now - prev) / 1000, 0.05);
        prev = now;
        if (document.hidden) return;
        const turn = dt * 0.4;
        bigGear.rotation.z += turn;
        smallGear.rotation.z -= turn * (TEETH_BIG / TEETH_SMALL);
        render();
      };
      frameId = requestAnimationFrame(loop);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      currentEnv?.dispose();
      steelMat.dispose();
      accentMat.dispose();
      bigGear.geometry.dispose();
      smallGear.geometry.dispose();
      renderer.dispose();
    };
    // Scene is built once; theme changes are handled by the effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyMetalRef.current(mode);
  }, [mode]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
