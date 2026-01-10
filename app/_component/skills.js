"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsAPI } from "../_lib/api";

import Loading from "../_component/_ui/loadingSpinner";
import ErrorMessage from "../_component/_ui/errorMessage";

import { Card, CardContent } from "../_component/_ui/card";
import { Badge } from "../_component/_ui/badge";

import {
  Code2,
  Server,
  Cloud,
  Palette,
  Zap,
  Globe,
  Smartphone,
  GitBranch,
  MessageSquare,
} from "lucide-react";

/* =========================
   ICON REGISTRY
========================= */
const iconMap = {
  Code2,
  Server,
  Cloud,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
  Zap,
};

export default function SkillsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await skillsAPI.getAll();
        setData(res.data);
      } catch (err) {
        setError(err.message || "Failed to load skills");
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const { categories, featuredSkills, stats } = data;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* =========================
            HEADER
        ========================= */}
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

        {/* =========================
            FEATURED SKILLS
        ========================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {featuredSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon];

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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
        </div>

        {/* =========================
            CATEGORIES + SKILLS
        ========================= */}
        <div className="space-y-14">
          {categories.map((category) => {
            const CategoryIcon = iconMap[category.icon];

            return (
              <div key={category.key}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg ${category.color} bg-opacity-10`}
                  >
                    {CategoryIcon && (
                      <CategoryIcon
                        className={`h-5 w-5 ${category.color.replace(
                          "bg-",
                          "text-"
                        )}`}
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill) => (
                    <Card key={skill.id}>
                      <CardContent className="p-5">
                        <div className="flex justify-between mb-3">
                          <div className="flex gap-3 items-center">
                            <span className="text-xl">{skill.icon}</span>
                            <div>
                              <h4 className="font-semibold">{skill.name}</h4>
                              <p className="text-xs text-muted-foreground">
                                {skill.years} years experience
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary">{skill.level}%</Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${category.color}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            STATS
        ========================= */}
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

        {/* =========================
            CTA
        ========================= */}
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
