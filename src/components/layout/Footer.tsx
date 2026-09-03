import { social } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border-subtle)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} Nathan Okolo Chinedu. Built with Next.js.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors hover:text-white"
            style={{ color: "var(--text-muted)" }}
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors hover:text-white"
            style={{ color: "var(--text-muted)" }}
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${social.email}`}
            className="font-mono text-xs transition-colors hover:text-white"
            style={{ color: "var(--text-muted)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
