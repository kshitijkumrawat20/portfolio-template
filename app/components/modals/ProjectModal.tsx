"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import type { ProjectItem } from "@/config/projects"

interface ProjectModalProps {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 gap-0 overflow-hidden"
        style={{
          background: "var(--widget-bg)",
          border: "1px solid var(--widget-border)",
          borderRadius: 8,
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-5" style={{ borderBottom: "1px solid var(--separator)" }}>
          <DialogTitle className="text-[18px] font-semibold text-white mb-1">
            {project.title}
          </DialogTitle>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--text-secondary)" }}>
            {project.tech.join(" · ")}
          </p>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Description */}
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.12em] mb-2"
              style={{ color: "var(--text-faint)" }}
            >
              Description
            </p>
            <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3"
                style={{ color: "var(--text-faint)" }}
              >
                Key Features
              </p>
              <ul className="space-y-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-mono text-[10px] flex-none pt-[3px]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    border: "1px solid var(--widget-border)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <Github size={11} />
                  GitHub Repository
                  <ExternalLink size={9} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    border: "1px solid var(--widget-border)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  Live Demo
                  <ExternalLink size={9} />
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
