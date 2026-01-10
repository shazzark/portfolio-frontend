// components/LoadingSpinner.jsx
import { Loader2 } from "lucide-react";

export default function LoadingSpinner({
  size = "default",
  className = "",
  fullScreen = false,
}) {
  const sizeClasses = {
    small: "h-4 w-4",
    default: "h-8 w-8",
    large: "h-12 w-12",
  };

  const spinner = (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
}
