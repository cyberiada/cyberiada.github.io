---
title: "Generative Modeling for Controllable Visual Media"
short_title: "Generative modeling"
layout: research_area
permalink: /research/generative-modeling/
excerpt: "Controllable diffusion, image editing, and video generation research at Cyberiad Lab."
lead: "We build generative systems that turn human intent into editable images, coherent videos, and explicit motion—without sacrificing visual quality."
figure: /images/research/diffusion-forward.webp
figure_width: 520
figure_height: 184
figure_alt: "Animation showing an image becoming progressively noisier during the forward diffusion process."
figure_label: "Forward process · perturbation"
figure_secondary: /images/research/diffusion-denoising.webp
figure_secondary_width: 520
figure_secondary_height: 183
figure_secondary_alt: "Animation showing the reverse diffusion process recovering a structured image from noise."
figure_secondary_label: "Reverse process · denoising"
figure_caption: "Diffusion models learn to reverse a stochastic perturbation process: structure is gradually destroyed in the forward direction and recovered through iterative denoising during generation."
figure_credit_url: https://aaronlou.com/blog/2024/reflected-diffusion/
figure_animated: true
figure_kind: animation
publication_titles:
  - "LAMP: Language-Assisted Motion Planning for Controllable Video Generation"
  - "GaussianVideo: Efficient Video Representation via Hierarchical Gaussian Splatting"
  - "CLIPAway: Harmonizing Focused Embeddings for Removing Objects via Diffusion Models"
  - "HyperGAN-CLIP: A Unified Framework for Domain Adaptation, Image Synthesis and Manipulation"
---

## What we study

Generative models are most useful when people can direct them precisely. Our work connects high-level instructions—language, style, layout, camera intent, or object motion—to representations that a model can execute and revise.

We study diffusion models, generative adversarial networks, transformers, hypernetworks, neural ordinary differential equations, and Gaussian representations. Across these families, the central question stays the same: **how can generation become controllable, compositional, and temporally consistent?**

## Current questions

- How can natural language specify camera movement and object trajectories?
- How can image edits preserve everything outside the intended change?
- How can video models separate appearance, motion, geometry, and style?
- How can constraints from physics and cinematography guide generation?
- How can high-quality generation become faster and more memory-efficient?

## Our approach

We expose structure rather than hiding every decision inside a single latent vector. LAMP, for example, translates cinematic language into symbolic motion programs and explicit 3D trajectories. CLIPAway uses focused semantic embeddings to localize an edit. GaussianVideo represents dynamic content with moving Gaussians whose trajectories remain continuous through time.

This combination of learned generation and interpretable intermediate representations makes systems easier to steer, inspect, and reuse.
