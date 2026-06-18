"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

// Types
interface AttentionWeights {
  [head: number]: number[][] // N x N weight matrix
}

const DEFAULT_ATTENTION_TEXT = "Building autonomous multi-agent systems with LangGraph"

export default function AttentionVisualizer({ compact = false }: { compact?: boolean }) {
  const [activeHead, setActiveHead] = useState<number>(0)
  const [hoveredTokenIndex, setHoveredTokenIndex] = useState<number | null>(null)
  const [inputText, setInputText] = useState<string>(DEFAULT_ATTENTION_TEXT)
  const activeHeadRef = useRef(activeHead)
  activeHeadRef.current = activeHead

  useEffect(() => {
    if (inputText === DEFAULT_ATTENTION_TEXT) return

    const timer = setTimeout(() => {
      const tokenCount = inputText.trim() ? inputText.trim().split(/\s+/).slice(0, 8).length : 0
      if (typeof window !== "undefined" && (window as any).pendo) {
        (window as any).pendo.track("attention_visualizer_text_analyzed", {
          input_text: inputText.substring(0, 60),
          token_count: tokenCount,
          is_default_text: false,
          active_head: activeHeadRef.current,
        })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [inputText])
  
  // Parse text into tokens (limit to 8 to fit layouts nicely)
  const tokens = useMemo(() => {
    return inputText
      .trim()
      .split(/\s+/)
      .slice(0, 8)
  }, [inputText])

  const N = tokens.length

  // Generate deterministic attention weights based on token relationships and head characteristics
  const attentionData = useMemo<AttentionWeights>(() => {
    const data: AttentionWeights = { 0: [], 1: [], 2: [], 3: [] }

    for (let head = 0; head < 4; head++) {
      const matrix: number[][] = []
      for (let i = 0; i < N; i++) {
        const row: number[] = []

        for (let j = 0; j < N; j++) {
          let weight = 0.05 // baseline noise

          if (head === 0) {
            // Head 0: Local Attention (focuses on adjacent tokens)
            const dist = Math.abs(i - j)
            if (dist === 0) weight = 0.6
            else if (dist === 1) weight = 0.3
            else if (dist === 2) weight = 0.1
          } else if (head === 1) {
            // Head 1: Global/Core Concept Focus (looks at agents/LangGraph/systems)
            const tokenLower = tokens[j].toLowerCase()
            if (tokenLower.includes("agent") || tokenLower.includes("langgraph")) {
              weight = 0.7
            } else if (tokenLower.includes("systems") || tokenLower.includes("building")) {
              weight = 0.4
            }
          } else if (head === 2) {
            // Head 2: Syntactic/Semantic Connections (e.g., adj -> noun)
            const iToken = tokens[i].toLowerCase()
            const jToken = tokens[j].toLowerCase()
            if (iToken === "autonomous" && jToken === "systems") weight = 0.8
            else if (iToken === "multi-agent" && jToken === "systems") weight = 0.8
            else if (iToken === "building" && jToken === "systems") weight = 0.6
            else if (iToken === "with" && jToken === "langgraph") weight = 0.9
            else if (i === j) weight = 0.15
          } else {
            // Head 3: Reverse Positional / Broad Context (looks backward or forward)
            weight = Math.max(0.01, 1 - Math.abs(i - j) / N)
          }

          // Add a bit of random seed for variety
          const hash = (i * 7 + j * 13 + head * 3) % 10
          weight += hash * 0.02

          row.push(weight)
        }

        // Softmax normalization
        const expRow = row.map(w => Math.exp(w))
        const expSum = expRow.reduce((a, b) => a + b, 0)
        matrix.push(expRow.map(w => w / expSum))
      }
      data[head] = matrix
    }

    return data
  }, [tokens, N])

  const currentMatrix = attentionData[activeHead]

  // Color theme for each head
  const HEAD_THEMES = [
    { name: "Local Head", desc: "Focuses on adjacent tokens", color: "rgba(0, 190, 240, 0.95)", gradient: "from-cyan-500 to-blue-500", glow: "shadow-cyan-500/20" },
    { name: "Concept Head", desc: "Focuses on agentic entities", color: "rgba(168, 85, 247, 0.95)", gradient: "from-purple-500 to-pink-500", glow: "shadow-purple-500/20" },
    { name: "Semantic Head", desc: "Focuses on grammar structures", color: "rgba(16, 185, 129, 0.95)", gradient: "from-emerald-500 to-teal-500", glow: "shadow-emerald-500/20" },
    { name: "Context Head", desc: "Broad uniform distribution", color: "rgba(245, 158, 11, 0.95)", gradient: "from-amber-500 to-orange-500", glow: "shadow-amber-500/20" },
  ]

  const activeTheme = HEAD_THEMES[activeHead]

  return (
    <div className={`attention-visualizer ${compact ? "px-6 py-6 h-full flex flex-col" : "py-20 px-6 flex flex-col h-full"}`} style={{ minHeight: 0 }}>
      {/* Title */}
      <div className="mb-4 flex-none">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--text-muted)" }}>
          Interactive Deep Learning Simulation
        </p>
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] font-semibold text-white">Self-Attention Matrix</h2>
          <Sparkles size={14} className="text-cyan-400 animate-pulse" />
        </div>
        <p className="text-[12px] mt-1" style={{ color: "var(--text-secondary)" }}>
          Visualizing weight vectors in a transformer layer. Hover over a token to see connection strengths.
        </p>
      </div>

      <div style={{ height: 1, background: "var(--separator)", marginBottom: 16 }} />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-1" style={{ minHeight: 0 }}>
        {/* Head Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-none">
          {HEAD_THEMES.map((theme, i) => (
            <button
              key={i}
              onClick={() => setActiveHead(i)}
              className="px-3 py-2 text-left rounded-lg transition-all border text-[11px]"
              style={{
                background: activeHead === i ? "rgba(255,255,255,0.03)" : "transparent",
                borderColor: activeHead === i ? activeTheme.color : "var(--widget-border)",
              }}
            >
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${theme.gradient}`} />
                {theme.name}
              </div>
              <div className="text-[9px] mt-0.5" style={{ color: "var(--text-faint)" }}>{theme.desc}</div>
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-2 rounded-lg">
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 flex-none">Input:</span>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            maxLength={60}
            className="bg-transparent border-none text-[12px] text-white focus:outline-none w-full"
            placeholder="Type a sentence (max 8 words)"
          />
        </div>

        {/* Token Links SVG Visualization */}
        <div className="relative bg-black/40 border border-white/5 rounded-xl p-6 h-48 flex flex-col justify-between overflow-hidden">
          {/* Top Token row */}
          <div className="flex justify-between w-full px-2 z-10">
            {tokens.map((token, idx) => (
              <span
                key={`top-${idx}`}
                className="font-mono text-[11px] font-semibold text-white/50 cursor-default select-none py-1 px-1.5 rounded"
              >
                {token}
              </span>
            ))}
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none px-6 py-8">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={activeTheme.color} stopOpacity={0.6} />
                <stop offset="100%" stopColor={activeTheme.color} stopOpacity={0.1} />
              </linearGradient>
            </defs>

            {hoveredTokenIndex !== null &&
              tokens.map((_, targetIdx) => {
                const weight = currentMatrix[hoveredTokenIndex][targetIdx]
                if (weight < 0.02) return null // Hide negligible links
                
                // Calculate anchor points (approximate percentages)
                const startX = `${((hoveredTokenIndex + 0.5) / N) * 100}%`
                const endX = `${((targetIdx + 0.5) / N) * 100}%`
                
                return (
                  <motion.path
                    key={`path-${targetIdx}`}
                    d={`M ${startX} 30 C ${startX} 90, ${endX} 90, ${endX} 150`}
                    fill="none"
                    stroke={activeTheme.color}
                    strokeWidth={Math.max(0.5, weight * 7)}
                    strokeOpacity={Math.max(0.08, weight * 0.95)}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )
              })}
          </svg>

          {/* Bottom Token row (Hover triggers) */}
          <div className="flex justify-between w-full px-2 z-10">
            {tokens.map((token, idx) => (
              <div
                key={`bottom-${idx}`}
                onMouseEnter={() => setHoveredTokenIndex(idx)}
                onMouseLeave={() => setHoveredTokenIndex(null)}
                className="transition-all duration-150 py-1 px-1.5 rounded font-mono text-[11px] font-semibold cursor-pointer border"
                style={{
                  background: hoveredTokenIndex === idx ? "rgba(255,255,255,0.06)" : "transparent",
                  borderColor: hoveredTokenIndex === idx ? activeTheme.color : "transparent",
                  color: hoveredTokenIndex === idx ? "white" : "rgba(255,255,255,0.8)",
                  boxShadow: hoveredTokenIndex === idx ? `0 0 10px ${activeTheme.color}33` : "none",
                }}
              >
                {token}
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex-1">
            <h3 className="text-[13px] font-semibold text-white mb-1.5">Attention Weights Heatmap</h3>
            <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
              The matrix displays weights mapping source tokens (columns) to target query tokens (rows).
            </p>
            <div className="mt-4 flex gap-4 text-[10px] font-mono text-white/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-white/5 border border-white/5" />
                <span>0.0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded" style={{ background: activeTheme.color, opacity: 0.4 }} />
                <span>Mid</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded" style={{ background: activeTheme.color }} />
                <span>1.0 (Strong)</span>
              </div>
            </div>
          </div>

          {/* Grid Render */}
          <div className="flex-none bg-black/40 border border-white/5 p-4 rounded-xl flex flex-col items-end">
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${N}, auto)`, gap: 3 }}>
              {currentMatrix.map((row, rIdx) =>
                row.map((weight, cIdx) => {
                  const isCellHovered = hoveredTokenIndex === rIdx || hoveredTokenIndex === cIdx
                  return (
                    <div
                      key={`grid-${rIdx}-${cIdx}`}
                      title={`"${tokens[rIdx]}" attends to "${tokens[cIdx]}": ${(weight * 100).toFixed(1)}%`}
                      className="w-7 h-7 rounded-sm cursor-help flex items-center justify-center transition-all duration-150"
                      style={{
                        background: weight > 0.05 ? activeTheme.color : "rgba(255,255,255,0.05)",
                        opacity: weight > 0.05 ? Math.max(0.12, weight * 0.95) : 1,
                        outline: isCellHovered ? `1px solid ${activeTheme.color}` : "none",
                        transform: isCellHovered ? "scale(1.08)" : "scale(1)",
                        zIndex: isCellHovered ? 10 : 1,
                      }}
                      onMouseEnter={() => setHoveredTokenIndex(rIdx)}
                      onMouseLeave={() => setHoveredTokenIndex(null)}
                    >
                      {weight > 0.15 && (
                        <span className="text-[8px] font-mono text-white font-bold select-none">
                          {Math.round(weight * 10)}
                        </span>
                      )}
                    </div>
                  )
                })
              )}
            </div>
            {/* Axis labels placeholder */}
            <div className="w-full flex justify-between px-1 mt-1 text-[8px] font-mono text-white/30">
              <span>Col (Source)</span>
              <span>Row (Target)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
