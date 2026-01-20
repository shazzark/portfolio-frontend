"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, Plus } from "lucide-react";
import ProjectManager from "./projectManager";
import SkillManager from "./skillManager";

export default function AdminPanel({ onLogout }) {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "skills", label: "Skills", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold bg-linear-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <motion.button
              onClick={onLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <LogOut size={18} />
              Logout
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 pb-4 border-t border-border pt-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "projects" && <ProjectManager />}
          {activeTab === "skills" && <SkillManager />}
        </motion.div>
      </main>
    </div>
  );
}
