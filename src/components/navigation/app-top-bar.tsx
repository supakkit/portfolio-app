import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppTopBar() {
  return (
    <header className="h-16 sticky top-0 z-50 flex justify-between items-center px-4 bg-transparent">
      <div className="flex items-center gap-2">
        <SidebarTrigger variant="ghost" size="icon-lg" className="" />
      </div>
      <ModeToggle />
    </header>
  );
}
