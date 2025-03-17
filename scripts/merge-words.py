import glob
import json


def merge_json_files():
    """
    Merge multiple JSON files containing word lists, remove duplicates, and export a single JSON file.
    """
    # Find all JSON files matching the pattern
    json_files = glob.glob("*.json")

    # Initialize empty list to store all words
    all_words = []

    # Read each file and append its contents to the all_words list
    for file_path in json_files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                words = json.load(f)
                assert isinstance(words, list), f"Expected a list, got {type(words)}"
                all_words.extend(words)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

    # Remove duplicates based on the 'id' field
    unique_words = {}
    for word in all_words:
        word_id = word.get("id")
        if word_id and word_id not in unique_words:
            unique_words[word_id] = word

    # Convert back to list
    merged_words = list(unique_words.values())

    # Sort alphabetically by word
    merged_words.sort(key=lambda x: x.get("word", "").lower())

    # Write to output file
    output_path = "all.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(merged_words, f, indent=2, ensure_ascii=False)

    print(f"Successfully merged {len(json_files)} files.")
    print(f"Total words before deduplication: {len(all_words)}")
    print(f"Total unique words: {len(merged_words)}")
    print(f"Output saved to {output_path}")


if __name__ == "__main__":
    merge_json_files()
