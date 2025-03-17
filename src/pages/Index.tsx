import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WordCard from "@/components/WordCard";
import WordList from "@/components/WordList";
import words from "@/data/words";
import { BookOpen } from "lucide-react";

const Index = () => {
  // Get random words (not featured)
  const getRandomWords = (count = 3) => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get a daily word based on the date
  const getDailyWord = () => {
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
  };

  // Select random words on each render
  const randomWords = getRandomWords();

  // Get the daily word
  const dailyWord = getDailyWord();

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
    <div className="min-h-screen">
      {/* Hero section - minimalist with daily word */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="opacity-0 animate-on-load">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 mb-6 inline-block">
              Word of the Day
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl mb-4 opacity-0 animate-on-load">
            Expand your lexicon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 opacity-0 animate-on-load">
            Discover beautiful, rare, and unusual English words.
          </p>

          <div className="opacity-0 animate-on-load max-w-2xl mx-auto">
            <WordCard word={dailyWord} featured className="mb-8" />
          </div>
        </div>
      </section>

      {/* Random words section */}
      <section className="py-20 bg-background relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-3 inline-block">
                Random Words
              </span>
              <h2 className="font-serif text-2xl md:text-3xl">
                Discover more words
              </h2>
            </div>
            <Link
              to="/browse"
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              View all words →
            </Link>
          </div>

          <WordList words={randomWords} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background border-t border-border">
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

export default Index;
