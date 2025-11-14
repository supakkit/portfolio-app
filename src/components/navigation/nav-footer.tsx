"use client";

import { MousePointerClick } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Navbar } from "@/data/profile";

export function NavFooter({ cvButton }: { cvButton: Navbar }) {
  const { setOpenMobile, isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <Link href={cvButton.href} target="_blank">
        <SidebarMenuItem className="border-2 rounded-2xl">
          <SidebarMenuButton
            size="lg"
            className="px-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            onClick={() => isMobile && setOpenMobile(false)}
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <cvButton.icon className="size-4" />
            </div>
            <div className="pl-1">{cvButton.label}</div>
            <MousePointerClick className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
}
