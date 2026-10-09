---
appId: interactive-moire-art
locale: en
title: "Interactive CMYK Moiré"
slug: interactive-moire-art
category: visual-experimental
description: "Explore animated moiré patterns by combining CMYK layers."
createdAt: "2026-08-25"
updatedAt: "2026-08-27"
status: active
tags: ["React","TypeScript","WebGL2","GLSL"]
featured: false
appUrl: https://interactive-moire-art.vercel.app/
githubUrl: https://github.com/Bamboosato/interactive-moire-art
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "Patterns are generated and saved on your device. Use a browser with WebGL 2 support."
heroImage:
  src: /apps/interactive-moire-art/hero.webp
  alt: "Illustration of moiré patterns formed by overlapping offset dark green and vermilion concentric circles, visualizing the layering effect rather than an app screenshot."
  width: 1600
  height: 900
---

## Overview

Toggle the visibility of four CMYK layers individually to explore patterns created by their overlap. Adjust shared parameters such as line spacing and noise, and switch between Flowline, dot, and mixed rendering.

## Key features

- Per-layer visibility controls, shared parameters, and rendering modes
- Pointer, touch, pen, and keyboard interaction
- Play/pause, random settings, PNG export, and preset storage

## Design and usage

Store up to 100 named presets in IndexedDB. Fullscreen and PWA support are available; the app's own interface is in English.

## Technologies

React and TypeScript provide the interface; WebGL2/GLSL render the artwork and IndexedDB stores presets.
