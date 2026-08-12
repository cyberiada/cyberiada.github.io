---
title: "Structured Video Representations"
short_title: "Structured video"
layout: research_area
permalink: /research/structured-video/
excerpt: "Continuous, efficient, and editable video representations at Cyberiad Lab."
lead: "We represent videos as evolving structure—not just stacks of pixels—to make motion coherent, compact, and directly editable."
figure: /images/research/gaussian-video-motion.png
figure_width: 1687
figure_height: 615
figure_alt: "GaussianVideo illustration showing coherent Gaussian trajectories across successive video frames."
figure_caption: "GaussianVideo models coherent motion in the underlying Gaussians, enabling continuous and efficient video reconstruction. Figure adapted from the authors’ paper."
figure_contain: true
figure_kind: panorama
publication_titles:
  - "GaussianVideo: Efficient Video Representation via Hierarchical Gaussian Splatting"
  - "VidStyleODE: Disentangled Video Editing via StyleGAN and NeuralODEs"
  - "SLAMP: Stochastic Latent Appearance and Motion Prediction"
---

## What we study

Conventional video models repeatedly encode dense frames. We ask whether a scene can instead be described through persistent elements, smooth trajectories, and continuous functions of time. These representations can reduce redundancy while exposing useful controls for interpolation, resampling, editing, and style transfer.

## Current questions

- Which scene elements should persist across time?
- How can continuous motion be learned without dense optical-flow supervision?
- How should appearance and motion be disentangled?
- Can one representation support reconstruction, interpolation, resampling, and editing?
- How can hierarchical learning capture both large motion and fine detail efficiently?

## Our approach

GaussianVideo combines a Gaussian scene representation with continuous camera and object motion. Spatial and temporal hierarchies progressively refine the representation, while neural differential equations model smooth evolution. Earlier work such as VidStyleODE and SLAMP likewise separates the factors of a video so that they can be modeled and manipulated independently.

This direction connects computer vision, graphics, dynamical systems, and generative modeling.
