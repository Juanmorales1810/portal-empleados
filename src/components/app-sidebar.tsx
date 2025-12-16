"use client"

import * as React from "react"
import {
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, ChartBar, CreditCard, FileText, LayoutDashboard, Megaphone, Users } from "lucide-react"

const data = {
  user: {
    name: "María García",
    email: "maria.garcia@example.com",
    avatar: "/professional-woman-diverse.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Directorio",
      url: "/directorio",
      icon: Users,
    },
    {
      title: "Vacaciones",
      url: "/vacaciones",
      icon: Calendar,
    },
    {
      title: "Nóminas",
      url: "/nominas",
      icon: CreditCard,
    },
    {
      title: "Documentos",
      url: "/documentos",
      icon: FileText,
    },
    {
      title: "Comunicados",
      url: "/comunicados",
      icon: Megaphone,
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Obtener ayuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Buscar",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Biblioteca de datos",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Informes",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Asistente de listas",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
