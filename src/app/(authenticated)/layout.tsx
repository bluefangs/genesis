"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Special mapping for URL segments that need custom formatting
  const specialSegmentMappings: Record<string, string> = {
    'identity-access': 'Identity & Access',
    // Add more special cases here as needed
  };
  
  // Get breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const segments = pathname
      .split('/')
      .filter(segment => segment !== '');
    
    if (segments.length === 0) {
      return (
        <BreadcrumbItem>
          <BreadcrumbPage>Home</BreadcrumbPage>
        </BreadcrumbItem>
      )
    }
    
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`;
      const isLast = index === segments.length - 1;
      
      // Handle special cases for segment formatting
      let formattedSegment;
      if (specialSegmentMappings[segment]) {
        formattedSegment = specialSegmentMappings[segment];
      } else {
        formattedSegment = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      return (
        <React.Fragment key={href}>
          {index > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
            ) : (
              <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        </React.Fragment>
      );
    });
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 flex-1">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {getBreadcrumbItems()}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto">
              <ThemeSwitcher />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 