---
appId: mogura-panic
locale: en
title: "Mogura Panic"
slug: mogura-panic
category: visual-experimental
description: "A retro whack-a-mole game with classic arcade play and changing number-and-color target rules."
updatedAt: "2026-11-12"
status: active
tags: ["React", "TypeScript", "Vite", "PWA"]
featured: false
appUrl: https://mogura-panic.vercel.app/
githubUrl: https://github.com/Bamboosato/mogura_panic
access: open
usageFeatures: ["on-device-processing", "no-registration"]
usageNote: "Play in your browser without registering. Game logic runs on your device, and the top 10 scores are stored in the current browser without cross-device synchronization. The game interface is in Japanese. Initial loading and web-font downloads require a connection."
---

## Overview

Tap or click moles appearing in a 3×3 field to aim for a high score. Choose classic arcade play or the game's “brain-training” mode, in which number-and-color target rules change during play.

## Main features

- 45-second games with slow, normal, and fast settings
- Gold moles, helmeted moles requiring two hits, and bombs in classic mode
- Eight target rules covering even/odd numbers, number ranges, and four colors
- A brief pause to read each rule
- Score, hits, misses, maximum combo, and browser-local top 10 history
- Retro display, diorama-style animation, and optional sound effects
- Home-screen installation in supported browsers

## Highlights

Designed for short score challenges and play that involves following changing target rules. Choose a speed and challenge your own records on the same device.

## Technology

Built with React, TypeScript, Vite, and Tailwind CSS. Sound effects are generated with the Web Audio API, and score history is saved in localStorage.
