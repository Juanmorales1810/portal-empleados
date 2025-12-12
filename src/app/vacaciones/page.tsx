"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { vacationRequests, vacationBalance } from "@/lib/data"
import { Plus, CalendarIcon, Clock, CheckCircle, XCircle } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const typeLabels = {
  vacation: "Vacaciones",
  sick: "Enfermedad",
  personal: "Personal",
  maternity: "Maternidad/Paternidad",
}

const statusLabels = {
  pending: "Pendiente",
  approved: "Aprobado",
  rejected: "Rechazado",
}

const statusColors = {
  pending: "bg-warning/10 text-warning border-warning/20",
  approved: "bg-success/10 text-success border-success/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
}

export default function VacacionesPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dialogOpen, setDialogOpen] = useState(false)
  const usedPercentage = (vacationBalance.used / vacationBalance.total) * 100

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <Header title="Gestión de Vacaciones" subtitle="Solicita y gestiona tus días de ausencia" />
        <div className="p-6 space-y-6">
          {/* Balance Summary */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Anual</p>
                    <p className="text-2xl font-bold text-card-foreground">{vacationBalance.total}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-success/10">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibles</p>
                    <p className="text-2xl font-bold text-card-foreground">{vacationBalance.available}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-warning/10">
                    <Clock className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pendientes</p>
                    <p className="text-2xl font-bold text-card-foreground">{vacationBalance.pending}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-muted">
                    <XCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Utilizados</p>
                    <p className="text-2xl font-bold text-card-foreground">{vacationBalance.used}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-card-foreground">Días utilizados este año</span>
                <span className="text-sm text-muted-foreground">
                  {vacationBalance.used} / {vacationBalance.total}
                </span>
              </div>
              <Progress value={usedPercentage} className="h-3" />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Calendar & New Request */}
            <div className="space-y-6">
              <Card className="bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Calendario</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={es}
                    className="rounded-md border-0"
                  />
                </CardContent>
              </Card>

              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Nueva Solicitud
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Nueva Solicitud de Ausencia</DialogTitle>
                    <DialogDescription>Completa el formulario para solicitar días de ausencia.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label>Tipo de Ausencia</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vacation">Vacaciones</SelectItem>
                          <SelectItem value="personal">Personal</SelectItem>
                          <SelectItem value="sick">Enfermedad</SelectItem>
                          <SelectItem value="maternity">Maternidad/Paternidad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Fecha Inicio</Label>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Seleccionar
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <Label>Fecha Fin</Label>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Seleccionar
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Motivo (opcional)</Label>
                      <Textarea placeholder="Describe el motivo de tu solicitud..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>Enviar Solicitud</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Requests List */}
            <div className="lg:col-span-2">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Mis Solicitudes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {vacationRequests.map((request) => (
                    <div key={request.id} className={`p-4 rounded-lg border ${statusColors[request.status]}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{typeLabels[request.type]}</h4>
                            <Badge variant="outline">{request.days} día(s)</Badge>
                          </div>
                          <p className="text-sm mt-1">
                            {format(new Date(request.startDate), "dd MMM yyyy", { locale: es })}
                            {request.startDate !== request.endDate && (
                              <> — {format(new Date(request.endDate), "dd MMM yyyy", { locale: es })}</>
                            )}
                          </p>
                          {request.reason && <p className="text-sm text-muted-foreground mt-2">{request.reason}</p>}
                        </div>
                        <Badge className={statusColors[request.status]}>{statusLabels[request.status]}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
