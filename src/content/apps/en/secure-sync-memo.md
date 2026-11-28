---
appId: secure-sync-memo
locale: en
title: "Secure Sync Memo"
slug: secure-sync-memo
category: utilities
description: "A personal Markdown notebook with Google sign-in and a passphrase, encrypting note bodies in the browser before saving them to Firebase."
createdAt: "2026-11-27"
updatedAt: "2026-11-27"
status: active
tags: ["React","TypeScript","Firebase","PWA"]
featured: false
appUrl: https://sync-memo-366f4.web.app/
githubUrl: https://github.com/Bamboosato/secure-sync-memo
access: login-required
usageFeatures: []
usageNote: "A personal Markdown notebook that uses Google sign-in and a passphrase to unlock. Note bodies are encrypted in the browser before they are saved to Firebase; titles, tags, timestamps, and other metadata are not encrypted. It is designed for use across your own devices and does not support sharing notes. Initial use and synchronization require a network connection."
---

## Overview

Organize personal Markdown notes across your own devices. Sign in with a Google account and unlock your notes with a passphrase.

## Key features

- Markdown editing and preview
- Search and filtering by title and tags
- Pinning and reordering within each of the pinned and other notes groups

## Design and usage

Note bodies are encrypted in your device’s browser before they are saved to Firebase. Titles, tags, timestamps, and other metadata are not encrypted. The app is designed for use across your own devices and does not support sharing notes with other people.

Initial use and synchronization require a network connection.

## Technologies

Built with React, TypeScript, and Firebase, with PWA mechanisms and the browser’s Web Crypto API.
