# Lexicon

A clean, elegant website for discovering beautiful, rare, and unusual English words.

![Lexicon Screenshot](https://raw.githubusercontent.com/S1M0N38/lexicon/main/screenshot.png)

## Overview

Lexicon is a responsive web application designed to help users expand their vocabulary with uncommon English words. It features:

- Daily word showcase with definition and example usage
- Browse page to explore the full word collection
- Detailed word pages with pronunciations, multiple definitions, and example sentences
- Clean, minimalist UI with smooth animations
- Responsive design that works beautifully on all devices
- Light/dark mode that follows system preferences

## Live Demo

Visit the live site: [https://s1m0n38.github.io/lexicon](https://s1m0n38.github.io/lexicon)

## An Experiment in Vibe Coding

This project was created as an experiment in "vibe coding" - an AI-dependent programming paradigm where a person describes a problem to an LLM (like Claude) and the AI generates software solutions.

For more information about vibe coding, see the [Wikipedia article](https://en.wikipedia.org/wiki/Vibe_coding).

### Development Process

As someone with little JavaScript/TypeScript/React experience who primarily works with Python for data analysis, I wanted to test how feasible it would be to create a fully-functional, aesthetically pleasing website with minimal prior knowledge of these technologies. Here's how the project came together:

1. Started with Lovable (free tier) for initial setup (~15 minutes)
2. Imported the repository to Claude for further development
3. Created a GitHub action for automatic deployment to GitHub Pages (~5 minutes)
4. Generated word data using Python scripts (~30 minutes)
5. Refined the application with Claude and fixed bugs (~40 minutes)
6. Added pronunciation audio features (~40 minutes)

Total development time: ~2.5 hours

## Local Development

To run this project locally:

```sh
# Clone the repository
git clone https://github.com/S1M0N38/lexicon.git

# Navigate to the project directory
cd lexicon

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a new build and deployment.
