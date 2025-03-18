
import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2 } from "lucide-react";
import words from "@/data/words";
import GlassPanel from "@/components/GlassPanel";
import { cn } from "@/lib/utils";

const WordDetail = () => {
  const { wordId } = useParams<{ wordId: string }>();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const word = words.find((w) => w.id === wordId);

  useEffect(() => {
    if (!word) {
      // If word not found, redirect to 404
      navigate("/404", { replace: true });
    }
  }, [word, navigate]);

  const playAudio = useCallback(() => {
    if (!word?.audioUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(word.audioUrl);
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [word, isPlaying]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (!word) {
    return null; // Return null instead of loading state
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"
        style={{ contain: "strict" }}
      />
      <div className="container px-4 mx-auto max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          type="button"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <GlassPanel className="mb-8">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-4 inline-block">
            {word.definitions[0].partOfSpeech}
          </span>
          <h1 className="font-serif text-4xl mb-3">{word.word}</h1>

          <div className="flex items-center mb-6">
            <p className="text-muted-foreground">{word.pronunciation}</p>
            {word.audioUrl && (
              <button
                onClick={playAudio}
                className={cn(
                  "ml-2 p-2 rounded-full transition-colors",
                  isPlaying
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted/80",
                )}
                aria-label="Play pronunciation"
                title="Listen to pronunciation"
                type="button"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-3">
                Definition{word.definitions.length > 1 ? "s" : ""}
              </h2>
              <div className="space-y-4">
                {word.definitions.map((def, index) => (
                  <div
                    key={index}
                    className="pl-4 border-l-2 border-primary/30"
                  >
                    <div className="flex items-start">
                      <span className="text-sm text-muted-foreground mr-2">
                        {index + 1}.
                      </span>
                      <p>{def.definition}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 italic">
                      {def.partOfSpeech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>

        <div className="space-y-4">
          <h2 className="text-xl font-serif mb-3">Examples</h2>
          <div className="space-y-3">
            {word.examples.map((example, index) => (
              <GlassPanel
                key={index}
                className={cn(
                  "border-l-4",
                  index % 2 === 0
                    ? "border-l-primary/70"
                    : "border-l-blue-400/70",
                )}
              >
                <p className="italic">"{example}"</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
