interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-12 ${className}`}>
      <span
        className="w-1.5 h-1.5 rounded-full pulse-dot"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </span>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border-subtle)" }}
        aria-hidden="true"
      />
    </div>
  );
}
