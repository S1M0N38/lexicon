
import React from "react";
import { Word } from "@/data/words";
import WordCard from "./WordCard";

interface WordListProps {
  words: Word[];
  className?: string;
}

const WordList: React.FC<WordListProps> = ({ words, className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
};

export default React.memo(WordList);
