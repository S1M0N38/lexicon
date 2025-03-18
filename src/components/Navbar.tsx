
import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-out py-4",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
      style={{ willChange: "background, box-shadow" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          prefetch="intent"
        >
          <BookOpen className="h-6 w-6" />
          <span className="font-serif text-xl font-medium">Lexicon</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/" ? "text-primary" : "text-foreground/80",
            )}
            prefetch="intent"
          >
            Home
          </Link>
          <Link
            to="/browse"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/browse"
                ? "text-primary"
                : "text-foreground/80",
            )}
            prefetch="intent"
          >
            Browse
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
