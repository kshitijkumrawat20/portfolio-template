/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
}

export const terminal: TerminalConfig = {
  about: [
    "Name:   Kshitij Kumrawat",
    "Age:    21",
    "Base:   Indore, India",
    "Role:   AI Engineer",
    "",
    "An innovative and results-driven AI/ML Engineer specializing",
    "in Generative AI, RAG, and Agentic AI frameworks like",
    "LangGraph. Adept at transforming complex challenges into",
    "scalable, efficient AI applications.",
  ],
  skills: [
    "Core Skills: Machine Learning · Deep Learning · NLP · RAG · Agentic AI",
    "Languages:   Python",
    "Frameworks:  NumPy · Pandas · PyTorch · scikit-learn · FastAPI · LangGraph · LangChain",
    "Tools & MLOps: Docker · AWS EC2 · ECR · Git · GitHub Actions · VS Code · MLflow · DagsHub · Airflow",
  ],
  experience: [
    "Daily All Day  Aug 2025 – Present   AI Agents & Automation Intern",
    "DBlytics       Mar 2025 – June 2025  AI/ML Intern",
    "WebMobi360     July 2024 – Oct 2024  ML Intern",
  ],
  contact: [
    "email:    kshitijk146@gmail.com",
    "github:   github.com/kshitijkumrawat20",
    "twitter:  x.com/Kshitiz_K20",
    "linkedin: linkedin.com/in/kshitij-kumrawat20",
  ],
  resume: [
    "Opening résumé…",
    "→ drive.google.com/file/d/1FTgBvrelDV9dsk76-H-F4etktKyDxW3B/view?usp=drive_link",
  ],
  whoami: [
    "Kshitij Kumrawat",
    "AI Engineer · Indore, India",
    "",
    "AI/ML Engineer specializing in Generative AI, RAG,",
    "and Agentic AI frameworks.",
  ],
  githubJson: `{"login":"kshitijkumrawat20","name":"Kshitij Kumrawat","bio":"AI/ML Engineer specializing in Generative AI, RAG, and LangGraph","public_repos":22}`,
}
