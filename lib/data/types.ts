export type IconKey =
  | "zap"
  | "globe"
  | "workflow"
  | "stethoscope"
  | "building"
  | "graduation"
  | "sparkles"
  | "calendar"
  | "tasks"
  | "network"
  | "car"
  | "droplets"
  | "brain"
  | "gauge"
  | "smartphone"
  | "monitor"
  | "rocket"
  | "database"
  | "cpu"
  | "layers"

export type AccentKey =
  | "violet"
  | "rose"
  | "cyan"
  | "indigo"
  | "emerald"
  | "amber"
  | "fuchsia"
  | "sky"

export type ArtSurface =
  | "web"
  | "mobile"
  | "desktop"
  | "dashboard"
  | "network"
  | "scene"
  | "ml"

export interface Project {
  slug: string
  title: string
  tagline: string
  category: "client" | "demo"
  platform: string
  client?: string
  location?: string
  period?: string
  deployment?: string
  liveUrl?: string
  liveLabel?: string
  repoUrl?: string
  challengeLabel?: string
  challenge?: string
  solution: string[]
  outcome?: string
  features?: string[]
  tech: string[]
  accent: AccentKey
  icon: IconKey
  surface: ArtSurface
  image?: string
  featured?: boolean
  highlight: { value: string; label: string }
}

export interface Service {
  title: string
  short: string
  icon: IconKey
  accent: AccentKey
  points: string[]
}

export interface SkillGroup {
  domain: string
  items: string[]
  accent: AccentKey
  icon: IconKey
}
