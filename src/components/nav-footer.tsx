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
  cv,
}: {
  cv: {
    icon: LucideIcon;
    url: string;
  };
}) {
  const { setOpenMobile, isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <Link href={cv.url}>
        <SidebarMenuItem className="border-2 rounded-2xl">
          <SidebarMenuButton
            size="lg"
            className="px-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            onClick={() => isMobile && setOpenMobile(false)}
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <cv.icon className="size-4" />
            </div>
            <div className="pl-1">Read my CV</div>
            <MousePointerClick className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
}
