import {
  Activity,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  Heart,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react"

export function DashboardMock() {
  return (
    <div aria-hidden="true" className="flex h-full w-full bg-[#f8faff] text-[#1e293b] select-none text-[11px] font-sans antialiased">
      {/* 1. Left Mini Sidebar */}
      <div className="flex w-[104px] shrink-0 flex-col justify-between border-r border-[#e2e8f0]/80 bg-white/90 p-2.5">
        <div>
          {/* MediCare Logo */}
          <div className="mb-4 flex items-center gap-1.5 px-1">
            <span className="flex size-5 items-center justify-center rounded-md bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] text-white shadow-sm">
              <Activity className="size-3" strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-extrabold tracking-tight text-[#0f172a]">MediCare</span>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-0.5">
            <div className="flex items-center gap-2 rounded-lg bg-[#3b82f6] px-2 py-1.5 text-[9.5px] font-bold text-white shadow-sm">
              <LayoutDashboard className="size-3" />
              <span>Dashboard</span>
            </div>
            {[
              { label: "Patients", icon: Users },
              { label: "Appointments", icon: Calendar },
              { label: "Billing", icon: CreditCard },
              { label: "Reports", icon: FileText },
              { label: "Settings", icon: Settings },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[9.5px] font-semibold text-[#64748b] hover:bg-[#f1f5f9] transition-colors"
              >
                <Icon className="size-3 text-[#94a3b8]" />
                <span>{label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* 2. Main Dashboard Area */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="flex h-9 shrink-0 items-center justify-between border-b border-[#e2e8f0]/80 bg-white/80 px-3.5">
          <div className="flex h-6 flex-1 max-w-[200px] items-center gap-1.5 rounded-full bg-[#f1f5f9] px-2.5 text-[9px] text-[#94a3b8]">
            <Search className="size-3 text-[#94a3b8]" />
            <span className="truncate">Search patient, appointment...</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="relative cursor-pointer text-[#64748b]">
              <Bell className="size-3.5" />
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-rose-500" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] text-[8px] font-bold text-white shadow-sm">
                DS
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 space-y-2.5 overflow-hidden p-3.5">
          {/* Welcome Greeting */}
          <div>
            <h2 className="text-[13px] font-extrabold tracking-tight text-[#0f172a]">
              Welcome back, Dr. Smith
            </h2>
            <p className="text-[8.5px] text-[#64748b]">Here&apos;s what&apos;s happening today</p>
          </div>

          {/* 3 KPI Metric Cards */}
          <div className="grid grid-cols-3 gap-2">
            {/* Patients Card */}
            <div className="rounded-xl border border-[#e2e8f0]/80 bg-white p-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold text-[#64748b]">Total Patients</span>
                <span className="flex size-4 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Heart className="size-2.5" />
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[14px] font-extrabold text-[#0f172a]">1,248</span>
                <span className="text-[7.5px] font-bold text-emerald-600">+12%</span>
              </div>
            </div>

            {/* Appointments Card */}
            <div className="rounded-xl border border-[#e2e8f0]/80 bg-white p-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold text-[#64748b]">Appointments</span>
                <span className="flex size-4 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Calendar className="size-2.5" />
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[14px] font-extrabold text-[#0f172a]">24</span>
                <span className="text-[7.5px] font-bold text-emerald-600">+5%</span>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="rounded-xl border border-[#e2e8f0]/80 bg-white p-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold text-[#64748b]">Revenue</span>
                <span className="flex size-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CreditCard className="size-2.5" />
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[14px] font-extrabold text-[#0f172a]">$12,450</span>
                <span className="text-[7.5px] font-bold text-emerald-600">+18%</span>
              </div>
            </div>
          </div>

          {/* Bottom Split: Appointments List + Mini Calendar */}
          <div className="grid grid-cols-[1.2fr_0.85fr] gap-2">
            {/* Upcoming Appointments */}
            <div className="rounded-xl border border-[#e2e8f0]/80 bg-white p-2.5 shadow-xs">
              <p className="mb-1.5 text-[9px] font-bold text-[#0f172a]">Upcoming Appointments</p>
              <div className="space-y-1.5">
                {[
                  { name: "Sarah Johnson", type: "General Checkup", time: "10:00 AM", initial: "SJ", bg: "bg-blue-100 text-blue-700" },
                  { name: "Michael Brown", type: "Follow-up", time: "11:30 AM", initial: "MB", bg: "bg-purple-100 text-purple-700" },
                  { name: "Emily Davis", type: "Consultation", time: "02:00 PM", initial: "ED", bg: "bg-emerald-100 text-emerald-700" },
                ].map((apt) => (
                  <div key={apt.name} className="flex items-center justify-between rounded-lg bg-[#f8faff] px-2 py-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`flex size-4.5 items-center justify-center rounded-full text-[7px] font-bold ${apt.bg}`}>
                        {apt.initial}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[8px] font-bold text-[#1e293b]">{apt.name}</p>
                        <p className="truncate text-[7px] text-[#64748b]">{apt.type}</p>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-semibold text-[#475569]">{apt.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Calendar Widget */}
            <div className="rounded-xl border border-[#e2e8f0]/80 bg-white p-2.5 shadow-xs">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[8.5px] font-bold text-[#0f172a]">July 2024</span>
                <div className="flex items-center gap-1 text-[#64748b]">
                  <ChevronLeft className="size-2.5 cursor-pointer" />
                  <ChevronRight className="size-2.5 cursor-pointer" />
                </div>
              </div>
              {/* Day headers */}
              <div className="grid grid-cols-7 text-center text-[6.5px] font-semibold text-[#94a3b8] mb-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
              {/* Day numbers */}
              <div className="grid grid-cols-7 gap-y-0.5 text-center text-[7px] font-medium text-[#334155]">
                {Array.from({ length: 31 }, (_, i) => i + 1).slice(0, 21).map((day) => (
                  <span
                    key={day}
                    className={`flex size-3.5 mx-auto items-center justify-center rounded-full ${
                      day === 10
                        ? "bg-[#3b82f6] font-bold text-white shadow-xs"
                        : day === 15 || day === 18
                        ? "bg-blue-100 font-semibold text-blue-700"
                        : ""
                    }`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
