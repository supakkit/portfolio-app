"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const duration = 400;

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = isDark ? "light" : "dark";

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    // Animation
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer"
      ref={buttonRef}
      onClick={toggleTheme}
    >
      <Sun
        className={[
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          // when not mounted, hide both or show neutral state
          !mounted
            ? "opacity-0"
            : isDark
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2",
        ].join(" ")}
        aria-hidden
      />
      <Moon
        className={[
          "h-[1.2rem] w-[1.2rem] transition-all",
          !mounted
            ? "opacity-0"
            : isDark
            ? "opacity-0 translate-y-2"
            : "opacity-100",
        ].join(" ")}
        aria-hidden
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
