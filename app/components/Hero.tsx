"use client"

import Image from 'next/image'
import { Twitter, Github, BookOpen, ExternalLink } from 'lucide-react'
// Text + social links come from /config/siteConfig.ts.
import { siteConfig } from '@/config/siteConfig'

export default function Hero({ compact = false }: { compact?: boolean }) {
  const { personal, social } = siteConfig

  return (
    <section className="px-6 pt-7 pb-6 flex flex-col h-full" style={{ minHeight: 0 }}>

      {/* Name — edit siteConfig.personal.firstName / lastName */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h1
            className="font-semibold tracking-tight text-white leading-[0.92] mb-3"
            style={{ fontSize: compact ? 46 : 56 }}
          >
            {personal.firstName}<br />{personal.lastName}
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)" }}>
            {personal.role}
          </p>
        </div>
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/10 shadow-lg flex-none mt-2">
          <Image src={personal.avatar} alt="Profile Picture" fill className="object-cover" priority />
        </div>
      </div>

      <div style={{ height: 1, background: "var(--separator)", marginBottom: 20 }} />

      {/* Bio — edit siteConfig.personal.tagline */}
      <div className="space-y-4">
        <p className="text-[13px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
          {personal.tagline}
        </p>
        <div>
          <a
            href={siteConfig.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded transition-colors"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--widget-border)",
              background: "rgba(255, 255, 255, 0.02)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-primary)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)"
            }}
          >
            <span>View Résumé</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between mt-auto pt-5"
        style={{ borderTop: "1px solid var(--separator)" }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-md overflow-hidden flex-none">
            {/* Avatar — edit siteConfig.personal.avatar and drop your image into /public.
                alt="" because the name is already rendered next to it (avoid double announcement).
                priority because the avatar is above the fold on every viewport. */}
            <Image src={personal.avatar} alt="" fill priority className="object-cover" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
              {personal.username}
            </p>
            <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
              {personal.location.split(",")[0]} · {personal.age}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[
            { href: social.twitter, icon: <Twitter size={15} />, label: "X" },
            { href: social.github,  icon: <Github size={15} />,  label: "GitHub" },
            { href: social.blog,    icon: <BookOpen size={15} />, label: "Blog" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
