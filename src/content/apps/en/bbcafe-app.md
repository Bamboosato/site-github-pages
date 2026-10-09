---
appId: bbcafe-app
locale: en
title: "BBCafe App"
slug: bbcafe-app
category: productivity
description: "Review incoming LINE messages and manage everyday notices in a web app."
createdAt: "2026-05-26"
updatedAt: "2026-09-11"
status: active
tags: ["Next.js","TypeScript","Firebase","LINE"]
featured: false
appUrl: https://bbcafe-app.vercel.app/
githubUrl: https://github.com/Bamboosato/bbcafe-app
access: login-required
usageFeatures: []
usageNote: "To start using the app, you need to obtain a LINE Official Account and have your account registered by the app administrator."
heroImage:
  src: /apps/bbcafe-app/hero.webp
  alt: "Concept illustration of reviewing and editing a fictional short message before sending, beside confirmed and unconfirmed statuses for two fictional recipients after sending."
  width: 1600
  height: 900
---

## Overview

Store text received through LINE webhooks and review it in an authenticated list and detail view. Daily notices can also incorporate weather and care information.

## Key features

- Store and review LINE text from individual and group conversations
- Login, password reset, and administrator message deletion
- Web Push notifications for incoming messages and daily notices

## Design and usage

The app connects LINE with a web interface. Authentication and network access support message review and notification management.

Existing users sign in with their registered account. There is no in-app sign-up screen. Obtaining a LINE Official Account and registration by the app administrator are preparation steps for new users, rather than tasks to repeat at every login.

## Technologies

Next.js, React, and Firebase integrate with LINE webhooks and Web Push.
