import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { employees } from "@/lib/data"
import { cn } from "@/lib/utils"

const statusColors = {
  active: "bg-success",
  away: "bg-warning",
  offline: "bg-muted-foreground",
}

export function TeamMembers() {
  const teamMembers = employees.filter((e) => e.department === "Tecnología").slice(0, 5)

  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-card-foreground">Mi Equipo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card",
                  statusColors[member.status],
                )}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">{member.name}</p>
              <p className="text-xs text-muted-foreground truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
