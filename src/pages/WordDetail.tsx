import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import words from "@/data/words";
import GlassPanel from "@/components/GlassPanel";
import { cn } from "@/lib/utils";

const WordDetail = () => {
  const { wordId } = useParams<{ wordId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const word = words.find((w) => w.id === wordId);

  useEffect(() => {
    if (!word) {
      // If word not found, redirect to 404
      navigate("/404", { replace: true });
      return;
    }

    // Simplified loading state management
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [word, navigate]);

  if (isLoading || !word) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="animate-pulse h-4 w-24 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="container px-4 mx-auto max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <GlassPanel className="mb-10 animate-fade-in">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-4 inline-block">
            {word.definitions[0].partOfSpeech}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{word.word}</h1>
          <p className="text-muted-foreground mb-6">{word.pronunciation}</p>

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

        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-serif mb-4">Examples</h2>
          <div className="space-y-4">
            {word.examples.map((example, index) => (
              <GlassPanel
                key={index}
                className={cn(
                  "border-l-4 transition-all",
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
