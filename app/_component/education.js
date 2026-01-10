"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "./_ui/card";
import { Badge } from "./_ui/badge";
import { GraduationCap } from "lucide-react";
import Loading from "../_component/_ui/loadingSpinner";
import ErrorMessage from "../_component/_ui/errorMessage";

/* =====================================================
   EDUCATION DATA (REAL, STATIC)
===================================================== */
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Enugu State University of Science and Technology (ESUT)",
    period: "2020 – 2024",
    honors: [
      "Completed core coursework in Software Engineering",
      "Data Structures & Algorithms",
      "Databases and Web Technologies",
    ],
  },
];

export default function Education() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    try {
      // Simulate data loading (you could fetch from backend here)
      setEducation(educationData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load education data");
      setLoading(false);
    }
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section
      id="education"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Education
        </h2>

        <div className="mx-auto max-w-4xl space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.school}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      </div>
                      <p className="text-lg font-medium text-muted-foreground">
                        {edu.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <h4 className="mb-2 font-semibold">Academic Focus:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
