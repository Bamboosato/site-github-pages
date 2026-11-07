---
appId: 3d-rain-viewer
locale: en
title: "3D RainScape"
slug: 3d-rain-viewer
category: visual-experimental
description: "A map viewer that overlays JMA and JAXA rain data on 3D mountain terrain to explore Japan's 100 famous mountains and favorite locations."
updatedAt: "2026-11-07"
status: active
tags: ["React", "TypeScript", "Vite", "MapLibre GL JS", "WebGL2"]
featured: false
appUrl: https://3d-rain-viewer.bamboosato.com/
githubUrl: https://github.com/Bamboosato/3d-rain-viewer
access: open
usageFeatures: ["no-registration"]
usageNote: "Use the app in your browser without registration. Favorites are stored per browser and site origin; they are not automatically transferred from the old URL to the new one. Loading maps, terrain, and weather data requires requests to external services. The browser may request location permission at startup and when using the current-location button. Place and facility searches send the search term to GSI and OpenStreetMap services. Favorite-name suggestions send the selected coordinates to OpenStreetMap services. Shared URLs include location coordinates and, when specified, a place name."
---

## Overview

A map viewer that overlays Japan Meteorological Agency rain data and JAXA satellite precipitation data on mountain terrain. Choose one of Japan's 100 famous mountains or another location, then change the viewpoint and time to explore terrain and rainfall patterns.

## Key features

- A timeline combining the previous two hours of JMA observations with available forecast data
- JAXA GSMaP satellite precipitation for a 24-hour window ending at the latest time in its catalog
- Timeline playback, frame stepping, time selection, and 1x or 2x playback speed
- Three tabs for mountain presets, favorites, and place or facility search, with regional and prefectural filters for Japan's 100 famous mountains
- Keyword search for places and facilities, plus nearby name suggestions when saving favorites
- Share the current 3D viewpoint or a named location, and load a shared URL
- Favorites that save a location's name, coordinates, zoom, pitch, and bearing
- Elevation and rainfall inspection for map locations, plus a current-location control
- Terrain exaggeration, rain opacity, and standard map, shaded-relief, or aerial-imagery backgrounds

## Design and usage

The app is designed for visually comparing terrain and rainfall patterns. Map rendering uses WebGL2. The interface is mainly in Japanese.

Rainfall intensity derived from JMA tiles is a representative value for each color band, not a precise observation at the selected point. Check the displayed time and data coverage. The app does not guarantee weather accuracy or climbing safety.

Rain data for a shared time depends on the available data window; old links may not reproduce the same time.

PWA configuration and partial caching are included, but fresh weather data and uncached maps and terrain require an internet connection. Full offline use is not supported.

## Technologies

Built with React, TypeScript, Vite, and MapLibre GL JS. Terrain uses JAXA AW3D30, precipitation uses JMA and JAXA GSMaP, and background maps use OpenStreetMap, the Geospatial Information Authority of Japan, and Esri.
