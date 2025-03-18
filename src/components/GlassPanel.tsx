
// src/components/GlassPanel.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

const GlassPanel: React.FC<GlassPanelProps> = ({ children, className }) => {
  return (
    <div 
      className={cn("glass-panel p-5", className)}
      style={{ 
        contain: "content",
        willChange: "transform" 
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(GlassPanel);
