---
appId: app-reveal-lab
locale: en
title: "App Reveal Lab"
slug: app-reveal-lab
category: visual-experimental
description: "Turn photos into animated reveals and export the results as videos or GIFs."
createdAt: "2026-09-17"
updatedAt: "2026-09-17"
status: active
tags: ["TypeScript","WebGL2","GLSL"]
featured: false
appUrl: https://app-reveal-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/app-reveal-lab
---

## Overview

Apply shader effects to an uploaded image to create an animated visual. Adjust the aspect ratio and timeline, then export the result for sharing.

## Key features

- Six GLSL shaders for reveal effects
- Social aspect ratios and timeline controls
- Video and GIF export, preset storage, and JSON import/export

## Design and usage

Choose an image, tune its animation, and export it in the browser. Keyboard shortcuts and an iOS fullscreen fallback support the workflow.

## Technologies

WebGL2 and twgl.js render the shaders; mediabunny and gifenc handle video and GIF export.

