---
title: "Spherical and Audio-Visual Intelligence"
short_title: "Spherical vision"
layout: research_area
permalink: /research/spherical-vision/
excerpt: "Geometry-aware 360-degree vision, spatial audio, and visual attention research at Cyberiad Lab."
lead: "We study how people and machines attend to immersive 360° scenes, combining spherical geometry, temporal context, and spatial audio."
figure: /images/research/spherical-audio-fixations.png
figure_width: 1320
figure_height: 550
figure_alt: "Three 360-degree scenes comparing the video frame, spatial audio energy, and viewer fixation density under ambisonic, mono, and muted audio."
figure_caption: "Viewer fixation density changes with the audio condition. Across concert, driving, and conversation scenes, ambisonic spatial audio concentrates attention differently from mono or muted viewing. Figure from the Spherical Vision Transformers paper."
figure_contain: true
figure_kind: panorama
publication_titles:
  - "Spherical Vision Transformers for Audio-Visual Saliency Prediction in 360-Degree Videos"
  - "Spatio-Temporal Saliency Networks for Dynamic Saliency Prediction"
  - "Visual saliency estimation by nonlinearly integrating features using region covariances"
---

## What we study

Omnidirectional video surrounds the viewer, so planar assumptions no longer hold. The same scene is distorted differently across an equirectangular projection, attention unfolds across viewports and time, and spatial sound can pull a viewer toward events outside the current field of view.

We study geometry-aware learning, visual attention, eye tracking, temporal saliency, and audio-visual fusion for immersive media.

## Current questions

- How should transformers account for spherical geometry and projection distortion?
- How does spatial audio change visual attention in 360° environments?
- Which temporal context is most useful for predicting gaze?
- How can viewport-level predictions remain consistent on the sphere?
- Which datasets and protocols best reflect natural immersive viewing?

## Our approach

SalViT360 divides an omnidirectional scene into tangent viewports and introduces spherical position information with spatio-temporal attention. Its audio-visual extension aligns spatial sound with visual features. The accompanying YT360-EyeTracking dataset measures gaze under mute, mono, and ambisonic audio conditions, making it possible to study how sound actively guides visual attention.

The work links machine perception with human vision and supports downstream applications such as immersive video quality assessment and adaptive streaming.
