/**
 * experience.ts
 * ─────────────────────────────────────────────────────────────
 *  - `experience`        → full cards shown in the Experience window
 *                          (click one to open a modal with achievements + links).
 *  - `resumeExperience`  → condensed bullets shown on the Résumé window.
 *  - `education`         → single degree entry for the Résumé.
 *  - `teaching`          → free-form bullets for the Teaching section.
 *
 * The two experience lists are separate on purpose: the main site shows
 * every role, while the résumé groups multiple roles into summaries.
 * ─────────────────────────────────────────────────────────────
 */

export interface ExperienceItem {
  company: string
  role: string
  /** e.g. "Jun 2024 – Present" or "2023". */
  period: string
  /** One-line summary shown on the card. */
  description: string
  tech: string[]
  /** Bullet points shown in the modal. */
  achievements: string[]
  /** Optional related links shown at the bottom of the modal. */
  links?: { type: string; url: string; label: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Daily All Day",
    role: "AI Agents & Automation Intern",
    period: "Aug 2025 – Present",
    description: "Built WhatsApp chatbots and automated workflows with Supabase & n8n.",
    tech: ["n8n", "Supabase", "Python", "Generative AI", "AI Agents"],
    achievements: [
      "Built a WhatsApp chatbot for Ayurveda education & product marketing, scaling to 2,000+ users and converting them into leads and sales.",
      "Automated social media content generation and posting, email campaigns, and AI blog generation, improving content reach and consistency.",
      "Developed internal tools and lead nurturing workflows using Supabase & n8n to streamline operations and boost conversions."
    ],
  },
  {
    company: "DBlytics",
    role: "AI/ML Intern",
    period: "Mar 2025 – June 2025",
    description: "Engineered AI automation features and deployed conversational AI agents.",
    tech: ["FastAPI", "Python", "LangChain", "Docker", "AWS"],
    achievements: [
      "Engineered and integrated advanced AI automation features into core SaaS products, enhancing operational efficiency by 30% and elevating the user experience.",
      "Designed and deployed conversational AI agents that successfully resolved 40% of common user queries without human intervention, leading to a 15% increase in user engagement."
    ],
  },
  {
    company: "WebMobi360",
    role: "ML Intern",
    period: "July 2024 – Oct 2024",
    description: "Architected question-generation engine and voice AI interview agents.",
    tech: ["Python", "LangChain", "FastAPI", "LLMs", "Voice AI"],
    achievements: [
      "Architected a dynamic question-generation engine for the Ai Talent Quest platform using LLMs, driving a 25% lift in user interaction with personalized training modules.",
      "Co-developed a live voice AI interview agent that simulated realistic interview scenarios, contributing to a 30% improvement in positive user feedback."
    ],
  },
]

// ── Résumé-only condensed version ────────────────────────────────────

export interface ResumeExperienceItem {
  company: string
  role: string
  period: string
  /** Optional list of sub-companies (e.g. for a contractor umbrella). */
  subRoles?: string[]
  bullets: string[]
}

export const resumeExperience: ResumeExperienceItem[] = [
  {
    company: "Daily All Day",
    role: "AI Agents & Automation Intern",
    period: "Aug 2025 – Present",
    bullets: [
      "Built a WhatsApp chatbot for Ayurveda education & product marketing, scaling to 2,000+ users and converting them into leads and sales.",
      "Automated social media content generation and posting, email campaigns, and AI blog generation, improving content reach and consistency.",
      "Developed internal tools and lead nurturing workflows using Supabase & n8n to streamline operations and boost conversions."
    ],
  },
  {
    company: "DBlytics",
    role: "AI/ML Intern",
    period: "Mar 2025 – June 2025",
    bullets: [
      "Engineered and integrated advanced AI automation features into core SaaS products, enhancing operational efficiency by 30% and elevating the user experience.",
      "Designed and deployed conversational AI agents that successfully resolved 40% of common user queries without human intervention, leading to a 15% increase in user engagement."
    ],
  },
  {
    company: "WebMobi360",
    role: "ML Intern",
    period: "July 2024 – Oct 2024",
    bullets: [
      "Architected a dynamic question-generation engine for the Ai Talent Quest platform using LLMs, driving a 25% lift in user interaction with personalized training modules.",
      "Co-developed a live voice AI interview agent that simulated realistic interview scenarios, contributing to a 30% improvement in positive user feedback."
    ],
  },
]

// ── Education + Certifications ─────────────────────────────────────────────

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export const education: EducationItem = {
  school: "RGPV University, India",
  degree: "B.Tech in Computer Science and Engineering (CGPA: 7.62 | XII Science: 90%)",
  period: "2022 – 2026",
}

export const certifications: string[] = [
  "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
  "Oracle Generative AI Professional",
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
]
