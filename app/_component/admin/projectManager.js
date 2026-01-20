"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2 } from "lucide-react";
import ProjectForm from "./projectForm";
import { projectsAPI } from "../../_lib/api";

export default function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await projectsAPI.getAll(); // returns full JSON object
      console.log("Fetched projects:", data);
      setProjects(data.data.projects || []); // <-- correct
    } catch (err) {
      console.error("Error fetching projects:", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        },
      );

      if (response.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const handleFormSubmit = (newProject) => {
    if (editingId) {
      setProjects(projects.map((p) => (p.id === editingId ? newProject : p)));
    } else {
      setProjects([...projects, newProject]);
    }
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <motion.button
          onClick={() => {
            setEditingId(null);
            setShowForm(!showForm);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          <Plus size={18} />
          Add Project
        </motion.button>
      </div>

      {showForm && (
        <div className="mb-8">
          <ProjectForm
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingId(null);
            }}
            editingProject={projects.find((p) => p.id === editingId)}
          />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="show"
          className="grid gap-4"
        >
          {projects.length === 0 ? (
            <div className="text-center py-12 rounded-lg bg-card border border-border">
              <p className="text-muted-foreground">
                No projects yet. Create one to get started!
              </p>
            </div>
          ) : (
            projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-lg bg-card border border-border flex justify-between items-start hover:border-accent transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {project.technologies &&
                      project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <motion.button
                    onClick={() => {
                      setEditingId(project.id);
                      setShowForm(true);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    <Edit2 size={16} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(project.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}
    </div>
  );
}
