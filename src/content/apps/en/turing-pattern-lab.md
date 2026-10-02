---
appId: turing-pattern-lab
locale: en
title: "Turing Pattern Lab"
slug: turing-pattern-lab
category: visual-experimental
description: "Explore reaction-diffusion patterns by adjusting parameters in real time."
createdAt: "2026-06-18"
updatedAt: "2026-08-26"
status: active
tags: ["React","TypeScript","Canvas","MediaPipe"]
featured: false
appUrl: https://turing-pattern-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/turing-pattern-lab
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "Reaction-diffusion rendering runs on your device. Optional face, audio and motion controls need supported features and permissions. Downloading the face detection model uses a network connection."
---

## Overview

Adjust parameters such as Feed and Kill to observe reaction-diffusion patterns. Change colors and scale, then disturb the pattern through on-screen input.

## Key features

- Real-time rendering with parameter, color, and scale controls
- Touch drawing, randomized seeds, and play/pause
- PNG saving, local presets, and motion/audio/face input in supported environments

## Design and usage

Beyond manual controls, supported devices can use sensors, sound, or face movement as input. These inputs are optional and depend on browser capabilities and permissions.

## Technologies

React, TypeScript, and Canvas provide the app, with MediaPipe Face Landmarker for face input.
