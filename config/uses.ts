/**
 * uses.ts
 * ─────────────────────────────────────────────────────────────
 * Data for the /uses-style window. Group your tools by category;
 * each item has a name and an optional short note.
 *
 * Categories and counts are fully flexible — the UI iterates over
 * whatever you provide.
 * ─────────────────────────────────────────────────────────────
 */

export interface UseItem {
  name: string
  /** Optional short descriptor shown in the faint mono style. */
  note?: string
}

export interface UseGroup {
  category: string
  items: UseItem[]
}

export const uses: UseGroup[] = [
  {
    category: "Hardware",
    items: [
      { name: "Development PC", note: "primary machine" },
      { name: "NVIDIA GPU", note: "model training & inference" },
    ],
  },
  {
    category: "Editor",
    items: [
      { name: "VS Code", note: "daily driver" },
    ],
  },
  {
    category: "Terminal",
    items: [
      { name: "PowerShell / WSL" },
      { name: "Git", note: "version control" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "LangChain", note: "agentic workflows" },
      { name: "LangGraph", note: "multi-agent systems" },
      { name: "MLflow / DagsHub", note: "model lifecycle" },
    ],
  },
  {
    category: "Stack defaults",
    items: [
      { name: "Python" },
      { name: "FastAPI", note: "backend APIs" },
      { name: "Streamlit", note: "AI apps UI" },
      { name: "Docker", note: "containerization" },
      { name: "AWS", note: "cloud deployment" },
    ],
  },
]
