"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "../_component/_ui/card";
import { Badge } from "../_component/_ui/badge";
import { ChevronDown, Zap } from "lucide-react";

import {
  Layout,
  Server,
  Cloud,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
} from "lucide-react";

import techIconMap from "../_lib/techicon";
import { skillsData } from "../_lib/skillsData";

const sectionIconMap = {
  backend: Server,
  Layout,
  Server,
  Cloud,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
  Zap,
  frontend: Layout,
  backend: Server,
  tools: Cloud,
};

export default function SkillsPage() {
  const { categories, featuredSkills } = skillsData;

  return (
    <section id="skills" className="border-t border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-4">
            <Zap className="mr-2 h-3 w-3" />
            Technical Stack
          </Badge>

          <h2 className="mb-4 font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-[0.88] tracking-[-0.035em] text-foreground">
            Technical Skills
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Product-minded frontend, backend, data, tooling, and delivery capability.
          </p>
        </div>

        <motion.div
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {featuredSkills.map((skill) => {
            const Icon = sectionIconMap[skill.icon];

            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full border-border/60 bg-card/40">
                  <CardContent className="p-6">
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {categories.map((category) => (
          <SkillCategory key={category.key} category={category} />
        ))}
      </div>
    </section>
  );
}

function SkillCategory({ category }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const CategoryIcon =
    sectionIconMap[category.icon] || techIconMap[category.icon];
  const hasMore = category.skills.length > 4;
  const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 4);
  const hiddenCount = category.skills.length - 4;
  const listId = `${category.key}-skills`;

  return (
    <div className="mb-14 space-y-6">
      <div className="mb-6 flex items-center gap-3">
        <div className={`rounded-lg p-2 ${category.color}`}>
          {CategoryIcon && (
            <CategoryIcon className="h-5 w-5 text-background" stroke="currentColor" />
          )}
        </div>
        <h3 className="font-display text-2xl font-medium uppercase tracking-[-0.015em] text-foreground">
          {category.title}
        </h3>
      </div>

      <div id={listId} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleSkills.map((skill, index) => {
          const SkillIcon = techIconMap[skill.icon];
          return (
            <motion.div
              key={skill.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.36, delay: index >= 4 ? (index - 4) * 0.06 : 0 }}
            >
              <Card className="h-full border-border/60 bg-card/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    {SkillIcon && <SkillIcon className="text-xl text-accent" />}
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          aria-controls={listId}
          className="group inline-flex min-h-11 items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          {isExpanded ? "Show fewer" : `View ${hiddenCount} more`}
          <ChevronDown
            className={`size-4 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
