import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { vacationBalance, vacationRequests } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle } from "lucide-react"

export function VacationSummary() {
  const usedPercentage = (vacationBalance.used / vacationBalance.total) * 100
  const pendingRequests = vacationRequests.filter((r) => r.status === "pending")

  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-card-foreground">Balance de Vacaciones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Días utilizados</span>
            <span className="font-medium text-card-foreground">
              {vacationBalance.used} / {vacationBalance.total}
            </span>
          </div>
          <Progress value={usedPercentage} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 rounded-lg bg-secondary/50">
            <Calendar className="h-5 w-5 mx-auto text-primary mb-1" />
            <p className="text-2xl font-bold text-card-foreground">{vacationBalance.available}</p>
            <p className="text-xs text-muted-foreground">Disponibles</p>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50">
            <Clock className="h-5 w-5 mx-auto text-warning mb-1" />
            <p className="text-2xl font-bold text-card-foreground">{vacationBalance.pending}</p>
            <p className="text-xs text-muted-foreground">Pendientes</p>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50">
            <CheckCircle className="h-5 w-5 mx-auto text-accent mb-1" />
            <p className="text-2xl font-bold text-card-foreground">{vacationBalance.used}</p>
            <p className="text-xs text-muted-foreground">Usados</p>
          </div>
        </div>

        {pendingRequests.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-card-foreground">Solicitudes Pendientes</h4>
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20"
              >
                <div>
                  <p className="text-sm font-medium text-card-foreground">{request.days} día(s)</p>
                  <p className="text-xs text-muted-foreground">{request.startDate}</p>
                </div>
                <Badge variant="outline" className="text-warning border-warning">
                  Pendiente
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
