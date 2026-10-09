---
appId: face-icon-maker
locale: en
title: "Face Icon Maker"
slug: face-icon-maker
category: visual-experimental
description: "Select a face from a photo and turn it into an icon with styles and animal effects."
createdAt: "2026-06-21"
updatedAt: "2026-09-07"
status: active
tags: ["React","TypeScript","MediaPipe","Canvas"]
featured: false
appUrl: https://face-icon-maker.vercel.app/
githubUrl: https://github.com/Bamboosato/face-icon-maker
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "Photos are processed on your device. The first use of features such as face detection or background removal needs a network connection to download models and runtime files."
heroImage:
  src: /apps/face-icon-maker/hero.webp
  alt: "Concept illustration of selecting one face from a fictional group and cropping it into a circular 512-by-512 PNG icon."
  width: 1600
  height: 900
---

## Overview

Detect faces in JPEG or PNG photos and turn a selected face into an icon. Choose a person from a group photo, then adjust cropping, backgrounds, and styles.

## Key features

- Face detection and selection with square or circular crops
- Pixel, comic, and paint styles, plus animal face effects
- Transparent or solid backgrounds and 512×512 PNG saving/sharing

## Design and usage

Optional 4× super-resolution can enhance the source image. Model loading and sharing depend on the environment and browser support.

## Technologies

React, TypeScript, MediaPipe, and Canvas work alongside a LiteRT super-resolution model.
