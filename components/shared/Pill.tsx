export type PillVariant = "accent" | "main";

export function Pill({
  children,
  variant,
  className = "",
}: {
  children: React.ReactNode;
  variant: PillVariant;
  className?: string;
}) {
  const variantClass =
    variant === "accent" ? "bg-acento text-sobre-acento" : "bg-main text-texto";

  return (
    <span
      className={`inline-block rounded-full px-4 py-2 text-[0.85rem] font-semibold whitespace-nowrap transition-opacity hover:opacity-85 ${variantClass} ${className}`}
    >
      {children}
    </span>
  );
}
