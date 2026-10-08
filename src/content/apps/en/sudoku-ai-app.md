---
appId: sudoku-ai-app
locale: en
title: "Sudoku AI"
slug: sudoku-ai-app
category: visual-experimental
description: "Play Sudoku with three difficulty levels, pencil notes, and local hints, with optional Gemini advice."
createdAt: "2026-10-08"
updatedAt: "2026-10-08"
status: active
tags: ["React","TypeScript","Vite","Gemini"]
featured: false
appUrl: https://sudoku-ai-app.vercel.app/
githubUrl: https://github.com/Bamboosato/sudoku-ai-app
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "The Sudoku game and local hints do not require an account for this app or a Gemini API key. Gemini advice is an optional online feature. If you use your own API key, it is stored in your browser and used to contact Google’s API with information such as the board and pencil notes. Server-provided AI availability without a personal key and offline operation have not been verified."
---

## Overview

Play Sudoku at easy, medium, or hard difficulty. Use pencil notes and local hints to work out your next move.

## Key features

- Manual pencil notes and automatic candidates for empty cells
- Undo, erase a selected cell, and reset incorrect entries
- Local naked-single and hidden-single hints, with identification of incorrect entries
- Optional Gemini advice with four levels of detail
- Light and dark themes

## Design and usage

Puzzle generation, pencil notes, and local hints run in the browser. Resetting incorrect entries clears inputs that differ from the solution. Gemini advice lets you choose the level of detail, from a general direction to a direct answer.

## Technologies

React, TypeScript, Vite, and Tailwind CSS support the app. Optional Gemini integration supports direct requests to the Google Generative Language API using a personal API key.
