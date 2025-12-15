"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { documents } from "@/lib/data"
import { Search, Download, FileText, File, Book, GraduationCap, FolderOpen } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const categoryIcons = {
  policy: Book,
  contract: FileText,
  form: File,
  training: GraduationCap,
}

const categoryLabels = {
  policy: "Políticas",
  contract: "Contratos",
  form: "Formularios",
  training: "Formación",
}

const categoryColors = {
  policy: "bg-primary/10 text-primary",
  contract: "bg-zinc-500/10 text-zinc-500",
  form: "bg-green-500/10 text-green-500",
  training: "bg-blue-500/10 text-blue-500",
}

export default function DocumentosPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeTab === "all" || doc.category === activeTab
    return matchesSearch && matchesCategory
  })

  const categoryCounts = {
    all: documents.length,
    policy: documents.filter((d) => d.category === "policy").length,
    contract: documents.filter((d) => d.category === "contract").length,
    form: documents.filter((d) => d.category === "form").length,
    training: documents.filter((d) => d.category === "training").length,
  }

  return (
    <div className="bg-background">
      <main className="transition-all duration-300">
        <div className="p-6 space-y-6">
          {/* Category Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => {
              const Icon = categoryIcons[category]
              return (
                <Card
                  key={category}
                  className={`bg-card cursor-pointer transition-all hover:shadow-md ${activeTab === category ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setActiveTab(category)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${categoryColors[category]}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{categoryLabels[category]}</p>
                        <p className="text-sm text-muted-foreground">{categoryCounts[category]} documentos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar documentos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="policy">Políticas</TabsTrigger>
                <TabsTrigger value="contract">Contratos</TabsTrigger>
                <TabsTrigger value="form">Formularios</TabsTrigger>
                <TabsTrigger value="training">Formación</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Documents List */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="h-5 w-5" />
                {activeTab === "all"
                  ? "Todos los Documentos"
                  : categoryLabels[activeTab as keyof typeof categoryLabels]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredDocuments.length > 0 ? (
                <div className="space-y-3">
                  {filteredDocuments.map((doc) => {
                    const Icon = categoryIcons[doc.category]
                    return (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${categoryColors[doc.category]}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-card-foreground">{doc.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">{doc.size}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">
                                Actualizado {format(new Date(doc.uploadedAt), "dd MMM yyyy", { locale: es })}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">{categoryLabels[doc.category]}</Badge>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FolderOpen className="h-12 w-12 mx-auto text-muted-foreground/50" />
                  <p className="mt-4 text-muted-foreground">No se encontraron documentos</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
