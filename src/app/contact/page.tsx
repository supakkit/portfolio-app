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
      <div className="grid gap-8">
        {Object.entries(DATA.contact).map(([name, social]) => (
          <div key={name} className="flex flex-col lg:flex-row text-center gap-1 text-2xl items-center">
            <div className="flex gap-2">
              <social.icon className="size-6" />
              <p>{name}:</p>
            </div>
            <Link
              href={social.url}
              onClick={() =>
                name === "email" &&
                (window.location.href = "mailto:yourmail@domain.com")
              }
              aria-label={social.name}
              className="underline text-xl lg:text-2xl"
              target="_blank"
            >
              {social.url.split("https://")}
            </Link>
          </div>
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
