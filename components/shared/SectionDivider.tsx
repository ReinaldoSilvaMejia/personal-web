import { Wrap } from "./Wrap";

/** Thin separator between landing sections — spans the content width, not the full screen. */
export function SectionDivider() {
  return (
    <Wrap>
      <div className="h-0 border-t border-gris" />
    </Wrap>
  );
}
