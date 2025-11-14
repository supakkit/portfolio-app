"use client";

import { NavMain } from "@/components/navigation/nav-main";
import { NavUser } from "@/components/navigation/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavFooter } from "./nav-footer";
import { Separator } from "../ui/separator";
import { DateCard } from "./date-card";
import { DATA } from "@/data/profile";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="text-nowrap overflow-hidden"
    >
      <SidebarHeader>
        <NavUser profile={DATA.profile} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={DATA.navBar} />
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <DateCard />
        <NavFooter cvButton={DATA.cvButton} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
