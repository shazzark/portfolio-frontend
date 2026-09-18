"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Live Demo
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Github className="size-4" aria-hidden="true" />
          Source
        </a>
      )}
    </div>
  );
}

function ProjectTechnologies({ technologies }) {
  if (!technologies?.length) return null;

  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
      {technologies.map((technology, index) => (
        <li key={technology}>
          {technology}
          {index < technologies.length - 1 && (
            <span className="ml-3 text-accent/70" aria-hidden="true">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function ProjectImage({ project, lead }) {
  const shouldReduceMotion = useReducedMotion();

  if (!project.imageUrl) return null;

  return (
    <div
      className={`project-media group relative overflow-hidden bg-secondary ${
        lead ? "aspect-4/3 lg:aspect-[1.45/1]" : "aspect-4/3"
      }`}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.imageUrl}
          alt={`${project.title} project preview`}
          fill
          sizes={
            lead
              ? "(max-width: 1023px) 100vw, 64vw"
              : "(max-width: 767px) 100vw, 48vw"
          }
          className="object-cover object-center"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 to-transparent" />
    </div>
  );
}

function getLeadTitlePresentation(project) {
  if (!project?.title) return { name: "", descriptor: "" };

  const title = project.title.trim();
  if (title.toLowerCase().startsWith("storepro")) {
    return {
      name: "StorePro",
      descriptor: "E-commerce platform",
    };
  }

  return {
    name: title,
    descriptor: project.category || "",
  };
}

export default function ProjectCard({ project, index = 0, lead = false, reverse = false }) {
  const shouldReduceMotion = useReducedMotion();
  const projectNumber = String(index + 1).padStart(2, "0");
  const revealInitial = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 32 };

  if (lead) {
    const leadTitle = getLeadTitlePresentation(project);

    return (
      <motion.article
        initial={revealInitial}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-border pt-6 md:pt-8"
      >
        <div className="mb-7 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span>{projectNumber} / Lead Project</span>
          {project.category && <span>{project.category}</span>}
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:gap-12">
          <ProjectImage project={project} lead />
          <div className="flex flex-col justify-between gap-10 lg:py-3">
            <div>
              <div className="max-w-[min(30rem,100%)]">
                <h3 className="font-display text-[clamp(2.6rem,3.7vw,4.4rem)] uppercase leading-[0.94] tracking-[-0.035em] text-foreground">
                  {leadTitle.name}
                </h3>
                <p className="mt-3 max-w-[18rem] text-[11px] font-medium uppercase leading-[1.65] tracking-[0.24em] text-muted-foreground">
                  {leadTitle.descriptor}
                </p>
              </div>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>
            </div>
            <div className="space-y-8">
              <ProjectTechnologies technologies={project.technologies} />
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={revealInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-border py-10 md:py-14"
    >
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] md:gap-12 lg:gap-20">
        <div className={reverse ? "md:order-2" : "md:order-1"}>
          <ProjectImage project={project} />
        </div>
        <div
          className={`flex flex-col gap-7 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div>
            <div className="mb-5 flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span>{projectNumber}</span>
              {project.category && <span className="text-right">{project.category}</span>}
            </div>
            <h3 className="font-display text-4xl uppercase leading-[0.88] tracking-[-0.04em] text-foreground sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>
          </div>
          <div className="space-y-6">
            <ProjectTechnologies technologies={project.technologies} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
