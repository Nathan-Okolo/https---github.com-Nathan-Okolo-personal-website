import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const mentorships = [
  {
    org: "Learnable",
    role: "Backend Mentor",
    period: "2022 – Present",
    description: "Mentoring backend engineering students through structured curriculum covering Node.js, APIs and databases.",
  },
  {
    org: "Upskill Internship",
    role: "Backend Mentor",
    period: "2022 – Present",
    description: "Supporting interns learning backend development in a practical, work-adjacent setting.",
  },
  {
    org: "Girl Tech Magic",
    role: "Volunteer Backend Mentor",
    period: "2022 – 2023",
    description: "Volunteered to teach and mentor women entering backend engineering — covering fundamentals to project-ready skills.",
  },
];

const leadership = [
  {
    title: "Founder",
    org: "Coal City University Tech Club",
    description: "Founded the technology club to build a community of technical learners on campus.",
  },
  {
    title: "Head of ICT & Facility Management",
    org: "TxE Summit",
    description: "Managed technology and facilities for the summit.",
  },
];

export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Mentorship and community"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Mentorship &amp; Community</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Giving back.
          </h2>
          <p className="text-base max-w-xl mb-16" style={{ color: "var(--text-muted)" }}>
            Mentoring others is something I take seriously. Good guidance can save someone years of confusion.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Mentorship roles */}
          <div className="md:col-span-8">
            <div className="space-y-4">
              {mentorships.map((m, i) => (
                <AnimatedSection key={m.org} delay={0.12 + i * 0.08}>
                  <div
                    className="mentor-card p-6 rounded-xl border flex flex-col sm:flex-row sm:items-start gap-4"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
                  >
                    <div className="shrink-0">
                      <div
                        className="w-10 h-10 rounded-full border flex items-center justify-center"
                        style={{ borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
                        aria-hidden="true"
                      >
                        <span style={{ color: "var(--accent)", fontSize: "14px" }}>✦</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                            {m.role}
                          </span>
                          <span style={{ color: "var(--text-dim)" }}> · </span>
                          <span className="text-sm" style={{ color: "var(--accent)" }}>{m.org}</span>
                        </div>
                        <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
                          {m.period}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <AnimatedSection className="md:col-span-4" delay={0.2}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
                Leadership
              </p>
              <div className="space-y-4">
                {leadership.map((l) => (
                  <div
                    key={l.title}
                    className="p-5 rounded-xl border"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
                  >
                    <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                      {l.title}
                    </p>
                    <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>{l.org}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{l.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
