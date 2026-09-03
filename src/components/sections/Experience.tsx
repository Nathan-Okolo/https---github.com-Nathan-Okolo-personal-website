"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const active = experiences.find((e) => e.id === activeId)!;

  return (
    <section
      id="experience"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Work experience"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Experience</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Where I&apos;ve worked.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Tab List */}
          <AnimatedSection className="md:col-span-4" delay={0.15}>
            <nav aria-label="Experience tabs">
              <ul className="list-none m-0 p-0 space-y-1">
                {experiences.map((exp) => (
                  <li key={exp.id}>
                    <button
                      id={`exp-tab-${exp.id}`}
                      onClick={() => setActiveId(exp.id)}
                      role="tab"
                      aria-selected={activeId === exp.id}
                      aria-controls={`exp-panel-${exp.id}`}
                      className="w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer bg-transparent flex items-start justify-between gap-2"
                      style={{
                        borderColor: activeId === exp.id ? "var(--accent-border)" : "transparent",
                        background: activeId === exp.id ? "var(--accent-dim)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (activeId !== exp.id) {
                          (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-surface)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeId !== exp.id) {
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }
                      }}
                    >
                      <div>
                        <p
                          className="text-sm font-medium leading-tight"
                          style={{ color: activeId === exp.id ? "var(--text-primary)" : "var(--text-secondary)" }}
                        >
                          {exp.company}
                        </p>
                        <p className="font-mono text-[10px] mt-1" style={{ color: "var(--text-muted)" }}>
                          {exp.period}
                        </p>
                      </div>
                      {exp.featured && (
                        <span
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 mt-0.5"
                          style={{ color: "var(--accent)", borderColor: "var(--accent-border)" }}
                        >
                          Current
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </AnimatedSection>

          {/* Detail Panel */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                id={`exp-panel-${activeId}`}
                role="tabpanel"
                aria-labelledby={`exp-tab-${activeId}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-2xl border h-full"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="font-display text-xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                      {active.role}
                    </h3>
                    <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
                      {active.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {active.url ? (
                      <a
                        href={active.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sm transition-colors hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        {active.company} ↗
                      </a>
                    ) : (
                      <span className="font-medium text-sm" style={{ color: "var(--accent)" }}>
                        {active.company}
                      </span>
                    )}
                    <span style={{ color: "var(--text-dim)" }}>·</span>
                    <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {active.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {active.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 list-none m-0 p-0">
                  {active.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
