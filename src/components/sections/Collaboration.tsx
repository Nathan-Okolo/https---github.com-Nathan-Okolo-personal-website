import { collaborationTraits } from "@/data/skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Collaboration and people skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>People &amp; Collaboration</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <AnimatedSection className="md:col-span-5" delay={0.1}>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Good software is built{" "}
              <span style={{ color: "var(--accent)" }}>with people.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Technical skill matters — but so does being able to understand what people are actually
                trying to accomplish, ask the right questions and explain clearly what you&apos;re building and why.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I enjoy working in teams. I like discussing possible approaches before committing to one,
                communicating blockers early and helping figure out practical solutions alongside the people
                who will use them.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-7" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {collaborationTraits.map((trait, i) => (
                <AnimatedSection key={trait.title} delay={0.18 + i * 0.06}>
                  <div
                    className="collab-card p-6 rounded-xl border h-full"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      <h3
                        className="font-display text-sm font-semibold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                      >
                        {trait.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {trait.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
