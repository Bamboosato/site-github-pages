---
appId: sudoku-ai-app
locale: en
title: "Sudoku AI"
slug: sudoku-ai-app
category: visual-experimental
description: "Play Sudoku with five difficulty levels, pencil notes, two-stage local hints, and pause/resume."
createdAt: "2026-10-08"
updatedAt: "2026-10-15"
status: active
tags: ["React","TypeScript","Vite","Gemini"]
featured: false
appUrl: https://sudoku-ai-app.vercel.app/
githubUrl: https://github.com/Bamboosato/sudoku-ai-app
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "The Sudoku game and two-stage hints do not require an account for this app or a Gemini API key. Any API key you set is stored in your browser. Sending an image to Google’s API requires an internet connection and your own Gemini API key."
heroImage:
  src: /apps/sudoku-ai-app/hero.webp
  alt: "Illustration reconstructing a Sudoku board with pencil notes and a Japanese logical hint identifying 9 at row 1, column 5."
  width: 1600
  height: 900
---

## Overview

Play Sudoku at beginner, easy, medium, hard, or expert difficulty. Use pencil notes and two-stage local hints to work out your next move.

## Key features

- Start a game at one of five difficulty levels from 新規 (New Game)
- Manual pencil notes
- Undo, erase a selected cell, and reset incorrect entries
- Two-stage hints: ヒントを見る (Show Hint) identifies an area to focus on, then さらに詳しく (More Detail) shows the target cell and a clue
- Local naked-single and hidden-single hints, with identification of incorrect entries
- Pause/resume with the timer stopped and board hidden
- A 3×3 number palette when you select a cell, with a bottom number pad available through 入力方式 (Input Method) in the menu
- Tap the entered digit again in the palette to erase it. A digit already in the selected cell or its pencil notes can still be removed when its remaining count is zero
- When using the bottom number pad, smartphones show two rows of number keys. Board digits and pencil notes use larger text
- A notification when a new version is detected, with an 更新 (Update) button to apply it
- Light and dark themes

## Design and usage

Puzzle generation, pencil notes, and two-stage hints run in the browser. Start by considering the highlighted area, then move to the target cell and a clue when you need more help. Resetting incorrect entries clears inputs that differ from the solution. The app’s buttons and menus are displayed in Japanese.

Popup input is the default, and your choice of input method is saved in the same browser.

Use マイパズルに追加 (Add to My Puzzles) to register the initial puzzle grid in the same browser and play it again from the beginning from the list. This does not save and resume entered digits, pencil notes, or elapsed time.

## Technologies

React, TypeScript, Vite, and Tailwind CSS support the app.
