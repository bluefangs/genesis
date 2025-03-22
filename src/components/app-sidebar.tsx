"use client"

import * as React from "react"
import {
  Home,
  LayoutDashboard,
  Users,
  ShieldCheck,
  KeyRound,
  Settings2,
  User,
  Shield,
  GalleryVerticalEnd
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavAdmin } from "@/components/nav-admin"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/avatar.jpg",
  },
  teams: [
    {
      name: "Genesis",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Dash1",
          url: "/dash1",
        },
        {
          title: "Dash2",
          url: "/dash2",
        },
        {
          title: "Dash3",
          url: "/dash3",
        },
      ],
    }
  ],
  // Administration submenu items
  adminItems: [
    {
      name: "Identity & Access",
      url: "/identity-access/overview",
      icon: Shield,
      submenu: [
        {
          name: "Overview",
          url: "/identity-access/overview"
        },
        {
          name: "Users",
          url: "/identity-access/users"
        },
        {
          name: "Roles",
          url: "/identity-access/roles"
        },
        {
          name: "Permissions",
          url: "/identity-access/permissions"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Identity & Access",
      url: "/identity-access/overview",
      icon: Shield,
    },
    {
      name: "Users",
      url: "/identity-access/users",
      icon: Users,
    },
    {
      name: "Roles & Permissions",
      url: "/identity-access/roles",
      icon: ShieldCheck,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.adminItems} />
        <NavProjects title="Quick Access" projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
