
import React, { useEffect } from "react";
import WordCard from "@/components/WordCard";
import WordList from "@/components/WordList";
import GlassPanel from "@/components/GlassPanel";
import words from "@/data/words";
import { BookOpen } from "lucide-react";

const Index = () => {
  // Get featured words
  const featuredWords = words.filter(word => word.isFeatured);
  // Get other words (not featured)
  const otherWords = words.filter(word => !word.isFeatured).slice(0, 6);

  useEffect(() => {
    // Animation for page elements on load
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-slide-up');
        element.classList.remove('opacity-0');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="opacity-0 animate-on-load">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-6 inline-block">
              Uncommon English
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl mb-4 opacity-0 animate-on-load">
            Expand your lexicon with <br className="hidden md:block" />
            <span className="text-primary">uncommon words</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 opacity-0 animate-on-load">
            Discover beautiful, rare, and unusual English words, their definitions, and how to use them in sentences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-on-load">
            {featuredWords.map((word, index) => (
              <WordCard key={word.id} word={word} featured />
            ))}
          </div>
        </div>
      </section>

      {/* More words section */}
      <section className="py-20 bg-white relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-3 inline-block">
                Vocabulary
              </span>
              <h2 className="font-serif text-2xl md:text-3xl">Discover more words</h2>
            </div>
            <a href="/browse" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
              View all words →
            </a>
          </div>
          
          <WordList words={otherWords} />
        </div>
      </section>

      {/* About section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-3 inline-block">
                About
              </span>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">Why learn uncommon words?</h2>
              <p className="text-muted-foreground mb-6">
                Unusual and rare words add depth, precision, and color to your language. They allow you to express complex ideas more accurately and make your writing more vivid and engaging.
              </p>
              <ul className="space-y-3">
                {[
                  "Enhance your writing with precise vocabulary",
                  "Express complex concepts more accurately",
                  "Appreciate the richness of the English language",
                  "Impress others with your lexical knowledge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <GlassPanel className="md:p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-center mb-6">Begin your journey</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Start exploring our collection of carefully selected uncommon English words.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="/browse" 
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Browse Words
                  </a>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-border">
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
