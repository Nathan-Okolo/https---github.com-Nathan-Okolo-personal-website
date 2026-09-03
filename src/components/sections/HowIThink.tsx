import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the actual problem before writing code. Requirements are rarely the full story — the real question is usually buried underneath.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Find the cause rather than treating the symptoms. A fix that doesn't address the root will need fixing again.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the solution into practical, reliable software. Working code that solves the real problem — not the elegant abstraction that almost does.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Test, debug, optimise and refine. Good software is the result of iteration, not the first attempt.",
  },
];

export default function HowIThink() {
  return (
    <section
      id="approach"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Engineering approach"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>How I Think</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            An engineering approach to every problem.
          </h2>
          <p className="text-base max-w-xl mb-16" style={{ color: "var(--text-muted)" }}>
            Not a design process — an engineering one. Four steps I apply to anything I work on.
          </p>
        </AnimatedSection>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border-subtle)" }}
        >
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.1 + i * 0.08}>
              <div
                className="step-card p-8 h-full flex flex-col gap-6"
                style={{ background: "var(--bg-base)" }}
              >
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
                <div
                  className="step-line mt-auto h-px"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
