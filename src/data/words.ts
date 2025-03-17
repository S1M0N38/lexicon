import words from "./words.json";

export interface WordDefinition {
  definition: string;
  partOfSpeech:
    | "noun"
    | "verb"
    | "adjective"
    | "adverb"
    | "preposition"
    | "conjunction"
    | "interjection";
}

export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  definitions: WordDefinition[];
  examples: string[];
  isFeatured?: boolean;
  audioUrl?: string;
}

export default words as Word[];
