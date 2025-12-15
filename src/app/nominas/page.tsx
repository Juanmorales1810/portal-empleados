"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { payrollRecords, benefits } from "@/lib/data"
import { Download, CreditCard, TrendingUp, Wallet, CheckCircle, FileText } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default function NominasPage() {
  const latestPayroll = payrollRecords.find((p) => p.status === "paid")

  return (
    <div className="bg-background">
      <main className="transition-all duration-300">
        <div className="p-6 space-y-6">
          <Tabs defaultValue="payroll" className="space-y-6">
            <TabsList className="bg-secondary">
              <TabsTrigger value="payroll">Nóminas</TabsTrigger>
              <TabsTrigger value="benefits">Beneficios</TabsTrigger>
            </TabsList>

            <TabsContent value="payroll" className="space-y-6">
              {/* Summary Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Wallet className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Salario Bruto</p>
                        <p className="text-2xl font-bold text-card-foreground">
                          {latestPayroll?.grossSalary.toLocaleString("es-ES")} €
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-destructive/10">
                        <TrendingUp className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Deducciones</p>
                        <p className="text-2xl font-bold text-card-foreground">
                          {latestPayroll?.deductions.toLocaleString("es-ES")} €
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-success/10">
                        <CreditCard className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Salario Neto</p>
                        <p className="text-2xl font-bold text-card-foreground">
                          {latestPayroll?.netSalary.toLocaleString("es-ES")} €
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payroll History */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Historial de Nóminas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payrollRecords.map((record) => (
                      <div
                        key={record.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-card-foreground">
                              {record.month} {record.year}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Pago: {format(new Date(record.payDate), "dd MMM yyyy", { locale: es })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold text-card-foreground">
                              {record.netSalary.toLocaleString("es-ES")} €
                            </p>
                            <Badge
                              variant={record.status === "paid" ? "default" : "secondary"}
                              className={record.status === "paid" ? "bg-success" : "bg-warning text-warning-foreground"}
                            >
                              {record.status === "paid" ? "Pagado" : "Pendiente"}
                            </Badge>
                          </div>
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Mis Beneficios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-card-foreground">{benefit.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">Proveedor: {benefit.provider}</p>
                          </div>
                          <Badge className="bg-success text-success-foreground">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Activo
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits Summary */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Resumen de Beneficios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                      <h4 className="font-semibold text-card-foreground mb-4">Cobertura de Salud</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Seguro médico completo
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Cobertura dental básica
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Seguro de vida (2x salario)
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-lg bg-accent/5 border border-accent/10">
                      <h4 className="font-semibold text-card-foreground mb-4">Bienestar</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Gympass incluido
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Tickets restaurante
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Plan de pensiones
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
