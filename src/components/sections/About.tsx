import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="About Nathan"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>About</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Main copy */}
          <AnimatedSection className="md:col-span-7" delay={0.1}>
            <div className="space-y-6">
              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                I like problems that don&apos;t have obvious answers.
              </h2>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m a software developer based in Nigeria. I work mostly on the backend — building
                APIs, financial systems, databases, automation pipelines and the kind of infrastructure
                that keeps software running reliably under real conditions.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                What I enjoy most is investigating why things fail. Not patching the surface — actually
                finding the cause. That&apos;s true whether the problem is a slow database query, a payment
                webhook failing silently, or a complicated business rule that nobody has thought through
                properly.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I work across backend, full-stack, fintech and payments — but what ties it all together
                is the same thing: breaking a complicated requirement into parts I can reason about, then
                building something that actually solves it.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m comfortable talking to engineers and equally comfortable explaining what I&apos;m
                building to people who have never written a line of code. I find both useful.
              </p>
            </div>
          </AnimatedSection>

          {/* Sidebar — photo + quick facts */}
          <AnimatedSection className="md:col-span-5" delay={0.2}>
            <div className="space-y-4">
              {/* Profile photo */}
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: "var(--border-subtle)",
                  aspectRatio: "3/4",
                }}
              >
                <Image
                  src="/nathan.jpg"
                  alt="Nathan Okolo Chinedu"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, var(--bg-surface), transparent)",
                  }}
                />
                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-4">
                  <p
                    className="font-display text-base font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    Nathan Okolo Chinedu
                  </p>
                  <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                    Software Developer
                  </p>
                </div>
              </div>

              {/* Quick facts card */}
              <div
                className="p-6 rounded-2xl border space-y-5"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                    Focus Areas
                  </p>
                  <div className="space-y-1">
                    {[
                      "Backend Engineering",
                      "Financial Systems",
                      "API Design",
                      "Payment Infrastructure",
                      "Databases & Optimisation",
                      "Automation & Data Processing",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} aria-hidden="true" />
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                    Currently
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Backend Engineer · MAJ FinTech
                  </p>
                </div>

                <div className="border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                    Based in
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Nigeria</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
