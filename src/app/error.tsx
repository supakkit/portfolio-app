"use client";

import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <CircleX className="w-10 text-gray-600" />
        <h2 className="text-center">Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
