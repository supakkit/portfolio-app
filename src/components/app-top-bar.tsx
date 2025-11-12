import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppTopBar() {
  return (
    <header className="w-full flex justify-between h-16 items-center px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger variant="ghost" size="icon-lg" className="" />
      </div>
      <ModeToggle />
    </header>
  );
}
