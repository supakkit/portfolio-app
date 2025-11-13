import { DATA } from "@/data/profile";
import { ExperienceCard } from "./experience-card";

export function BodySection() {
  return (
    <div className="grid justify-items-center gap-6">
      <h3 className="text-2xl font-semibold mt-16">Education</h3>
      {DATA.education.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
      <h3 className="text-2xl font-semibold mt-16">Experience</h3>
      {DATA.workExperience.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );
}