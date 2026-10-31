---
appId: app-rule-shifter
locale: en
title: "Rule Shifter"
slug: app-rule-shifter
category: visual-experimental
description: "A maze puzzle where you infer hidden matching rules from color, shape, count, and pattern, then adapt when the rule changes."
updatedAt: "2026-10-30"
status: active
tags: ["Next.js", "React", "TypeScript"]
featured: false
appUrl: https://rule-shifter.vercel.app/
githubUrl: https://github.com/Bamboosato/app-rule_shifter
access: open
usageFeatures: ["on-device-processing", "no-registration"]
usageNote: "Play in your browser without registration. Game logic runs on your device, and display and sound settings are stored in the current browser. The app's instructions are mainly in Japanese. An internet connection is required for the initial load."
---

## Overview

Connect horizontally or vertically adjacent cells with color, shape, count, and pattern attributes to reach the goal. Infer the matching rule from whether a move is accepted, then adapt when a spiral cell changes the rule.

## Key features

- Eight regular stages and a 7×7 daily challenge
- Boards from 4×4 to 10×10, with a scrollable view for larger mazes
- Touch, mouse, and keyboard controls
- Select a previously visited cell to rewind the route to that point
- Three lives, with game over after three mistakes, plus time and move counters
- Optional guides for the current matching attributes, color abbreviations, and sound effects
- Copy a result containing your time, move count, remaining lives, and other details after clearing a puzzle

## Design and usage

Stages range from matching one attribute to matching two attributes at once. The guide to the current matching attributes can be toggled in settings and is hidden by default.

## Technologies

Built with Next.js, React, and TypeScript.
