"use client";

import * as React from "react";
import {
  Bot,
  GalleryVerticalEnd,
  FileText,
  LucideIcon,
  Mail,
  FolderClosed,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavFooter } from "./nav-footer";
import { Separator } from "./ui/separator";
import { DateCard } from "./date-card";

const profile: {
  fullName: string;
  role: string;
  avatar: string;
} = {
  fullName: "Supakkit Sitthi",
  role: "Junior Software Developer",
  avatar: "/avatars/profile.jpeg",
};

const navMain: {
  title: string;
  icon: LucideIcon;
  url: string;
}[] = [
  {
    title: "Profile",
    icon: Bot,
    url: "/",
  },
  {
    title: "Projects",
    icon: FolderClosed,
    url: "/projects",
  },
  {
    title: "Tech Stack",
    icon: GalleryVerticalEnd,
    url: "tech-stack",
  },
  {
    title: "Contact",
    icon: Mail,
    url: "contact",
  },
];

const cv: {
  icon: LucideIcon;
  url: string;
} = {
  icon: FileText,
  url: "/cv",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="text-nowrap overflow-hidden" >
      <SidebarHeader>
        <NavUser profile={profile} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <DateCard />
        <NavFooter cv={cv} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
