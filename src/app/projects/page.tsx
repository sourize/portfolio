import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects.config";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-12 w-full">
            // ... existing header content ...
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {PROJECTS.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    active={project.active}
                    archived={project.archived}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates || ''}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
