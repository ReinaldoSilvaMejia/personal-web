export function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto max-w-[640px] text-center" : "max-w-[680px]"
      } ${className}`}
    >
      <p className="mb-2.5 text-[0.86rem] font-bold uppercase tracking-[0.1em] text-acento">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.8rem,4vw,2.6rem)]">{title}</h2>
      {subtitle ? (
        <p className="mt-3.5 text-[1.05rem] leading-[1.6] text-gris">{subtitle}</p>
      ) : null}
    </div>
  );
}
