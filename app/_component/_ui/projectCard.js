"use client";

import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="flex h-full flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {project.imageUrl && (
          <div className="h-48 w-full overflow-hidden rounded-t-lg relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        {/* ------------------ Header ------------------ */}
        <CardHeader className="pb-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-lg font-semibold sm:text-xl line-clamp-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.featured && (
                <Badge variant="default" className="text-xs">
                  Featured
                </Badge>
              )}
              {project.category && (
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        {/* ------------------ Content ------------------ */}
        <CardContent className="flex-1 pb-4">
          <p className="mb-4 text-sm text-muted-foreground sm:text-base line-clamp-3">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="mb-4 text-xs text-muted-foreground/70 sm:text-sm line-clamp-3">
              {project.longDescription.length > 120
                ? `${project.longDescription.slice(0, 120)}...`
                : project.longDescription}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies?.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs truncate max-w-25"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies?.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
        </CardContent>

        {/* ------------------ Footer ------------------ */}
        <CardFooter className="pt-4 border-t mt-auto">
          <div className="flex flex-wrap gap-2 w-full">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-30 text-xs sm:text-sm"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-30 text-xs sm:text-sm"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Code
                </a>
              </Button>
            )}

            {/* <Button
              variant="ghost"
              size="sm"
              className="flex-1 min-w-30 text-xs sm:text-sm"
              asChild
            >
              <a href={`/projects/${project.slug || project._id}`}>
                View Details
              </a>
            </Button> */}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
