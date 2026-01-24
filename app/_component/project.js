"use client";

import { useRef } from "react";
import { useProjects } from "../_lib/queries/useProject";
import { Card, CardContent, CardFooter, CardHeader } from "./_ui/card";
import { Button } from "./_ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./_ui/badge";
import ErrorMessage from "../_component/_ui/errorMessage";
import SkeletonLoader from "./_ui/skeletonLoader";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./_ui/projectCard";

export default function Projects() {
  const ref = useRef(null);

  const { data: projects = [], isLoading, isError, error } = useProjects();

  return (
    <section
      id="projects"
      className="border-t border-border bg-muted/30 py-12 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl md:mb-12 md:text-4xl">
          Projects
        </h2>

        {isError && (
          <ErrorMessage message={error?.message || "Failed to load projects"} />
        )}

        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="mx-auto grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonLoader key={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && projects.length > 0 && (
          <motion.div
            className="mx-auto grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project._id || project.slug}
                project={project}
              />
            ))}
          </motion.div>
        )}

        {!isLoading && projects.length === 0 && !isError && (
          <p className="text-center text-muted-foreground mt-8">
            No projects to display yet.
          </p>
        )}
      </div>
    </section>
  );
}
