"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { announcements, employees } from "@/lib/data"
import { formatDistanceToNow, format } from "date-fns"
import { es } from "date-fns/locale"
import { Bell, Calendar, Gift, Users, Megaphone, ChevronRight } from "lucide-react"

const categoryIcons = {
  general: Megaphone,
  hr: Users,
  events: Calendar,
  benefits: Gift,
}

const categoryLabels = {
  general: "General",
  hr: "Recursos Humanos",
  events: "Eventos",
  benefits: "Beneficios",
}

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-warning text-warning-foreground",
  low: "bg-secondary text-secondary-foreground",
}

export default function ComunicadosPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(announcements[0])

  const filteredAnnouncements = announcements.filter((a) => {
    return activeTab === "all" || a.category === activeTab
  })

  const getAuthorAvatar = (authorName: string) => {
    const employee = employees.find((e) => e.name === authorName)
    return employee?.avatar
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <Header title="Comunicados" subtitle="Noticias y anuncios de la empresa" />
        <div className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="bg-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <Bell className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">
                    {announcements.filter((a) => a.priority === "high").length}
                  </p>
                  <p className="text-xs text-muted-foreground">Urgentes</p>
                </div>
              </CardContent>
            </Card>
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).slice(0, 3).map((category) => {
              const Icon = categoryIcons[category]
              const count = announcements.filter((a) => a.category === category).length
              return (
                <Card key={category} className="bg-card">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-card-foreground">{count}</p>
                      <p className="text-xs text-muted-foreground">{categoryLabels[category]}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="hr">RRHH</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="benefits">Beneficios</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Announcements List */}
            <div className="lg:col-span-1 space-y-3">
              {filteredAnnouncements.map((announcement) => {
                const Icon = categoryIcons[announcement.category]
                const isSelected = selectedAnnouncement?.id === announcement.id
                return (
                  <Card
                    key={announcement.id}
                    className={`bg-card cursor-pointer transition-all hover:shadow-md ${isSelected ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setSelectedAnnouncement(announcement)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-secondary mt-1">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-card-foreground text-sm line-clamp-1">
                              {announcement.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {formatDistanceToNow(new Date(announcement.publishedAt), { addSuffix: true, locale: es })}
                            </p>
                          </div>
                        </div>
                        {announcement.priority === "high" && (
                          <Badge className={priorityColors.high} variant="secondary">
                            Urgente
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Selected Announcement Detail */}
            <div className="lg:col-span-2">
              {selectedAnnouncement ? (
                <Card className="bg-card h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{categoryLabels[selectedAnnouncement.category]}</Badge>
                          {selectedAnnouncement.priority === "high" && (
                            <Badge className={priorityColors.high}>Urgente</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{selectedAnnouncement.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{selectedAnnouncement.content}</p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={getAuthorAvatar(selectedAnnouncement.author) || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {selectedAnnouncement.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-card-foreground text-sm">{selectedAnnouncement.author}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(selectedAnnouncement.publishedAt), "dd 'de' MMMM 'de' yyyy, HH:mm", {
                              locale: es,
                            })}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">
                        Más información
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Megaphone className="h-12 w-12 mx-auto text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">Selecciona un comunicado para ver los detalles</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
