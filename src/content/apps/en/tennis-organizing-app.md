---
appId: tennis-organizing-app
locale: en
title: "Tennis Organizing App"
slug: tennis-organizing-app
category: sports-competition
description: "Manage tennis members and participants, then generate practice-session matchups."
createdAt: "2026-05-08"
updatedAt: "2026-05-29"
status: active
tags: ["Next.js","TypeScript","Firebase","jsPDF"]
featured: false
appUrl: https://tennis-organizing-app.vercel.app/
githubUrl: https://github.com/Bamboosato/tennis-organizing-app
---

## Overview

Choose the day's participants from registered members and generate matchups using court settings. Login and guest flows support cloud-based member management.

## Key features

- Member registration, editing, and hiding
- Participant selection with singles/doubles settings
- Standard, same-sex, or mixed doubles settings and PDF export

## Design and usage

Member information is stored in Firebase/Firestore, and matchup generation uses an API. Matchups and PDF output are part of one workflow.

## Technologies

Next.js, TypeScript, Firebase/Firestore, a matchup generation API, and jsPDF support the app.
