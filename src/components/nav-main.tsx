"use client";

import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const { setOpenMobile, isMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarMenu className="group-data-[collapsible=icon]:gap-4">
        {items.map((item) => (
          <Link href={item.url} key={item.title} onClick={() =>  isMobile && setOpenMobile(false)} >
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
