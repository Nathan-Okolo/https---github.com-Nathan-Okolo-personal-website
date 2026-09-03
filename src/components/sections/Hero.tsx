"use client";

import { motion, Variants } from "framer-motion";
import { social } from "@/data/social";

const socials = [
  { label: "GitHub", href: social.github, external: true },
  { label: "LinkedIn", href: social.linkedin, external: true },
  { label: "Email", href: `mailto:${social.email}`, external: false },
  { label: "CV", href: social.cv, external: false },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 grid-pattern opacity-40"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />

      {/* Accent glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(129, 140, 248, 0.05)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "var(--accent)" }}
          >
            Software Developer · Problem Solver · Builder
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            I build technology{" "}
            <br className="hidden md:block" />
            that solves{" "}
            <span style={{ color: "var(--accent)" }}>real problems.</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m Nathan, a software developer who enjoys turning complex problems into
            practical, reliable software. I build systems, improve processes and work with people
            to turn ideas into products that actually work.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#work"
              id="hero-view-work"
              className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={`mailto:${social.email}`}
              id="hero-lets-talk"
              className="cta-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="relative z-10 flex items-center gap-6 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external || s.label === "CV" ? "_blank" : undefined}
                download={s.label === "CV" ? "Nathan_Okolo_Chinedu_CV.pdf" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                id={`hero-${s.label.toLowerCase()}`}
                className="link-hover-white font-mono text-xs tracking-wider uppercase transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                aria-label={s.label === "CV" ? "Download CV" : s.external ? `${s.label} — opens in new tab` : s.label}
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 right-6 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--text-dim)" }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, var(--border-subtle), transparent)", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
