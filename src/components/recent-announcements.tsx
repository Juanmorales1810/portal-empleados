import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { announcements } from "@/lib/data"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-warning text-warning-foreground",
  low: "bg-secondary text-secondary-foreground",
}

const categoryLabels = {
  general: "General",
  hr: "RRHH",
  events: "Eventos",
  benefits: "Beneficios",
}

export function RecentAnnouncements() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-card-foreground">Comunicados Recientes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.slice(0, 3).map((announcement) => (
          <div
            key={announcement.id}
            className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-medium text-card-foreground text-sm">{announcement.title}</h4>
              <Badge className={priorityColors[announcement.priority]} variant="secondary">
                {announcement.priority === "high" ? "Urgente" : categoryLabels[announcement.category]}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{announcement.author}</span>
              <span>{formatDistanceToNow(new Date(announcement.publishedAt), { addSuffix: true, locale: es })}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
