export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  phone: string
  location: string
  avatar: string
  startDate: string
  manager?: string
  status: "active" | "away" | "offline"
}

export interface VacationRequest {
  id: string
  employeeId: string
  employeeName: string
  type: "vacation" | "sick" | "personal" | "maternity"
  startDate: string
  endDate: string
  status: "pending" | "approved" | "rejected"
  days: number
  reason?: string
}

export interface PayrollRecord {
  id: string
  month: string
  year: number
  grossSalary: number
  deductions: number
  netSalary: number
  status: "paid" | "pending"
  payDate: string
}

export interface Document {
  id: string
  name: string
  category: "policy" | "contract" | "form" | "training"
  uploadedAt: string
  size: string
  downloadUrl: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  author: string
  publishedAt: string
  priority: "high" | "medium" | "low"
  category: "general" | "hr" | "events" | "benefits"
}

export const currentUser: Employee = {
  id: "1",
  name: "María García",
  email: "maria.garcia@empresa.com",
  role: "Senior Developer",
  department: "Tecnología",
  phone: "+34 612 345 678",
  location: "Madrid, España",
  avatar: "/professional-woman-diverse.png",
  startDate: "2021-03-15",
  manager: "Carlos Rodríguez",
  status: "active",
}

export const employees: Employee[] = [
  currentUser,
  {
    id: "2",
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@empresa.com",
    role: "Engineering Manager",
    department: "Tecnología",
    phone: "+34 623 456 789",
    location: "Madrid, España",
    avatar: "/professional-man-manager.jpg",
    startDate: "2019-06-01",
    status: "active",
  },
  {
    id: "3",
    name: "Ana Martínez",
    email: "ana.martinez@empresa.com",
    role: "HR Director",
    department: "Recursos Humanos",
    phone: "+34 634 567 890",
    location: "Barcelona, España",
    avatar: "/professional-woman-hr.png",
    startDate: "2018-01-10",
    status: "active",
  },
  {
    id: "4",
    name: "Pedro López",
    email: "pedro.lopez@empresa.com",
    role: "Product Designer",
    department: "Diseño",
    phone: "+34 645 678 901",
    location: "Valencia, España",
    avatar: "/professional-man-designer.jpg",
    startDate: "2022-09-20",
    status: "away",
  },
  {
    id: "5",
    name: "Laura Sánchez",
    email: "laura.sanchez@empresa.com",
    role: "Marketing Manager",
    department: "Marketing",
    phone: "+34 656 789 012",
    location: "Madrid, España",
    avatar: "/professional-woman-marketing.png",
    startDate: "2020-11-05",
    status: "active",
  },
  {
    id: "6",
    name: "Javier Fernández",
    email: "javier.fernandez@empresa.com",
    role: "Data Analyst",
    department: "Tecnología",
    phone: "+34 667 890 123",
    location: "Sevilla, España",
    avatar: "/professional-analyst.png",
    startDate: "2023-02-14",
    status: "offline",
  },
  {
    id: "7",
    name: "Isabel Torres",
    email: "isabel.torres@empresa.com",
    role: "Finance Director",
    department: "Finanzas",
    phone: "+34 678 901 234",
    location: "Madrid, España",
    avatar: "/professional-woman-finance.png",
    startDate: "2017-04-03",
    status: "active",
  },
  {
    id: "8",
    name: "Miguel Ruiz",
    email: "miguel.ruiz@empresa.com",
    role: "Backend Developer",
    department: "Tecnología",
    phone: "+34 689 012 345",
    location: "Bilbao, España",
    avatar: "/professional-man-developer.png",
    startDate: "2021-08-30",
    status: "active",
  },
]

export const vacationRequests: VacationRequest[] = [
  {
    id: "1",
    employeeId: "1",
    employeeName: "María García",
    type: "vacation",
    startDate: "2024-12-23",
    endDate: "2024-12-31",
    status: "approved",
    days: 7,
    reason: "Vacaciones de Navidad",
  },
  {
    id: "2",
    employeeId: "1",
    employeeName: "María García",
    type: "personal",
    startDate: "2025-01-15",
    endDate: "2025-01-15",
    status: "pending",
    days: 1,
    reason: "Asuntos personales",
  },
  {
    id: "3",
    employeeId: "4",
    employeeName: "Pedro López",
    type: "sick",
    startDate: "2024-11-28",
    endDate: "2024-11-29",
    status: "approved",
    days: 2,
  },
]

