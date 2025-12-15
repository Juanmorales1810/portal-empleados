import type React from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppSidebar } from "@/components/app-sidebar"
import { currentUser } from "@/lib/data"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import "@/styles/globals.css";

// <CHANGE> Metadata actualizada para el portal de empleados
export const metadata: Metadata = {
  title: "Portal de Empleados | HR Connect",
  description: "Plataforma centralizada para gestión de recursos humanos y comunicación interna",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    const greeting = getGreeting()
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" collapsible="icon" />
          <SidebarInset>
            <SiteHeader title={`${greeting}, ${currentUser.name.split(" ")[0]}`}
                      subtitle="Aquí tienes un resumen de tu actividad" />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Buenos días"
  if (hour < 18) return "Buenas tardes"
  return "Buenas noches"
}