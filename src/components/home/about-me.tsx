import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/profile";

export function AboutMe() {
  return (
    <Card className="bg-accent-foreground/95 text-accent rounded-4xl p-6 xl:px-6 xl:py-16 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 indent-8 xl:text-lg">
        <p>{DATA.profile.about.intro}</p>
        <p>{DATA.profile.about.conclude}</p>
      </CardContent>
    </Card>
  );
}
