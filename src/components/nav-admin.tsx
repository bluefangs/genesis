"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavAdmin({
  items,
}: {
  items: {
    name: string
    url: string
    icon: LucideIcon
    submenu: {
      name: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Administration</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // Check if any submenu item URLs match the current pathname
          const isActive = item.submenu.some(
            (subItem) => pathname === subItem.url || pathname.startsWith(subItem.url)
          )
          
          return (
            <Collapsible
              key={item.name}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.name}>
                    {item.icon && <item.icon />}
                    <span>{item.name}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.submenu.map((subItem) => {
                      const isSubItemActive = pathname === subItem.url
                      
                      return (
                        <SidebarMenuSubItem key={subItem.name}>
                          <SidebarMenuSubButton asChild>
                            <Link 
                              href={subItem.url}
                              className={cn(
                                isSubItemActive && "bg-accent text-accent-foreground"
                              )}
                            >
                              <span>{subItem.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
} 