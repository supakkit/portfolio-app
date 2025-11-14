"use client";

import { useMemo } from "react";
import { DATA } from "@/data/profile";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";

export default function Contact() {
  const { resolvedTheme } = useTheme();

  const color = useMemo(() => {
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  }, [resolvedTheme]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid gap-2">
        {Object.entries(DATA.contact).map(([name, social]) => (
          <p key={name} className="flex gap-2 text-2xl items-center">
            <social.icon className="size-6" />
            {name}:
            <Link
              href={social.url}
              onClick={() =>
                name === "email" &&
                (window.location.href = "mailto:yourmail@domain.com")
              }
              aria-label={social.name}
              className="underline text-xl"
              target="_blank"
            >
              {social.url.split("https://")}
            </Link>
          </p>
        ))}
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
