"use client";

import { FlickeringGrid } from "../ui/flickering-grid";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";

export function HeroSection() {
  const [time, setTime] = useState<Date>(new Date());

  const formattedTime = useMemo<string>(() => {
    const hours = (time.getHours() % 12 || 12).toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const ampm = time.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center items-center relative h-screen w-full">
      <HeroBackground />
      <div className="w-lg grid gap-3">
        <h2 className="font-bold text-4xl">I&apos;m Supakkit,</h2>
        <p className="text-3xl text-balance">
          a Junior Full-Stack Developer with a background in Mechanical Engineering.
        </p>
        <p>
          I love solving problems, learning new technologies, and building
          projects that bring ideas to life.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              <Zap />Contact me
            </Button>
          </Link>
          <div className="text-2xl font-semibold tracking-tight">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <FlickeringGrid
      className="flex justify-center items-center absolute inset-0 -z-10 size-full mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.4}
      flickerChance={0.1}
      height={400}
      width={800}
    />
  );
}
