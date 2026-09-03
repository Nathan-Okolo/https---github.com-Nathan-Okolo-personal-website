"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SelectedWork() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Selected work"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>Selected Work</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Things I&apos;ve built.
          </h2>
          <p className="text-base mb-16 max-w-xl" style={{ color: "var(--text-muted)" }}>
            Engineering case studies — problem, solution, and the technical reasoning behind each one.
          </p>
        </AnimatedSection>

        {/* Featured project — Akilaah */}
        <AnimatedSection delay={0.15} className="mb-6">
          <div
            className="rounded-2xl border overflow-hidden transition-all duration-300 group"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--accent-border)",
            }}
          >
            <div className="p-8 md:p-12">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>01</span>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full border"
                      style={{ color: "var(--accent)", borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
                    >
                      Flagship Project
                    </span>
                  </div>
                  <h3
                    className="font-display text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    Akilaah
                  </h3>
                  <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                    Fintech · Backend Engineering
                  </p>
                </div>
                <a
                  href="https://akilaah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="project-akilaah-link"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-[1.02] shrink-0"
                  style={{ color: "var(--accent)", borderColor: "var(--accent-border)" }}
                >
                  Live Site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>Problem</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Cooperative societies need reliable, accurate financial infrastructure to manage member funds,
                      automate payments and process loans — with no tolerance for errors.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>What I Built</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      A backend system handling member lifecycles, financial accounts, loan workflows, payment processing
                      and automated direct debit collections — across a microservice architecture.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>Technical Challenge</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Managing complex financial state across savings, loans and contributions for many members simultaneously —
                      with correctness, concurrency control and audit trails as non-negotiable requirements.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>Solution</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Microservice architecture separating payment service (PostgreSQL) from member service (MongoDB),
                      with idempotent transaction handling and reconciliation processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-dim)" }}>My Role</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Backend architecture · Payment engine · Loan management · Member services · Microservices · API design · Business logic
                </p>
              </div>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "REST APIs", "Paystack"].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Remaining projects as expandable rows */}
        <div className="divide-y" style={{ borderTop: "1px solid var(--border-subtle)", borderColor: "var(--border-subtle)" }}>
          {projects.slice(1).map((project, i) => (
            <AnimatedSection key={project.id} delay={0.1 + i * 0.04}>
              <div>
                <button
                  id={`project-${project.id}-toggle`}
                  onClick={() => setActiveId(activeId === project.id ? null : project.id)}
                  className="w-full text-left py-7 flex items-start justify-between gap-6 group cursor-pointer bg-transparent border-0"
                  aria-expanded={activeId === project.id}
                  aria-controls={`project-${project.id}-details`}
                >
                  <div className="flex items-start gap-6 flex-1 min-w-0">
                    <span
                      className="font-mono text-xs shrink-0 mt-1"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {project.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3
                          className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-[var(--accent)]"
                          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                        >
                          {project.title}
                        </h3>
                        {project.url && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border" style={{ color: "var(--text-dim)", borderColor: "var(--border-subtle)" }}>
                            Live
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden md:flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag text-[10px]">{tag}</span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: activeId === project.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 flex items-center justify-center rounded-full border"
                      style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {activeId === project.id && (
                    <motion.div
                      id={`project-${project.id}-details`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="mb-7 p-7 rounded-xl border"
                        style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
                      >
                        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                          {project.description}
                        </p>

                        {(project.problem || project.challenge || project.solution) && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                            {project.problem && (
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-dim)" }}>Problem</p>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.problem}</p>
                              </div>
                            )}
                            {project.challenge && (
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-dim)" }}>Challenge</p>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.challenge}</p>
                              </div>
                            )}
                            {project.solution && (
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-dim)" }}>Solution</p>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.solution}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {project.role && (
                          <div className="mb-5">
                            <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-dim)" }}>My Role</p>
                            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{project.role}</p>
                          </div>
                        )}

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span key={tech} className="tag">{tech}</span>
                            ))}
                          </div>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              id={`project-${project.id}-link`}
                              className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
                              style={{ color: "var(--accent)" }}
                            >
                              Visit Site
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
