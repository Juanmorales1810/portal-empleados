import { StatsCards } from "@/components/stats-cards"
import { RecentAnnouncements } from "@/components/recent-announcements"
import { VacationSummary } from "@/components/vacation-summary"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {

  return (
    <div className="bg-background">
      <main className="transition-all duration-300">
        <div className="p-6 space-y-6">
          <StatsCards />
          <div className="grid gap-6 lg:grid-cols-3">
              <QuickActions />
              <VacationSummary />
              <RecentAnnouncements />
          </div>
        </div>
      </main>
    </div>
  )
}
