import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Education"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Education</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <AnimatedSection className="md:col-span-7" delay={0.1}>
            <div
              className="p-8 rounded-2xl border"
              style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2
                    className="font-display text-xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    University of Nigeria, Nsukka
                  </h2>
                  <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                    B.Sc. Mathematics
                  </p>
                </div>
                <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
                  2015 – 2019
                </span>
              </div>

              <div className="border-t pt-6 mt-6" style={{ borderColor: "var(--border-subtle)" }}>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Final Year Project
                </p>
                <p
                  className="font-display text-base font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Application of Sigmoid Function to Machine Learning
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  An early encounter with the intersection of mathematics and computation that shaped the way
                  I think about algorithms, data and systems — long before I wrote my first API.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-5" delay={0.15}>
            <div className="space-y-4 h-full flex flex-col justify-center">
              <p
                className="font-display text-2xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Mathematics taught me how to think about problems, not just how to solve them.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                The analytical reasoning, the habit of breaking things into first principles, the tolerance
                for working through problems that don&apos;t have neat answers — that all comes from studying maths.
                It turns out to be more useful in software engineering than most people expect.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
