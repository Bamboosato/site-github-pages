---
appId: "3d-visit-record"
locale: "en"
title: "3D Visit Record"
slug: "3d-visit-record"
category: "utilities"
description: "Log places you’ve visited or plan to visit on a 3D terrain map. Attach photos to completed visits."
updatedAt: "2026-11-23"
status: "active"
tags: ["React", "TypeScript", "MapLibre GL JS", "IndexedDB"]
featured: false
appUrl: "https://3d-visit-record.bamboosato.com/"
githubUrl: "https://github.com/Bamboosato/3d-visit-record"
access: "open"
usageFeatures: ["no-registration"]
usageNote: "No registration is required for everyday use. Records and photos are stored in IndexedDB in the current browser. Optional Google Drive integration requires Google sign-in and a network connection, with backup and restore initiated by you. Loading maps and terrain and searching external place-name and facility services also use the network. Storage is separate for each browser and origin; records are not automatically shared between the custom domain and the separate vercel.app URL. Photo metadata is extracted locally, but when looking up place candidates for a photo, the app may query external map or place services with a photo-derived location before saving."
---

## Overview

Record places you have visited or plan to visit on a 3D terrain map, then look back through dates or date ranges and notes together. You can also attach photos to completed visits. Use it to keep travel and walking memories and organize places you want to visit next.

## Key features

- Manage visited places and planned visits on the map
- Nearby pins are grouped with a count when zoomed out; tap a group to zoom in.
- Create a visit from a photo: Use capture dates and location metadata in JPEG and WebP photos to suggest adding a visit to a nearby saved place or creating a new place. Review before saving. If no location metadata is available, choose a place on the map.
- Add multiple visit records or plans to the same place, with dates, date ranges, and notes
- Attach photos to completed visit records and revisit them through thumbnails or an enlarged view on the detail screen
- Change a planned visit to a completed visit and add the date and your impressions
- Share a map viewpoint through a link

## Design and usage

Records are normally stored in the browser's IndexedDB. The app includes manual backup to and restore from your own Google Drive when needed. Changes are not continuously synchronized in the background. Local JSON exports do not include the photo files themselves.

A map viewpoint link includes coordinates, camera settings such as zoom, tilt, and bearing, and an optional place name. It does not include recorded dates, date ranges, notes, or photos, so it does not share the visit records themselves.

## Technologies

Built with React, TypeScript, MapLibre GL JS, and IndexedDB.
