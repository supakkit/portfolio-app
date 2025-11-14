import { Button } from "@/components/ui/button";
import { CaptionsOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <CaptionsOff className="w-10 text-gray-600" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the page.</p>
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}
