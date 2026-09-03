"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { social } from "@/data/social";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(9, 9, 11, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="#"
            className="font-display font-bold text-base tracking-tight transition-opacity hover:opacity-70"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            aria-label="Nathan Okolo Chinedu - Home"
          >
            Nathan
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-sm font-medium transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ background: "var(--accent)" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${social.email}`}
              id="nav-cta"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.02]"
              style={{
                color: "var(--accent)",
                borderColor: "var(--accent-border)",
                background: "var(--accent-dim)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-dim)";
              }}
            >
              Let&apos;s Talk
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 border-0 bg-transparent cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="w-5 h-px block"
                style={{ background: "var(--text-primary)" }}
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="w-5 h-px block"
                style={{ background: "var(--text-primary)" }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="w-5 h-px block"
                style={{ background: "var(--text-primary)" }}
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "var(--bg-base)" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="list-none m-0 p-0 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-display text-4xl font-bold bg-transparent border-0 cursor-pointer p-0 text-left w-full transition-colors"
                      style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)"; }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-12 pt-8 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={`mailto:${social.email}`}
                  className="font-mono text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  {social.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
