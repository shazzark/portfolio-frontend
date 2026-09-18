"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./_ui/card";
import { Award, ExternalLink } from "lucide-react";
import { certificatesAPI } from "../_lib/api";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    certificatesAPI
      .getAll()
      .then((response) => setCertificates(response.data.certificates || []))
      .catch(() => setCertificates([]))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section
      id="certificates"
      className="border-t border-border bg-muted/20 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Learning & Credentials
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-[0.88] tracking-[-0.035em] text-foreground">
            Certificates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional learning and platform-based credentials.
          </p>
        </div>

        {!loading && certificates.length === 0 ? (
          <div className="mx-auto max-w-3xl">
            <Card className="border-dashed border-border bg-card/30">
              <CardContent className="p-10 text-center">
                <Award className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
                <p className="font-display text-2xl uppercase tracking-[-0.02em] text-foreground">
                  Certificates
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  No certificate records have been added yet. This section is
                  ready for future platform credentials.
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl space-y-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate._id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.56, delay: index * 0.08 }}
              >
                <Card className="border-border/70 bg-card/40">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h3 className="font-display text-2xl uppercase leading-tight tracking-[-0.025em] text-foreground">
                            {certificate.title}
                          </h3>
                        </div>
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          {certificate.platform}
                        </p>
                        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          {certificate.completionDate &&
                            new Date(
                              certificate.completionDate,
                            ).toLocaleDateString(undefined, {
                              month: "short",
                              year: "numeric",
                            })}
                        </p>
                      </div>
                      {certificate.certificateUrl && (
                        <a
                          href={certificate.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {certificate.topics?.length > 0 && (
                      <p className="text-sm text-muted-foreground">
                        {certificate.topics.join(" · ")}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
