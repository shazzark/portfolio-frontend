"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function ProjectForm({ onSubmit, onCancel, editingProject }) {
  const [formData, setFormData] = useState(
    editingProject || {
      title: "",
      description: "",
      longDescription: "",
      technologies: [],
      category: "",
      githubUrl: "",
      liveUrl: "",
      image: "",
      featured: false,
    },
  );
  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddTech = () => {
    if (techInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...(prev.technologies || []), techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="p-6 rounded-lg bg-card border border-border space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Project title"
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Web App"
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Short description"
          rows="2"
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
        />
      </div>

      {/* Long Description */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Long Description
        </label>
        <textarea
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          placeholder="Detailed description"
          rows="3"
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
        />
      </div>

      {/* Technologies */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Technologies
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTech();
              }
            }}
            placeholder="Add technology"
            className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={handleAddTech}
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.technologies &&
            formData.technologies.map((tech) => (
              <div
                key={tech}
                className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* URLs */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            placeholder="https://github.com/..."
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Live URL
          </label>
          <input
            type="url"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
        />
        {formData.image && (
          <div className="mt-3 relative h-40 rounded-lg overflow-hidden bg-background border border-border">
            <img
              src={formData.image || "/placeholder.svg"}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
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
          {editingProject ? "Update Project" : "Create Project"}
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
