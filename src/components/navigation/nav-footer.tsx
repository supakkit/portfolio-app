"use client";

import { LucideIcon, MousePointerClick } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavFooter({
  cvButton,
}: {
  cvButton: {
    title: string;
    icon: LucideIcon;
    url: string;
  };
}) {
  const { setOpenMobile, isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <Link href={cvButton.url} target="_blank" >
        <SidebarMenuItem className="border-2 rounded-2xl">
          <SidebarMenuButton
            size="lg"
            className="px-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            onClick={() => isMobile && setOpenMobile(false)}
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <cvButton.icon className="size-4" />
            </div>
            <div className="pl-1">{cvButton.title}</div>
            <MousePointerClick className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
}
