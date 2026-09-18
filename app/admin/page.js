"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminAuth from "../_component/admin/adminAuth";
import AdminPanel from "../_component/admin/adminPanel";
import { adminAPI } from "../_lib/api";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    adminAPI
      .session()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogout = () => {
    adminAPI.logout().finally(() => setIsAuthenticated(false));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {isAuthenticated ? (
        <AdminPanel onLogout={handleLogout} />
      ) : (
        <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
      )}
    </main>
  );
}
