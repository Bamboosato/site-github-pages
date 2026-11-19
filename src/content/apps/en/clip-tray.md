---
appId: "clip-tray"
locale: "en"
title: "ClipTray"
slug: "clip-tray"
category: "utilities"
description: "Temporarily store screenshots and reference images, organize them into groups, and reuse them with text extraction and simple editing."
updatedAt: "2026-11-19"
status: "active"
tags: ["React","TypeScript","IndexedDB","Tesseract.js","PWA"]
featured: false
appUrl: "https://clip-tray.bamboosato.com/"
githubUrl: "https://github.com/Bamboosato/clip-tray"
access: "open"
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "Designed for desktop browsers on Windows and macOS. No registration is required; images, notes, and extracted text are stored in the current browser without cloud sync. Initial loading and OCR resource downloads require a network connection. Image copying and PWA installation depend on browser support. Retention defaults to seven days; expired unpinned images are removed when the app starts or while it is running. Save important images elsewhere."
---

## Overview

Import screenshots and reference images by pasting, dropping files, or choosing files, then organize them into groups for reuse. Images are optimized in the browser and can be searched through notes and extracted text.

## Key features

- Create and reorder groups, move images, pin items, and search notes
- Japanese and English OCR plus barcode and QR-code reading, with review, editing, and copying of extracted text
- Zoomable previews, copying as PNG, and image downloads
- Crop images and add rectangles, arrows, mosaic blocks, or text; copy edits, save a new image, or overwrite the stored image
- Choose 24-hour, three-day, seven-day, 30-day, or unlimited retention and clear unpinned images in bulk

## Design and usage

Image processing and storage run in the browser. Automatic OCR is enabled by default and can be switched to manual operation. Review recognition results before using them.

Pinning excludes images from expiry cleanup and the clear-unpinned action; it does not prevent individual deletion or deletion of an entire group. Imported images may be resized and compressed, so keep originals separately.

The app includes PWA installation and update notifications. Offline use depends on obtaining and caching the app assets and required OCR resources.

## Technologies

Built with React, TypeScript, Vite, IndexedDB/Dexie, Canvas, Tesseract.js, and ZXing WASM.
