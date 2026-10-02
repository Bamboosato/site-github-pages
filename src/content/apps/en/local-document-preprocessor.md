---
appId: local-document-preprocessor
locale: en
title: "Local Document Preprocessor"
slug: local-document-preprocessor
category: utilities
description: "Convert document files into Markdown or text inside the browser."
createdAt: "2026-08-06"
updatedAt: "2026-08-14"
status: active
tags: ["React","TypeScript","WebAssembly","PDFium"]
featured: true
appUrl: https://local-document-preprocessor.vercel.app/
githubUrl: https://github.com/Bamboosato/local-document-preprocessor
---

## Overview

Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and text-based PDFs into Markdown or plain text for further work.

## Key features

- Queued document processing with per-file settings
- PDF page, slide, and sheet selection
- Markdown/text downloads and document metadata

## Design and usage

Documents are processed in the browser without persistent document storage. PDF output is checked against an independent extraction path. OCR and PII masking are outside its scope, and image-only scanned PDFs are unsupported. Review converted output before use.

## Technologies

React, TypeScript, anydoc WebAssembly, and PDFium support document processing in Workers.
