import { skillCategories } from "@/data/skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TechnicalExpertise() {
  return (
    <section
      id="skills"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Technical expertise"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Technical Expertise</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            What I work with.
          </h2>
          <p className="text-base max-w-xl mb-16" style={{ color: "var(--text-muted)" }}>
            Skills organised by area — not percentages, not bar charts. Just what I actually use to build things.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={0.08 + i * 0.05}>
              <div
                className="card-hover p-6 rounded-xl border h-full flex flex-col gap-4"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {cat.title}
                  </h3>
                  <div
                    className="skill-card-dot w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
