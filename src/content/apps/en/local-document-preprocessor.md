---
appId: local-document-preprocessor
locale: en
title: "Local Document Preprocessor"
slug: local-document-preprocessor
category: utilities
description: "Convert documents and JSON into Markdown or text inside the browser."
createdAt: "2026-08-06"
updatedAt: "2026-11-26"
status: active
tags: ["React","TypeScript","WebAssembly","PDFium"]
featured: true
appUrl: https://local-document-preprocessor.vercel.app/
githubUrl: https://github.com/Bamboosato/local-document-preprocessor
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "In normal web use, selected documents, JSON, and conversion results are processed in your browser. The initial load requires a network connection. Offline use is available after the app has loaded and required static assets have finished caching. Inputs and results are not stored and are cleared when you reload or close the tab. Optional Windows Local MCP integration requires separate setup and supports explicit save requests to an already connected Markdown Knowledge Board."
heroImage:
  src: /apps/local-document-preprocessor/hero.webp
  alt: "Concept illustration of converting headings, text, and a list from a fictional DOCX preparation note into Markdown and plain text."
  width: 1600
  height: 900
---

## Overview

Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and text-based PDFs into Markdown or plain text for further work.

## Key features

- Queued document processing with per-file settings
- PDF page, slide, and sheet selection
- Markdown/text downloads and document metadata
- Convert an entire JSON document or one selected array or object into item tables, list tables, or Mermaid text

## Design and usage

Convert just the direct elements you select from a JSON array. Tables and Mermaid diagrams preserve their original order and array positions. Choose a top-down (default) or left-to-right Mermaid layout; the selected direction is retained in Markdown and plain-text output.

JSON is parsed in the browser and exported as Markdown or plain text. The offline cache stores static app assets, not input documents or conversion results. Input size, depth, node count, and output-format limits apply.

In normal web use, documents are processed in the browser without persistent document storage. PDF output is checked against an independent extraction path. OCR and PII masking are outside its scope, and image-only scanned PDFs are unsupported. Review converted output before use.

## Use a local Windows agent

After setting up the optional Local MCP integration, an agent on the same Windows PC can convert selected documents to Markdown. For example, convert selected pages of a text-based PDF into a new note with quality annotations. OCR is outside its scope.

To explicitly request a save to Markdown Knowledge Board, first open MKB on the same PC and connect Local MCP in your usual browser profile. LDP does not connect MKB automatically. Setup requires Node.js 24 and locally built assets, among other prerequisites. Download the setup and registration guide as Markdown from the [About page](https://ldp.bamboosato.com/?page=about).

PWA updates reuse previously downloaded static files when they match the new version's verification requirements. This does not cache input documents or conversion results, and does not guarantee update speed or network savings.

## Technologies

React, TypeScript, anydoc WebAssembly, and PDFium support document processing in Workers.
