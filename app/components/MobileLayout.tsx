"use client"

import { useEffect, useState } from "react"
import Hero from "./Hero"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Blogs from "./sections/Blogs"
import Contact from "./sections/Contact"
import Resume from "./sections/Resume"
import AttentionVisualizer from "./sections/AttentionVisualizer"
// Initials + footer name come from /config/siteConfig.ts.
import { siteConfig } from "@/config/siteConfig"
import type { PostMeta } from "@/lib/posts"

const NAV = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "attention",  label: "Attention" },
  { id: "writing",    label: "Writing" },
  { id: "contact",    label: "Contact" },
  { id: "resume",     label: "Résumé" },
]

const BORDER = "1px solid var(--separator)"

export default function MobileLayout({ posts }: { posts: PostMeta[] }) {
  const [time, setTime] = useState("")
  const [activeId, setActiveId] = useState("about")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }))
    }
    update()
    // Minute-level precision is plenty for a status bar — saves 29 re-renders/sec.
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="desktop-bg" style={{ minHeight: "100dvh", color: "var(--foreground)" }}>

      {/* Status bar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5"
        style={{ height: 44, background: "var(--menubar-bg)", borderBottom: BORDER, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
          {/* Initials — edit siteConfig.personal.initials */}
          {siteConfig.personal.initials}
        </span>
        <span className="font-mono text-[11px]" style={{ color: "var(--text-secondary)" }}>
          {time}
        </span>
      </header>

      {/* Section nav */}
      <nav
        className="sticky z-40 flex items-center gap-5 px-5 overflow-x-auto"
        style={{ top: 44, height: 36, background: "var(--menubar-bg)", borderBottom: BORDER, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", scrollbarWidth: "none", overscrollBehaviorX: "contain" }}
      >
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors pb-px"
            style={{
              color: activeId === id ? "var(--text-primary)" : "var(--text-muted)",
              borderBottom: activeId === id ? "1px solid var(--accent)" : "1px solid transparent",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Sections */}
      <section id="about" style={{ borderBottom: BORDER }}>
        <Hero />
      </section>

      <section id="experience" style={{ borderBottom: BORDER }}>
        <Experience compact />
      </section>

      <section id="projects" style={{ borderBottom: BORDER }}>
        <Projects compact />
      </section>

      <section id="attention" style={{ borderBottom: BORDER }}>
        <AttentionVisualizer compact />
      </section>

      <section id="writing" style={{ borderBottom: BORDER }}>
        <Blogs compact posts={posts} />
      </section>

      <section id="contact" style={{ borderBottom: BORDER }}>
        <Contact compact />
      </section>

      <section id="resume" style={{ borderBottom: BORDER }}>
        <Resume compact />
      </section>

      {/* Footer — edit siteConfig.personal.fullName */}
      <footer className="px-6 py-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
          {siteConfig.personal.fullName} · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
