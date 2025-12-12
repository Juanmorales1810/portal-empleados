import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, FileCheck, TrendingUp } from "lucide-react"
import { employees, vacationBalance, documents } from "@/lib/data"

const stats = [
  {
    name: "Total Empleados",
    value: employees.length.toString(),
    change: "+2 este mes",
    icon: Users,
    color: "text-primary",
  },
  {
    name: "Días Disponibles",
    value: vacationBalance.available.toString(),
    change: `de ${vacationBalance.total} días`,
    icon: Calendar,
    color: "text-accent",
  },
  {
    name: "Documentos",
    value: documents.length.toString(),
    change: "actualizados",
    icon: FileCheck,
    color: "text-chart-3",
  },
  {
    name: "Productividad",
    value: "94%",
    change: "+5% vs anterior",
    icon: TrendingUp,
    color: "text-success",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold text-card-foreground mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-secondary ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
