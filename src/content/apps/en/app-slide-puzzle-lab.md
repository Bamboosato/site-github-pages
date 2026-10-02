---
appId: app-slide-puzzle-lab
locale: en
title: "Slide Puzzle Lab"
slug: app-slide-puzzle-lab
category: visual-experimental
description: "Make a sliding puzzle from a photo and revisit your progress through records and replays."
createdAt: "2026-09-24"
updatedAt: "2026-10-02"
status: active
tags: ["React","TypeScript","Canvas","PWA"]
featured: false
appUrl: https://app-slide-puzzle-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/app-slide-puzzle-lab
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "To play offline, first load the app online. You can play using an image selected from your device. Saved records contain results and the starting tile layout, along with puzzle settings; they do not include the selected image."
---

## Overview

Crop a photo into a square and play a sliding puzzle from 3×3 to 6×6. Restore the image while tracking moves and elapsed time.

## Key features

- 3×3, 4×4, 5×5, and 6×6 boards with difficulty settings
- Tap, swipe, and arrow-key controls
- Play records, rankings, replays, and move-estimate explanations

## Design and usage

Images are processed with Canvas. Shuffles remain solvable, and the timer pauses when the tab is hidden. Confirmed shortest paths are distinguished from reference estimates; larger boards and search timeouts use estimates. PWA support enables offline use after initial online setup.

## Technologies

React, TypeScript, and Canvas power the interface; move searches run in a Web Worker.
