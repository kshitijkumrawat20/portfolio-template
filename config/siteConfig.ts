/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills, blogs) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  /** Medium, Hashnode, personal blog, etc. */
  blog: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Kshitij",
    lastName: "Kumrawat",
    fullName: "Kshitij Kumrawat",
    initials: "KK",
    role: "AI Engineer",
    shortRole: "AI / ML Engineer",
    tagline:
      "An innovative and results-driven AI/ML Engineer specializing in Generative AI, RAG, and Agentic AI frameworks like LangGraph. Adept at transforming complex challenges into scalable AI applications.",
    location: "Indore, India",
    age: 21,
    avatar: "/profile3.png",
    username: "kshitijkumrawat20",
  },

  social: {
    github: "https://github.com/kshitijkumrawat20",
    twitter: "https://x.com/Kshitiz_K20",
    blog: "https://www.linkedin.com/in/kshitij-kumrawat20/",
    githubUsername: "kshitijkumrawat20",
    twitterHandle: "Kshitiz_K20",
  },

  contact: {
    email: "kshitijk146@gmail.com",
    calendar: "https://www.linkedin.com/in/kshitij-kumrawat20/",
    heading: "Get in Touch",
    subheading: "Open to collaborations, full-time opportunities, or just a conversation.",
    rows: [
      { icon: "mail",     href: "mailto:kshitijk146@gmail.com",                  label: "Email",           mono: "kshitijk146@gmail.com" },
      { icon: "github",   href: "https://github.com/kshitijkumrawat20",            label: "GitHub",          mono: "kshitijkumrawat20" },
      { icon: "twitter",  href: "https://x.com/Kshitiz_K20",                       label: "X / Twitter",     mono: "@Kshitiz_K20" },
    ],
  },

  seo: {
    title: "Kshitij Kumrawat — Portfolio",
    description: "Personal portfolio of Kshitij Kumrawat, AI Engineer specializing in Agentic AI, RAG, and Machine Learning.",
  },

  resumeLink: "https://drive.google.com/file/d/1FTgBvrelDV9dsk76-H-F4etktKyDxW3B/view?usp=drive_link",

  features: {
    konami: true,
  },
}