export const payrollRecords: PayrollRecord[] = [
  {
    id: "1",
    month: "Noviembre",
    year: 2024,
    grossSalary: 4500,
    deductions: 1125,
    netSalary: 3375,
    status: "paid",
    payDate: "2024-11-28",
  },
  {
    id: "2",
    month: "Octubre",
    year: 2024,
    grossSalary: 4500,
    deductions: 1125,
    netSalary: 3375,
    status: "paid",
    payDate: "2024-10-28",
  },
  {
    id: "3",
    month: "Septiembre",
    year: 2024,
    grossSalary: 4500,
    deductions: 1125,
    netSalary: 3375,
    status: "paid",
    payDate: "2024-09-28",
  },
  {
    id: "4",
    month: "Diciembre",
    year: 2024,
    grossSalary: 4500,
    deductions: 1125,
    netSalary: 3375,
    status: "pending",
    payDate: "2024-12-28",
  },
]

export const documents: Document[] = [
  {
    id: "1",
    name: "Manual del Empleado 2024",
    category: "policy",
    uploadedAt: "2024-01-15",
    size: "2.4 MB",
    downloadUrl: "#",
  },
  {
    id: "2",
    name: "Política de Trabajo Remoto",
    category: "policy",
    uploadedAt: "2024-03-20",
    size: "456 KB",
    downloadUrl: "#",
  },
  {
    id: "3",
    name: "Contrato de Trabajo",
    category: "contract",
    uploadedAt: "2021-03-15",
    size: "1.2 MB",
    downloadUrl: "#",
  },
  {
    id: "4",
    name: "Solicitud de Vacaciones",
    category: "form",
    uploadedAt: "2024-06-01",
    size: "124 KB",
    downloadUrl: "#",
  },
  {
    id: "5",
    name: "Curso Seguridad Informática",
    category: "training",
    uploadedAt: "2024-09-10",
    size: "15.6 MB",
    downloadUrl: "#",
  },
]

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Cierre de Oficinas por Navidad",
    content:
      "Las oficinas permanecerán cerradas del 24 de diciembre al 1 de enero. Recordamos que el día 23 el horario será reducido hasta las 14:00h.",
    author: "Ana Martínez",
    publishedAt: "2024-12-01T10:00:00",
    priority: "high",
    category: "general",
  },
  {
    id: "2",
    title: "Nuevo Plan de Beneficios 2025",
    content:
      "Nos complace anunciar mejoras en nuestro plan de beneficios para el próximo año, incluyendo seguro dental ampliado y días adicionales de vacaciones.",
    author: "Ana Martínez",
    publishedAt: "2024-11-28T14:30:00",
    priority: "medium",
    category: "benefits",
  },
  {
    id: "3",
    title: "Team Building - Diciembre",
    content:
      "El próximo viernes 13 de diciembre celebraremos nuestra cena de Navidad en el Restaurante El Jardín. Confirma tu asistencia antes del día 10.",
    author: "Laura Sánchez",
    publishedAt: "2024-11-25T09:00:00",
    priority: "medium",
    category: "events",
  },
  {
    id: "4",
    title: "Actualización del Sistema de Fichaje",
    content:
      "A partir del 15 de diciembre, el sistema de fichaje se actualizará. Recibiréis un email con las instrucciones para configurar la nueva app.",
    author: "Carlos Rodríguez",
    publishedAt: "2024-11-20T11:00:00",
    priority: "low",
    category: "hr",
  },
]

export const departments = ["Tecnología", "Recursos Humanos", "Diseño", "Marketing", "Finanzas", "Operaciones"]

export const vacationBalance = {
  total: 22,
  used: 12,
  pending: 7,
  available: 3,
}

export const benefits = [
  { name: "Seguro Médico", provider: "Sanitas", status: "active" },
  { name: "Seguro Dental", provider: "Sanitas", status: "active" },
  { name: "Seguro de Vida", provider: "Mapfre", status: "active" },
  { name: "Plan de Pensiones", provider: "BBVA", status: "active" },
  { name: "Gimnasio", provider: "Gympass", status: "active" },
  { name: "Tickets Restaurante", provider: "Sodexo", status: "active" },
]
