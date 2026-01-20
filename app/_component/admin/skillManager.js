"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2 } from "lucide-react";
import SkillForm from "./skillForm";
import { skillsAPI } from "../../_lib/api";

export default function SkillManager() {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const data = await skillsAPI.getAll();
      console.log("Fetched skills:", data);

      // flatten categories → skills array
      const allSkills = data.data.categories
        ? data.data.categories.flatMap((cat) =>
            cat.skills.map((skill) => ({
              ...skill,
              category: cat.title,
              icon: cat.icon,
            })),
          )
        : [];

      setSkills(allSkills);
    } catch (err) {
      console.error("Error fetching skills:", err);
      setSkills([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        },
      );

      if (response.ok) {
        setSkills(skills.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error("Error deleting skill:", err);
    }
  };

  const handleFormSubmit = (newSkill) => {
    if (editingId) {
      setSkills(skills.map((s) => (s.id === editingId ? newSkill : s)));
    } else {
      setSkills([...skills, newSkill]);
    }
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Skills</h2>
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
          Add Skill
        </motion.button>
      </div>

      {showForm && (
        <div className="mb-8">
          <SkillForm
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingId(null);
            }}
            editingSkill={skills.find((s) => s.id === editingId)}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.length === 0 ? (
            <div className="text-center py-12 rounded-lg bg-card border border-border col-span-full">
              <p className="text-muted-foreground">
                No skills yet. Create one to get started!
              </p>
            </div>
          ) : (
            skills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon || "⚙️"}</span>
                    <div>
                      <h3 className="font-bold text-foreground">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-accent px-2 py-1 rounded-full bg-accent/10">
                    {skill.proficiency}%
                  </span>
                </div>

                {skill.yearsOfExperience && (
                  <p className="text-xs text-muted-foreground mb-3">
                    {skill.yearsOfExperience} year
                    {skill.yearsOfExperience !== 1 ? "s" : ""} exp
                  </p>
                )}

                {skill.featured && (
                  <div className="mb-3 px-2 py-1 rounded text-xs bg-accent/10 text-accent font-semibold inline-block">
                    Featured
                  </div>
                )}

                <div className="flex gap-2">
                  <motion.button
                    onClick={() => {
                      setEditingId(skill.id);
                      setShowForm(true);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
                  >
                    <Edit2 size={16} className="inline mr-1" />
                    Edit
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(skill.id)}
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
