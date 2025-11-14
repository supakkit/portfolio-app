"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Navbar } from "@/data/profile";

export function NavMain({ items }: { items: Navbar[] }) {
  const { setOpenMobile, isMobile } = useSidebar();
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu className="group-data-[collapsible=icon]:gap-4">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => isMobile && setOpenMobile(false)}
          >
            <SidebarMenuItem>
              <SidebarMenuButton
                className={clsx({ "bg-accent": pathname === item.href })}
                size="lg"
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.label}</div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
