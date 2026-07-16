# MyMyMind

An interactive CBT (Cognitive Behavioral Therapy) self-reflection website. MyMyMind helps users understand the connection between their thoughts, emotions, and behaviors through guided reflection activities — without the cost or unstructured feel of traditional journaling.

Built for CS571: Building User Interfaces, University of Wisconsin–Madison.

## Overview

Traditional self-reflection methods like journaling can feel unstructured and hard to maintain, and therapy isn't accessible or affordable for everyone. MyMyMind offers a structured, guided alternative inspired by CBT techniques, letting users track their mood, work through a thought journal, and practice recognizing cognitive distortions through interactive exercises.

MyMyMind is designed as a self-reflection tool, not a replacement for professional mental health care.

## Features

- **Mood Tracker** — Log a daily mood on a 5-point scale with an optional note, and view a simple bar chart of the last 7 entries.
- **Thought Journal** — A step-by-step guided form based on the CBT process: situation → thought → emotion → alternative perspective.
- **Reflection Exercises** — Interactive scenarios that help users identify common cognitive distortions (e.g. catastrophizing, overgeneralization, mind reading).
- **History** — View and delete past mood and journal entries.

## Tech Stack

- React (Vite)
- Data persistence via `localStorage` (no backend for this milestone)

## Components

- `Navbar` — switches between the four main views
- `MoodTracker` — mood logging and trend chart
- `ThoughtJournalForm` — guided multi-step CBT journal entry
- `ReflectionExercise` — cognitive distortion quiz
- `PastEntriesList` — history view with delete functionality

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build & Deploy

```bash
npm run build
npm run deploy
```

The site deploys to GitHub Pages via the `gh-pages` package. Before deploying, make sure `base` in `vite.config.js` and `homepage` in `package.json` match your actual repository name.

## Status

This is the draft milestone submission. Planned for the final version: expanded exercise library, mood trend insights over longer time ranges, and refined visual design.
