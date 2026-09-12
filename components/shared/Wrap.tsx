export function Wrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1120px] px-[clamp(20px,4vw,48px)] ${className}`}>
      {children}
    </div>
  );
}
