import { AboutMe } from "@/components/home/about-me";
import { BodySection } from "@/components/home/body-section";
import { FooterSection } from "@/components/home/footer-section";
import { HeroSection } from "@/components/home/hero-section";
import { Meteors } from "@/components/ui/meteors";
import { CircleArrowDown } from "lucide-react";

export default function Page() {
  return (
    <div>
      <div className="fixed h-screen -z-20 w-full overflow-hidden">
        <Meteors />
      </div>
      <HeroSection />
      <CircleArrowDown className="animate-bounce -mt-10 h-10 justify-self-center" />
      <AboutMe />
      <BodySection />
      <FooterSection />
    </div>
  );
}
