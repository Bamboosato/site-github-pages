---
appId: matchup-lab
locale: en
title: "MatchupLab"
slug: matchup-lab
category: sports-competition
description: "Keep members on your device and generate singles or doubles matchups for practice sessions."
createdAt: "2026-08-20"
updatedAt: "2026-09-14"
status: active
tags: ["Next.js","TypeScript","IndexedDB","PWA"]
featured: false
appUrl: https://matchup-lab-one.vercel.app/
githubUrl: https://github.com/Bamboosato/matchup-lab
---

## Overview

Manage practice-session members and generate matchups from the day's participants and court settings. Member storage and matchup generation run locally in the browser.

## Key features

- Member registration, editing, hiding, and participant selection
- Singles/doubles matchup generation and regeneration
- Matchup PDF output and member JSON import/export

## Design and usage

Members are stored in IndexedDB without accounts or an external matchup API. In-progress inputs and generated matchups are not persisted. Member JSON provides a backup when changing devices or clearing site data.

## Technologies

Next.js and TypeScript combine IndexedDB with browser-side matchup logic; jsPDF produces PDF output.

