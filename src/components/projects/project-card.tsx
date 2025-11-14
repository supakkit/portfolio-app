import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";
import { Globe, LucideIcon } from "lucide-react";

export function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    image: {
      path: string;
      width: number;
      height: number;
    };
    stacks: {
      title: string;
      values: string[];
    }[];
    sources: {
      title: string;
      icon: LucideIcon;
      url: string;
    }[];
    websiteUrl: string;
  };
}) {
  return (
    <Card className="flex flex-col xl:flex-row px-6 rounded-3xl overflow-hidden relative">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="p-0 xl:w-1/2">
        <Link href={project.websiteUrl} target="_blank">
          <Image
            src={project.image.path}
            width={project.image.width}
            height={project.image.height}
            alt={project.name}
          />
        </Link>
      </div>
      <div className="w-full p-0 flex flex-col gap-6 xl:w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {project.stacks.map((stack, index) => (
            <div key={index} className="flex gap-1">
              <div className="text-sm lg:text-lg font-semibold">
                {stack.title}:
              </div>
              <div className="flex gap-1 flex-wrap">
                {stack.values.map((value, index) => (
                  <Badge key={index} variant="default">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-2 mt-3">
            {project.sources.map((source, index) => (
              <Link key={index} href={source.url} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit text-xs rounded-full cursor-pointer"
                >
                  <source.icon />
                  {source.title}
                </Button>
              </Link>
            ))}
            <Link href={project.websiteUrl} target="_blank">
              <Button
                variant="default"
                size="sm"
                className="w-fit text-xs rounded-full cursor-pointer"
              >
                <Globe />
                website
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
