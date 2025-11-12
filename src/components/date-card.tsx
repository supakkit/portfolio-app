"use client";

import { SidebarMenu, SidebarMenuItem } from "./ui/sidebar";

const padZero = (num: number) => {
  return num < 10 ? "0"+num : String(num);
}

export function DateCard() {

  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" });
  const date = padZero(now.getDate());
  const year = String(now.getFullYear());
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <SidebarMenu className="group-data-[collapsible=icon]:hidden">
      <SidebarMenuItem 
        className="grid gap-2 border-2 rounded-2xl p-4"
      >
        <p>{month} {date}, {year}</p>
        <p>{userTimeZone}</p>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
