// components/ErrorMessage.jsx
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ErrorMessage({
  message,
  onClose,
  type = "error",
  className = "",
}) {
  const variants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const bgColor =
    type === "error"
      ? "bg-destructive/10 border-destructive/20"
      : type === "success"
      ? "bg-green-500/10 border-green-500/20"
      : "bg-blue-500/10 border-blue-500/20";

  const textColor =
    type === "error"
      ? "text-destructive"
      : type === "success"
      ? "text-green-600"
      : "text-blue-600";

  const iconColor =
    type === "error"
      ? "text-destructive"
      : type === "success"
      ? "text-green-600"
      : "text-blue-600";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
          className={`fixed top-4 right-4 z-50 w-full max-w-md rounded-lg border p-4 shadow-lg ${bgColor} ${className}`}
          role="alert"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className={`h-5 w-5 shrink-0 ${iconColor}`} />
            <div className="flex-1">
              <p className={`text-sm font-medium ${textColor}`}>{message}</p>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-2 flex h-6 w-6 items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                aria-label="Close error message"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
