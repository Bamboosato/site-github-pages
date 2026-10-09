---
appId: matchup-lab
locale: en
title: "MatchupLab"
slug: matchup-lab
category: sports-competition
description: "Manage members locally in your browser and create practice match schedules."
createdAt: "2026-08-20"
updatedAt: "2026-09-14"
status: active
tags: ["Next.js","TypeScript","IndexedDB","PWA"]
featured: false
appUrl: https://matchup-lab-one.vercel.app/
githubUrl: https://github.com/Bamboosato/matchup-lab
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "No account registration is required. Member information is stored in the browser you use, where you can add and edit members. Members are not shared through the cloud."
heroImage:
  src: /apps/matchup-lab/hero.webp
  alt: "Illustration of eight fictional members and two rounds of doubles on two courts, with each member playing once per round and changing partners."
  width: 1600
  height: 900
---

## Overview

Manage practice-session members and generate matchups from the day's participants and court settings. Member storage and matchup generation run locally in the browser.

## Who this app is for

Recommended for people who want to manage members locally.

## Key features

- Member registration, editing, deletion, and participant selection
- Singles/doubles matchup generation and regeneration
- Matchup PDF output and member JSON import/export

## Design and usage

Members are stored in IndexedDB without an external matchup API. In-progress inputs and generated matchups are not persisted. Member JSON provides a backup when changing devices or clearing site data.

## Technologies

Next.js and TypeScript combine IndexedDB with browser-side matchup logic; jsPDF produces PDF output.
