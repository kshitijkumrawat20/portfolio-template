"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Github } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { windows } from "@/config/windows"

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const getAppIcon = (id: string, IconComponent: React.ReactNode) => {
  const styles: Record<string, { bg: string; color: string; border?: string }> = {
    about: { bg: "linear-gradient(135deg, #1aa3ff 0%, #0066cc 100%)", color: "#ffffff" },
    experience: { bg: "linear-gradient(135deg, #ff9f0a 0%, #ff3b30 100%)", color: "#ffffff" },
    projects: { bg: "linear-gradient(135deg, #34c759 0%, #00a33c 100%)", color: "#ffffff" },
    blogs: { bg: "linear-gradient(135deg, #af52de 0%, #5856d6 100%)", color: "#ffffff" },
    contact: { bg: "linear-gradient(135deg, #ff2d55 0%, #ff3b30 100%)", color: "#ffffff" },
    resume: { bg: "linear-gradient(135deg, #ffffff 0%, #f2f2f7 100%)", color: "#007aff", border: "1px solid rgba(0,0,0,0.06)" },
    terminal: { bg: "linear-gradient(135deg, #1c1c1e 0%, #000000 100%)", color: "#30d158", border: "1px solid rgba(255,255,255,0.08)" },
    uses: { bg: "linear-gradient(135deg, #8e8e93 0%, #636366 100%)", color: "#ffffff" },
    notes: { bg: "linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)", color: "#ffffff" },
    attention: { bg: "linear-gradient(135deg, #24292f 0%, #bf5af2 100%)", color: "#ffffff" },
    github: { bg: "linear-gradient(135deg, #24292f 0%, #0f1115 100%)", color: "#ffffff" },
    twitter: { bg: "linear-gradient(135deg, #15202b 0%, #10171e 100%)", color: "#1d9bf0" },
  }

  const style = styles[id] || { bg: "linear-gradient(135deg, #007aff 0%, #0056b3 100%)", color: "#ffffff" }

  return (
    <div 
      className="w-full h-full rounded-[24%] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]"
      style={{ 
        background: style.bg, 
        color: style.color,
        border: style.border || "none",
        padding: "18%"
      }}
    >
      {IconComponent}
    </div>
  )
}

type DockItem =
  | { kind: "window"; id: string; label: string; icon: React.ReactNode }
  | { kind: "link"; id: string; label: string; icon: React.ReactNode; url: string }

const dockApps: DockItem[] = windows.map((w) => ({
  kind: "window",
  id: w.id,
  label: w.title,
  icon: (
    <>
      <span className="dock-icon-default flex items-center justify-center w-full h-full">
        <w.icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="dock-icon-macos hidden w-full h-full">
        {getAppIcon(w.id, <w.icon size={18} strokeWidth={2.0} aria-hidden="true" />)}
      </span>
    </>
  ),
}))

const dockLinks: DockItem[] = [
  {
    kind: "link",
    id: "github",
    label: "GitHub",
    icon: (
      <>
        <span className="dock-icon-default flex items-center justify-center w-full h-full">
          <Github size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="dock-icon-macos hidden w-full h-full">
          {getAppIcon("github", <Github size={18} strokeWidth={2.0} aria-hidden="true" />)}
        </span>
      </>
    ),
    url: siteConfig.social.github,
  },
  {
    kind: "link",
    id: "twitter",
    label: "X",
    icon: (
      <>
        <span className="dock-icon-default flex items-center justify-center w-full h-full">
          <XIcon size={18} />
        </span>
        <span className="dock-icon-macos hidden w-full h-full">
          {getAppIcon("twitter", <XIcon size={16} />)}
        </span>
      </>
    ),
    url: siteConfig.social.twitter,
  },
]

function DockIcon({
  item,
  mouseX,
  isOpen,
  onActivate,
}: {
  item: DockItem
  mouseX: ReturnType<typeof useMotionValue<number>>
  isOpen: boolean
  onActivate: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const sizeTransform = useTransform(distance, [-120, 0, 120], [40, 62, 40])
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 200, damping: 14 })

  return (
    <div className="relative flex flex-col items-center gap-1">
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute bottom-full mb-2 px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-[0.06em] whitespace-nowrap pointer-events-none"
            style={{
              background: "var(--tooltip-bg)",
              border: "1px solid var(--widget-border)",
              color: "var(--text-primary)",
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.1 }}
            aria-hidden="true"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        type="button"
        aria-label={item.label}
        aria-pressed={item.kind === "window" ? isOpen : undefined}
        style={{ width: size, height: size }}
        animate={{
          background: isOpen ? "var(--dock-btn-open)" : hovered ? "var(--dock-btn-hover)" : "var(--dock-btn-bg)",
          color: isOpen ? "var(--dock-icon-active)" : "var(--dock-icon)",
        }}
        transition={{ duration: 0.15 }}
        className="rounded-xl flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        whileTap={{ scale: 0.88 }}
        onClick={onActivate}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {item.icon}
      </motion.button>

      <span
        aria-hidden="true"
        className="w-1 h-1 rounded-full"
        style={{
          background: isOpen ? "var(--accent)" : "transparent",
          transition: "background 0.2s",
        }}
      />
    </div>
  )
}

export default function Dock({
  openWindows,
  onToggleWindow,
}: {
  openWindows: string[]
  onToggleWindow: (id: string, url?: string) => void
}) {
  const mouseX = useMotionValue(Infinity)

  return (
    <nav
      aria-label="Application dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]"
    >
      <motion.div
        className="flex items-end gap-2 px-3 pb-2 pt-2.5 rounded-2xl"
        style={{
          background: "var(--dock-bg)",
          border: "1px solid var(--widget-border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockApps.map((item) => (
          <DockIcon
            key={item.id}
            item={item}
            mouseX={mouseX}
            isOpen={openWindows.includes(item.id)}
            onActivate={() => onToggleWindow(item.id)}
          />
        ))}

        <span
          aria-hidden="true"
          className="h-8 self-center mx-1 rounded-full"
          style={{ width: 1, background: "var(--widget-border)" }}
        />

        {dockLinks.map((item) => (
          <DockIcon
            key={item.id}
            item={item}
            mouseX={mouseX}
            isOpen={false}
            onActivate={() => onToggleWindow(item.id, item.kind === "link" ? item.url : undefined)}
          />
        ))}
      </motion.div>
    </nav>
  )
}
