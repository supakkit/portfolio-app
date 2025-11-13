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
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    pathname: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const { setOpenMobile, isMobile } = useSidebar();
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu className="group-data-[collapsible=icon]:gap-4">
        {items.map((item) => (
          <Link 
            href={item.pathname} 
            key={item.title} 
            onClick={() =>  isMobile && setOpenMobile(false)} 
          >
            <SidebarMenuItem>
              <SidebarMenuButton
                className={clsx(
                  {'bg-accent': pathname === item.pathname,}
                )}
                size="lg"
              >
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
