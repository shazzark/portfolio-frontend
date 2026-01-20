"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SkillForm({ onSubmit, onCancel, editingSkill }) {
  const [formData, setFormData] = useState(
    editingSkill || {
      name: "",
      proficiency: 50,
      yearsOfExperience: 1,
      icon: "⚙️",
      category: "",
      featured: false,
    },
  );

  const commonIcons = [
    "⚛️",
    "🟩",
    "📘",
    "▲",
    "🍃",
    "🐘",
    "💻",
    "🚀",
    "🎨",
    "📊",
    "🔐",
    "⚙️",
    "📱",
    "☁️",
    "🌐",
    "⚡",
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Language",
    "Database",
    "Tools",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? parseInt(value)
            : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: editingSkill?.id || Date.now(),
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="p-6 rounded-lg bg-card border border-border space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Skill name"
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-accent"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Proficiency */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Proficiency Level:{" "}
          <span className="text-accent">{formData.proficiency}%</span>
        </label>
        <input
          type="range"
          name="proficiency"
          min="0"
          max="100"
          step="5"
          value={formData.proficiency}
          onChange={handleChange}
          className="w-full h-2 rounded-lg bg-card border border-border appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Years of Experience */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Years of Experience
        </label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          min="0"
          max="50"
          placeholder="0"
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
        />
      </div>

      {/* Icon Selection */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Icon
        </label>
        <div className="grid grid-cols-6 gap-2 mb-4">
          {commonIcons.map((icon) => (
            <motion.button
              key={icon}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, icon }))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg text-2xl transition-all ${
                formData.icon === icon
                  ? "bg-accent border-2 border-accent"
                  : "bg-background border-2 border-border hover:border-accent"
              }`}
            >
              {icon}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="w-4 h-4 rounded accent-accent cursor-pointer"
        />
        <label
          htmlFor="featured"
          className="text-sm font-medium text-foreground cursor-pointer"
        >
          Mark as featured
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4 border-t border-border">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          {editingSkill ? "Update Skill" : "Create Skill"}
        </motion.button>
        <motion.button
          type="button"
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 px-6 rounded-lg bg-card border border-border text-foreground font-semibold hover:border-accent transition-colors"
        >
          Cancel
        </motion.button>
      </div>
    </motion.form>
  );
}
