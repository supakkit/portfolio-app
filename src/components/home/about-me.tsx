import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/profile";

export function AboutMe() {
  return (
    <Card className="bg-accent-foreground/95 text-accent rounded-4xl p-6 xl:px-6 xl:py-16 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 indent-8 xl:text-lg">
        <p>
          I&apos;m Supakkit, a Junior Full-Stack Developer who switched from
          Mechanical Engineering to tech. After years in mechanical design,
          I&apos;ve found my passion in technology and developed a strong
          interest in software development, so I decided to transition my career
          into the tech industry. To prepare for this shift, I completed the
          Generation Thailand Bootcamp and further enhanced my skills through
          self-learning and personal projects, which you can explore on my{" "}
          <a
            href={DATA.github.url}
            target="_blank"
            className="underline font-medium underline-offset-2"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          I&apos;m looking for a Junior Full-Stack Software Developer role where
          I can use my technical skills and analytical mindset to help the team
          tackle complex problems and create effective web solutions. If
          you&apos;d like to connect or discuss potential opportunities,
          I&apos;d be happy to chat!
        </p>
      </CardContent>
    </Card>
  );
}
