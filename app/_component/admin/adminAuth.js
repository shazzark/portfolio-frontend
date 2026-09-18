"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { adminAPI } from "../../_lib/api";

export default function AdminAuth({ onAuthenticated }) {
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await adminAPI.login(secretKey);
      onAuthenticated();
    } catch (err) {
      setError("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="p-8 rounded-2xl bg-card border border-border">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
              <Lock className="text-accent" size={32} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-center text-muted-foreground mb-8">
            Sign in to manage portfolio content
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Secret Key
              </label>
              <motion.input
                type="password"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter your secret key"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || !secretKey}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity duration-200"
            >
              {loading ? "Verifying..." : "Unlock Admin"}
            </motion.button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Your session is secured by the portfolio server.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
