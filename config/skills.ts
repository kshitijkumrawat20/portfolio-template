/**
 * skills.ts
 * ─────────────────────────────────────────────────────────────
 * Skills grouped by category. Keys become category labels on the
 * left; values become the chip list on the right.
 *
 * Add, remove, or rename categories freely — the Résumé section
 * iterates over Object.entries(skills), so the UI adapts.
 * ─────────────────────────────────────────────────────────────
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Core Skills":             ["Machine Learning", "Deep Learning", "NLP", "RAG", "Agentic AI"],
  "Programming Languages":   ["Python"],
  "Frameworks & Libraries":  ["NumPy", "Pandas", "PyTorch", "scikit-learn", "FastAPI", "LangGraph", "LangChain"],
  "Developer & MLOps Tools": ["Docker", "AWS EC2", "ECR", "Git", "GitHub Actions", "VS Code", "MLflow", "DagsHub", "Airflow"],
}
