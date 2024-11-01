import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack application built with Next.js and TypeScript.",
    link: "https://github.com/yourusername/project-one",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with modern design principles.",
    link: "https://github.com/yourusername/project-two",
    tags: ["React", "Node.js", "MongoDB"]
  }
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <h1 className="text-2xl font-normal mb-8">Projects</h1>
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.title}>
              <Link 
                href={project.link}
                className="flex items-center gap-0.5 hover:text-foreground text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="text-muted-foreground text-sm max-w-sm mt-2 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-muted-foreground text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 