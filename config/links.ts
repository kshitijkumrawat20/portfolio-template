/**
 * links.ts
 * ─────────────────────────────────────────────────────────────
 * Curated external reading list shown in the LinksWidget on the
 * desktop. Each entry is an outbound link with a short tag used
 * for display only.
 * ─────────────────────────────────────────────────────────────
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  /** Freeform short label displayed under the author (e.g. "rust"). */
  tag: string
}

export const links: LinkItem[] = [
  { title: "Attention Is All You Need",      author: "Vaswani et al.",    url: "https://arxiv.org/abs/1706.03762",                  tag: "transformers" },
  { title: "Deep Residual Learning",         author: "He et al. (ResNet)", url: "https://arxiv.org/abs/1512.03385",                  tag: "deep-learning" },
  { title: "Retrieval-Augmented Generation", author: "Lewis et al. (RAG)", url: "https://arxiv.org/abs/2005.11401",                  tag: "rag" },
  { title: "Llama 3 Model Card",             author: "Meta AI",           url: "https://github.com/meta-llama/llama3",              tag: "llms" },
  { title: "LangGraph: Multi-Agent Flows",   author: "LangChain Team",    url: "https://langchain-ai.github.io/langgraph/",         tag: "agents" },
]
