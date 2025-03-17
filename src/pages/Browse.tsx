
import React, { useState, useEffect } from "react";
import WordList from "@/components/WordList";
import words from "@/data/words";
import { Search } from "lucide-react";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWords, setFilteredWords] = useState(words);
  
  useEffect(() => {
    // Filter words based on search term
    const results = words.filter(word => 
      word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.definitions.some(def => 
        def.definition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    setFilteredWords(results);
  }, [searchTerm]);
  
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto mb-12 text-center opacity-0 animate-on-load">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-3 inline-block">
            Browse
          </span>
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Explore Uncommon Words</h1>
          <p className="text-muted-foreground mb-8">
            Browse our collection of carefully selected uncommon English words.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-input rounded-md bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="Search words or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="opacity-0 animate-on-load">
          {filteredWords.length > 0 ? (
            <WordList words={filteredWords} />
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No words found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
