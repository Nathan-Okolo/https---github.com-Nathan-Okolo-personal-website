import { social } from "@/data/social";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Contact</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <AnimatedSection className="md:col-span-7" delay={0.1}>
            {/* Accent glow behind heading */}
            <div className="relative">
              <div
                className="absolute -top-8 -left-8 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                style={{ background: "rgba(129, 140, 248, 0.06)" }}
                aria-hidden="true"
              />
              <h2
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Have a problem{" "}
                <span style={{ color: "var(--accent)" }}>worth solving?</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Have an idea, a technical challenge or something you&apos;re trying to build?{" "}
              Let&apos;s talk.
            </p>

            <a
              href={`mailto:${social.email}`}
              id="contact-cta"
              className="cta-primary inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base"
            >
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-5" delay={0.15}>
            <div
              className="p-8 rounded-2xl border h-full flex flex-col justify-center gap-8"
              style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Email
                </p>
                <a
                  href={`mailto:${social.email}`}
                  id="contact-email"
                  className="link-hover-accent text-base font-medium transition-colors break-all"
                  style={{ color: "var(--text-primary)" }}
                >
                  {social.email}
                </a>
              </div>

              <div className="border-t pt-6" style={{ borderColor: "var(--border-subtle)" }}>
                <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                  Elsewhere
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-github"
                    className="link-hover-white flex items-center justify-between text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>GitHub</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-linkedin"
                    className="link-hover-white flex items-center justify-between text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>LinkedIn</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a
                    href={social.cv}
                    download="Nathan_Okolo_Chinedu_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-cv"
                    className="link-hover-white flex items-center justify-between text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>Download CV</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 1v7M3 5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
