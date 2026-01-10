"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "./_ui/card";
import { Badge } from "./_ui/badge";
import { Briefcase } from "lucide-react";
import Loading from "../_component/_ui/loadingSpinner";
import ErrorMessage from "../_component/_ui/errorMessage";

// Simulate fetching experience data
const fetchExperiences = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          company: "BookFinder App",
          position: "Frontend Developer",
          duration: "2025",
          description:
            "Built a book search and library web app using React and Tailwind.",
          responsibilities: [
            "Implemented search and filtering functionality",
            "Created responsive UI components with Tailwind",
            "Managed state with React hooks",
            "Integrated Google Books API for book data",
          ],
          technologies: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Google Books API",
          ],
          featured: true,
        },
        {
          company: "Cecilia Crochet eCommerce",
          position: "Frontend Developer",
          duration: "2025",
          description:
            "Developed an eCommerce website for selling crochet products.",
          responsibilities: [
            "Built product listing and detail pages",
            "Implemented animations with Framer Motion",
            "Created responsive UI with Tailwind CSS",
            "Managed client-side routing and state",
          ],
          technologies: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript",
          ],
          featured: false,
        },
        {
          company: "Estate Management Website",
          position: "Full Stack Developer",
          duration: "2025",
          description:
            "Developed a full-stack estate management platform with backend and frontend.",
          responsibilities: [
            "Built RESTful API with Node.js and Express",
            "Integrated MongoDB for data storage",
            "Created frontend UI with React and Tailwind",
            "Handled user authentication and bookings",
          ],
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
          ],
          featured: false,
        },
      ]);
    }, 500); // simulate network delay
  });

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExperiences()
      .then((data) => setExperiences(data))
      .catch(() => setError("Failed to load experience data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />; // Use your Loading component
  if (error) return <ErrorMessage message={error} />; // Use your ErrorMessage component

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Experience
          </h2>
          <div className="mx-auto max-w-4xl space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`transition-shadow hover:shadow-lg ${
                    exp.featured ? "border-primary" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold">
                            {exp.position}
                          </h3>
                          {exp.featured && (
                            <Badge variant="default">Current</Badge>
                          )}
                        </div>
                        <p className="text-lg font-medium text-muted-foreground">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-pretty leading-relaxed text-foreground/80">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="mb-2 font-semibold">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
