import {
  Brain,
  Building2,
  CalendarCheck,
  Car,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Globe,
  GraduationCap,
  Layers,
  ListChecks,
  Monitor,
  Network,
  Rocket,
  Smartphone,
  Sparkles,
  Stethoscope,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { IconKey } from "@/lib/data/types"

const icons: Record<IconKey, LucideIcon> = {
  zap: Zap,
  globe: Globe,
  workflow: Workflow,
  stethoscope: Stethoscope,
  building: Building2,
  graduation: GraduationCap,
  sparkles: Sparkles,
  calendar: CalendarCheck,
  tasks: ListChecks,
  network: Network,
  car: Car,
  droplets: Droplets,
  brain: Brain,
  gauge: Gauge,
  smartphone: Smartphone,
  monitor: Monitor,
  rocket: Rocket,
  database: Database,
  cpu: Cpu,
  layers: Layers,
}

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Cmp = icons[name]
  return <Cmp aria-hidden="true" className={className} />
}
