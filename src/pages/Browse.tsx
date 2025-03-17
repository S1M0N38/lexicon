import React, { useEffect } from "react";
import WordList from "@/components/WordList";
import words from "@/data/words";

const Browse = () => {
  useEffect(() => {
    // Animation for page elements on load
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate-slide-up");
        element.classList.remove("opacity-0");
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto mb-12 text-center opacity-0 animate-on-load">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-3 inline-block">
            Browse
          </span>
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Explore Uncommon Words
          </h1>
          <p className="text-muted-foreground mb-8">
            Browse our collection of carefully selected uncommon English words.
          </p>
        </div>
        <div className="opacity-0 animate-on-load">
          <WordList words={words} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
