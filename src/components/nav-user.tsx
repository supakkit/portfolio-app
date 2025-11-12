"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenuButton } from "./ui/sidebar";

export function NavUser({
  profile,
}: {
  profile: {
    fullName: string;
    role: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenuButton
      size="lg"
      className="inline-flex py-8 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <Avatar className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <AvatarImage src={profile.avatar} alt={profile.fullName} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{profile.fullName}</span>
        <span className="truncate text-xs">{profile.role}</span>
      </div>
    </SidebarMenuButton>
  );
}
