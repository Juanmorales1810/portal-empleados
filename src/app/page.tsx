import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { RecentAnnouncements } from "@/components/recent-announcements"
import { VacationSummary } from "@/components/vacation-summary"
import { QuickActions } from "@/components/quick-actions"
import { TeamMembers } from "@/components/team-members"
import { currentUser } from "@/lib/data"

export default function DashboardPage() {
  const greeting = getGreeting()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <Header
          title={`${greeting}, ${currentUser.name.split(" ")[0]}`}
          subtitle="Aquí tienes un resumen de tu actividad"
        />
        <div className="p-6 space-y-6">
          <StatsCards />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <RecentAnnouncements />
            </div>
            <div className="space-y-6">
              <QuickActions />
              <VacationSummary />
              <TeamMembers />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Buenos días"
  if (hour < 18) return "Buenas tardes"
  return "Buenas noches"
}
