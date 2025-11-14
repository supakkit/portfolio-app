import { ProjectCard } from "@/components/projects/project-card";
import { DATA } from "@/data/profile";


export default function Projects() {
  return (
    <div className="mt-16 mb-32 flex flex-col items-center gap-8">
      {DATA.projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
