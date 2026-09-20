"use client";

import { useProjects } from "../_lib/queries/useProject";
import { useState } from "react";
import ErrorMessage from "../_component/_ui/errorMessage";
import SkeletonLoader from "./_ui/skeletonLoader";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./_ui/projectCard";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: projects = [], isLoading, isError, error } = useProjects();
  const leadProject = projects.find((project) => {
    const projectName = `${project.slug || ""} ${project.title || ""}`.toLowerCase();
    return projectName.includes("cinebook");
  }) || projects[0];
  const supportingProjects = projects.filter(
    (project) => project !== leadProject
  );
  const hasMoreProjects = supportingProjects.length > 3;
  const visibleSupportingProjects = isExpanded
    ? supportingProjects
    : supportingProjects.slice(0, 3);
  const hiddenProjectCount = supportingProjects.length - 3;

  return (
    <section
      id="projects"
      className="border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-400 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              01 / Selected Work
            </p>
            <h2 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] uppercase leading-[0.8] tracking-[-0.055em] text-foreground">
              Selected Work
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:pb-2 md:text-right">
            Digital products shaped from first interaction to final detail.
          </p>
        </div>

        {isError && (
          <ErrorMessage message={error?.message || "Failed to load projects"} />
        )}

        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="mx-auto grid gap-4 md:grid-cols-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonLoader key={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && projects.length > 0 && (
          <div>
            <ProjectCard
              key={leadProject._id || leadProject.slug}
              project={leadProject}
              index={0}
              lead
            />
            {supportingProjects.length > 0 && (
              <div id="supporting-projects" className="mt-16 md:mt-24">
                {visibleSupportingProjects.map((project, index) => (
                  <ProjectCard
                    key={project._id || project.slug}
                    project={project}
                    index={index + 1}
                    reverse={index % 2 === 1}
                  />
                ))}
                {hasMoreProjects && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    aria-expanded={isExpanded}
                    aria-controls="supporting-projects"
                    className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:mt-12"
                  >
                    {isExpanded
                      ? "Show fewer"
                      : `View ${hiddenProjectCount} more project${hiddenProjectCount === 1 ? "" : "s"}`}
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {!isLoading && projects.length === 0 && !isError && (
          <p className="mt-8 text-center text-muted-foreground">
            No projects to display yet.
          </p>
        )}
      </div>
    </section>
  );
}
