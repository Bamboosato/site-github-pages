---
appId: app-stroop-route
locale: en
title: "Stroop Route"
slug: app-stroop-route
category: visual-experimental
description: "A pathfinding puzzle that connects word meanings and ink colors, with gates that reverse the matching rule."
updatedAt: "2026-10-23"
status: active
tags: ["Next.js","React","TypeScript"]
featured: false
appUrl: https://stroop-route.vercel.app/
githubUrl: https://github.com/Bamboosato/app-stroop-route
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "Play in your browser without registration. Game logic runs on your device, and display and sound settings are stored in the current browser. The puzzle uses Japanese and English color words. An internet connection is required for the initial load."
heroImage:
  src: /apps/app-stroop-route/hero.webp
  alt: "Illustration of a route through a 4×4 color-word puzzle, showing how word and ink-color matching reverses at a gate."
  width: 1600
  height: 900
---

## Overview

Connect horizontally or vertically adjacent cells to reach the goal by matching word meanings with ink colors. Passing through a gate reverses the matching rule.

## Key features

- Seven stages, a daily challenge, and randomly generated mazes from 4×4 to 10×10
- Touch, mouse, and keyboard controls
- Optional move hints, ink-color labels, and undo
- Copy a result containing your time, move count, and route after clearing a puzzle

## Design and usage

The puzzle uses color words in hiragana, katakana, kanji, and English. Stage 6 uses English only, while Stage 7 mixes all four notations. Plan a route by distinguishing word meanings from ink colors. Move hints and ink-color labels can be toggled in settings.

## Technologies

Built with Next.js, React, and TypeScript.
