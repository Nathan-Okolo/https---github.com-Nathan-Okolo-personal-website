"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const liveProjects = [
  {
    id: "akilaah",
    number: "01",
    title: "Akilaah",
    category: "Fintech Platform",
    description:
      "Digital cooperative platform for savings, loans, contributions and member management. Built for cooperative societies across Nigeria.",
    url: "https://akilaah.com",
    preview: "/previews/akilaah.png",
    tags: ["Fintech", "Node.js", "TypeScript", "Paystack"],
    role: "Backend Engineer — MAJ FinTech",
    featured: true,
  },
  {
    id: "majfintech",
    title: "MAJ FinTech",
    number: "02",
    category: "Financial Technology Company",
    description:
      "The financial technology company where I work as a backend engineer — building financial systems, payment infrastructure and APIs.",
    url: "https://majfintech.com",
    preview: "/previews/majfintech.png",
    tags: ["Employer", "Fintech", "Backend"],
    role: "Backend Software Engineer",
    featured: false,
  },
  {
    id: "basani",
    title: "Basani Digital Innovations",
    number: "03",
    category: "Digital Infrastructure",
    description:
      "Technology company building digital infrastructure for Nigerian universities, businesses and federal agencies.",
    url: "https://basani.africa",
    preview: "/previews/basani.png",
    tags: ["Digital Transformation", "Technology"],
    role: "Technology / Software",
    featured: false,
  },
  {
    id: "resource-edge",
    title: "Regional Economic Summit",
    number: "04",
    category: "Event / Client Project",
    description:
      "Homepage built for the Regional Economic Summit — a client project covering event information, agenda, speakers and registration.",
    url: "https://reishomepage.vercel.app",
    preview: "/previews/resource-edge.png",
    tags: ["Client Project", "React", "Next.js"],
    role: "Software Developer — Genesys Tech Hub",
    featured: false,
  },
];

export default function LiveProjects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="live-projects"
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="Live projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "var(--accent)" }} aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
            Live Projects
          </span>
          <span className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} aria-hidden="true" />
        </div>

        <h2
          className="font-display text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          In production.
        </h2>
        <p className="text-base max-w-xl mb-16" style={{ color: "var(--text-muted)" }}>
          Real platforms I&apos;ve contributed to — live, in use, and built to handle real users and real money.
        </p>

        {/* Featured project — large */}
        <div className="mb-6">
          <a
            href={liveProjects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            id={`live-${liveProjects[0].id}`}
            className="block group"
            aria-label={`Visit ${liveProjects[0].title} — opens in new tab`}
            onMouseEnter={() => setHovered(liveProjects[0].id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: hovered === liveProjects[0].id ? "var(--accent-border)" : "var(--border-subtle)",
                background: "var(--bg-surface)",
              }}
            >
              {/* Browser chrome bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div
                  className="flex-1 mx-4 h-6 rounded-md flex items-center px-3 font-mono text-xs"
                  style={{ background: "var(--bg-base)", color: "var(--text-dim)" }}
                >
                  akilaah.com
                </div>
                <div
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: hovered === liveProjects[0].id ? "var(--accent)" : "var(--text-muted)" }}
                >
                  <span className="font-mono text-[10px]">Visit</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <motion.div
                  animate={{ scale: hovered === liveProjects[0].id ? 1.02 : 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={liveProjects[0].preview}
                    alt={`${liveProjects[0].title} website screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                </motion.div>
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--bg-surface), transparent)" }}
                />
              </div>

              {/* Card footer */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full border"
                      style={{ color: "var(--accent)", borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
                    >
                      Flagship
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
                      {liveProjects[0].category}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {liveProjects[0].title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                    {liveProjects[0].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {liveProjects[0].tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* 3-column grid for remaining */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveProjects.slice(1).map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`live-${project.id}`}
              className="block group"
              aria-label={`Visit ${project.title} — opens in new tab`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="rounded-xl border overflow-hidden h-full flex flex-col transition-all duration-300"
                style={{
                  borderColor: hovered === project.id ? "var(--accent-border)" : "var(--border-subtle)",
                  background: "var(--bg-surface)",
                }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-2 px-3 py-2.5 border-b shrink-0"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
                >
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div
                    className="flex-1 h-5 rounded-md flex items-center px-2 font-mono text-[10px]"
                    style={{ background: "var(--bg-base)", color: "var(--text-dim)" }}
                  >
                    {project.url.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <motion.div
                    animate={{ scale: hovered === project.id ? 1.04 : 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.preview}
                      alt={`${project.title} website screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </motion.div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top, var(--bg-surface), transparent)" }}
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex-1">
                  <p className="font-mono text-[10px] mb-1" style={{ color: "var(--text-dim)" }}>
                    {project.category}
                  </p>
                  <h3
                    className="font-display text-sm font-semibold mb-1.5 transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: hovered === project.id ? "var(--accent)" : "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>
                </div>

                {/* Footer row */}
                <div
                  className="px-4 pb-4 flex items-center justify-between"
                >
                  <span className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>
                    {project.role}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ color: hovered === project.id ? "var(--accent)" : "var(--text-dim)" }}
                    aria-hidden="true"
                    className="transition-colors shrink-0"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
