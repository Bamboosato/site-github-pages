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
---

## Overview

Adjust four independent CMYK layers to explore patterns created by their overlap. Switch between Flowline, dot, and mixed rendering to create responsive art.

## Key features

- Per-layer parameters and rendering modes
- Pointer, touch, pen, and keyboard interaction
- Play/pause, random settings, PNG export, and preset storage

## Design and usage

Store up to 100 named presets in IndexedDB. Fullscreen and PWA support are available; the app's own interface is in English.

## Technologies

React and TypeScript provide the interface; WebGL2/GLSL render the artwork and IndexedDB stores presets.
