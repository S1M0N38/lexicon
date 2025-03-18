
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import WordCard from "@/components/WordCard";
import WordList from "@/components/WordList";
import words from "@/data/words";
import { BookOpen } from "lucide-react";

const Index = () => {
  // Get random words (not featured)
  const randomWords = useMemo(() => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  // Get a daily word based on the date
  const dailyWord = useMemo(() => {
    // Get current date and use it as a seed
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    // Simple hash function to get a number from the date string
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = (hash << 5) - hash + dateString.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    // Use absolute value of hash to get a positive index
    const index = Math.abs(hash) % words.length;
    return words[index];
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section - minimalist with daily word */}
      <section className="pt-24 pb-12 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"
          style={{ contain: "strict" }}
        />
        <div className="container px-4 mx-auto max-w-6xl">
          <div>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 mb-5 inline-block">
              Word of the Day
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl mb-4">
            Expand your lexicon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Discover beautiful, rare, and unusual English words.
          </p>

          <div className="max-w-2xl mx-auto">
            <WordCard word={dailyWord} featured className="mb-8" />
          </div>
        </div>
      </section>

      {/* Random words section */}
      <section className="py-12 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-2xl">Discover more words</h2>
            </div>
            <Link
              to="/browse"
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              View all →
            </Link>
          </div>

          <WordList words={randomWords} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="h-5 w-5" />
              <span className="font-serif text-lg">Lexicon</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lexicon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default React.memo(Index);
