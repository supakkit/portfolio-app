"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/data/profile";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";

export function ExperienceCard({ item }: { item: Experience }) {
  const [open, setOpen] = useState<boolean>(false);

  const formattedDate = useMemo<string>(() => {
    const startDate = new Date(item.startDate);
    const startDateMonthName = startDate.toLocaleDateString("en-US", {
      month: "long",
    });
    const startDateFullYear = startDate.getFullYear().toString();

    const lastDate = new Date(item.lastDate);
    const lastDateMonthName = lastDate.toLocaleDateString("en-US", {
      month: "long",
    });
    const lastDateFullYear = lastDate.getFullYear().toString();

    return `${startDateMonthName} ${startDateFullYear} - ${lastDateMonthName} ${lastDateFullYear}`;
  }, [item.startDate, item.lastDate]);

  return (
    <Card
      className="relative max-w-4xl w-full py-8 rounded-3xl hover:shadow-xl hover:scale-105 duration-300 ease-in"
      onClick={() => setOpen((prevValue) => !prevValue)}
    >
      <CardContent className="flex flex-col-reverse lg:flex-row justify-between gap-2">
        <div>
          <p className="text-xl">{item.organization}</p>
          <p className="">{item.role}</p>
        </div>
        <p>{formattedDate}</p>
      </CardContent>
      <CardContent className={clsx({ hidden: open === false }, "px-8")}>
        <ul className="list-disc">
          {item.details.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </CardContent>
      <div className="absolute left-1/2 bottom-0 origin-center text-muted-foreground/50">
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
    </Card>
  );
}
