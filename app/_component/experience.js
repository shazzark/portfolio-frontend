"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./_ui/card";
import { Badge } from "./_ui/badge";
import { Briefcase, Landmark } from "lucide-react";

export default function Experience() {
  const service = {
    title: "Current Service",
    department: "ICT Department",
    organization: "Air Force Headquarters",
    period: "NYSC · 2026 — Present",
  };

  return (
    <section id="experience" className="border-t border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Current Service
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-[0.88] tracking-[-0.035em] text-foreground">
            {service.title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl"
        >
          <Card className="border-border/80 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      {service.title}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-3xl font-medium uppercase leading-tight tracking-[-0.025em] text-foreground">
                      {service.department}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground">
                      {service.organization}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em]">
                      <Landmark className="mr-2 h-3.5 w-3.5" />
                      {service.period}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Public service in the ICT Department at Air Force Headquarters.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
