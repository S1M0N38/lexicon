import React from "react";
import { Link } from "react-router-dom";
import { Word } from "@/data/words";
import GlassPanel from "./GlassPanel";
import { cn } from "@/lib/utils";

interface WordCardProps {
  word: Word;
  className?: string;
  featured?: boolean;
}

const WordCard: React.FC<WordCardProps> = ({
  word,
  className,
  featured = false,
}) => {
  return (
    <Link
      to={`/word/${word.id}`}
      className={cn("block word-card", featured ? "h-full" : "", className)}
    >
      <GlassPanel
        className={cn(
          "h-full flex flex-col justify-between",
          featured ? "md:p-8 p-6" : "p-5",
        )}
      >
        <div>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground mb-4 inline-block">
            {word.definitions[0].partOfSpeech}
          </span>
          <h3
            className={cn("font-serif mb-2", featured ? "text-3xl" : "text-xl")}
          >
            {word.word}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {word.pronunciation}
          </p>
          <p
            className={cn(
              "text-foreground/85",
              featured ? "text-base" : "text-sm",
            )}
          >
            {word.definitions[0].definition}
          </p>
        </div>
        {featured && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm italic text-muted-foreground">
              "{word.examples[0]}"
            </p>
          </div>
        )}
      </GlassPanel>
    </Link>
  );
};

export default WordCard;
