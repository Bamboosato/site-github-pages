---
appId: local-pii-masker
locale: en
title: "Local PII Masker"
slug: local-pii-masker
category: utilities
description: "Review potential personal information in Japanese text and mask it in the browser."
createdAt: "2026-07-10"
updatedAt: "2026-08-13"
status: active
tags: ["React","TypeScript","CodeMirror","ONNX"]
featured: false
appUrl: https://local-pii-masker.vercel.app/
githubUrl: https://github.com/Bamboosato/local-pii-masker
---

## Overview

Detect potential personal information in Japanese text, then review candidates before masking or restoring them. Edit the original text and handle repeated occurrences of a string together.

## Key features

- Candidate detection with manual review and adjustment
- Masking/restoration with longer matches taking priority
- Explicit local saving of an encrypted mapping

## Design and usage

Processing normally stays in memory; explicit saving covers the mapping rather than the original text session. Desktop Chrome on Windows and macOS is the primary target. Automated detection may miss personal information, so human review remains part of the workflow.

## Technologies

React, TypeScript, CodeMirror, and Transformers.js/ONNX support the tool; OPFS stores saved mappings.
