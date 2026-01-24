"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../_component/_ui/card";
import { Badge } from "../_component/_ui/badge";
import { Zap, MessageSquare } from "lucide-react";

import {
  Layout,
  Code2,
  Server,
  Cloud,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
} from "lucide-react";

import { skillsData } from "../_lib/skillsData";
import techIconMap from "../_lib/techicon";

/* =========================
   SECTION ICON REGISTRY
========================= */
// const sectionIconMap = {
//   Layout: Layout,
//   Server: Server,
//   Cloud: Cloud, // ADD THIS LINE
//   Palette: Palette,
//   Globe: Globe,
//   Smartphone: Smartphone,
//   GitBranch: GitBranch,
//   Zap: Zap,
//   frontend: Layout,
// };

const sectionIconMap = {
  backend: Server,
  Layout: Layout,
  Server: Server,
  Cloud: Cloud,
  Palette: Palette,
  Globe: Globe,
  Smartphone: Smartphone,
  GitBranch: GitBranch,
  Zap: Zap,
  frontend: Layout, // lowercase matches skillsData
  backend: Server, // lowercase fallback
  tools: Cloud, // lowercase fallback
};

export default function SkillsPage() {
  const { categories, featuredSkills, stats } = skillsData;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-3 w-3 mr-2" />
            Expertise Areas
          </Badge>

          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        {/* FEATURED SKILLS */}
        <AnimatePresence>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16"
            initial="hidden"
            animate="visible"
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
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </div>
                      <h3 className="font-semibold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CATEGORIES */}
        {categories.map((category) => {
          const CategoryIcon =
            sectionIconMap[category.icon] || techIconMap[category.icon];

          return (
            <div key={category.key} className="space-y-14 mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color}  `}>
                  {CategoryIcon && (
                    <CategoryIcon className="h-5 w-5 " stroke="currentColor" />
                  )}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {category.skills.map((skill) => {
                  const SkillIcon = techIconMap[skill.icon];

                  return (
                    <motion.div
                      key={skill.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Card>
                        <CardContent className="p-5">
                          <div className="flex justify-between mb-3">
                            <div className="flex gap-3 items-center">
                              {SkillIcon && (
                                <SkillIcon
                                  className={`text-xl ${category.color.replace("bg-", "text-")}`}
                                />
                              )}

                              <div>
                                <h4 className="font-semibold">{skill.name}</h4>
                                <p className="text-xs text-muted-foreground">
                                  {skill.years} years experience
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary">{skill.level}%</Badge>
                          </div>

                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className={`h-full ${category.color} opacity-90`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}

        {/* STATS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">
              {stats.maxExperience}+
            </div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">
              {stats.totalSkills}+
            </div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">
              {stats.totalCategories}
            </div>
            <p className="text-muted-foreground">Skill Domains</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Badge variant="secondary" className="px-4 py-2">
            <MessageSquare className="h-4 w-4 mr-2" />
            Always open to discussing tech stacks
          </Badge>
        </div>
      </div>
    </section>
  );
}
