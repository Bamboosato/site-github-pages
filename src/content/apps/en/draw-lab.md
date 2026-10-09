---
appId: draw-lab
locale: en
title: "Draw Lab"
slug: draw-lab
category: sports-competition
description: "Manage tournament brackets and leagues, from participant setup to printing."
createdAt: "2026-07-02"
updatedAt: "2026-09-14"
status: active
tags: ["React","TypeScript","IndexedDB","PWA"]
featured: true
appUrl: https://draw-lab-rho.vercel.app/
githubUrl: https://github.com/Bamboosato/draw-lab
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "To edit and save tournament data offline, complete the initial online load in a supported browser. Data is stored in the browser you use."
heroImage:
  src: /apps/draw-lab/hero.webp
  alt: "Illustration of a four-player tournament bracket and a separate three-player league table with consistent wins and points. All entrants are fictional."
  width: 1600
  height: 900
---

## Overview

Support singles, doubles, and team events. Register participants and create brackets that account for seeds and affiliations. League management can feed into tournament play.

## Key features

- Bracket generation with seeds, BYEs, and affiliation balancing
- Participant entry through CSV or pasted data, plus league and result management
- SVG previews, printing/PDF output, and JSON backups

## Design and usage

Tournament data is stored locally in IndexedDB. PWA support and browser printing help carry the event from preparation to output.

## Technologies

React, TypeScript, IndexedDB, and SVG support the app, with React Router for navigation.
