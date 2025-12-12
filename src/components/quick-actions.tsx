import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, CreditCard, Users } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    name: "Solicitar Vacaciones",
    description: "Crea una nueva solicitud",
    icon: Calendar,
    href: "/vacaciones",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    name: "Ver Nómina",
    description: "Última nómina disponible",
    icon: CreditCard,
    href: "/nominas",
    color: "bg-accent/10 text-accent hover:bg-accent/20",
  },
  {
    name: "Documentos",
    description: "Accede a tus documentos",
    icon: FileText,
    href: "/documentos",
    color: "bg-chart-3/10 text-chart-3 hover:bg-chart-3/20",
  },
  {
    name: "Directorio",
    description: "Buscar compañeros",
    icon: Users,
    href: "/directorio",
    color: "bg-chart-4/10 text-chart-4 hover:bg-chart-4/20",
  },
]

export function QuickActions() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-card-foreground">Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link key={action.name} href={action.href}>
            <Button variant="ghost" className={`w-full h-auto flex-col items-start p-4 ${action.color}`}>
              <action.icon className="h-5 w-5 mb-2" />
              <span className="font-medium text-sm">{action.name}</span>
              <span className="text-xs opacity-70">{action.description}</span>
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
