---
title: "Multimodal Learning and Reasoning"
short_title: "Multimodal reasoning"
layout: research_area
permalink: /research/multimodal-reasoning/
excerpt: "Vision-language learning, compositional generalization, grounding, and multimodal evaluation at Cyberiad Lab."
lead: "We investigate whether models can connect vision and language beyond surface correlations—grounding concepts in time, composing known ideas, and explaining what they observe."
figure: /images/research/vilma-overview.png
figure_width: 1600
figure_height: 900
figure_alt: "ViLMA benchmark overview showing video frames of paper being folded, followed by a basic proficiency test and a harder temporal change-of-state test."
figure_caption: "ViLMA evaluates video–language models in two stages: a proficiency test first confirms the prerequisite concept, then a controlled main test probes deeper temporal understanding. Figure from the ViLMA paper."
figure_kind: diagram
publication_titles:
  - "Sequential Compositional Generalization in Multimodal Models"
  - "ViLMA: A Zero-Shot Benchmark for Linguistic and Temporal Grounding in Video-Language Models"
  - "Harnessing Dataset Cartography for Improved Compositional Generalization in Transformers"
  - "Procedural Reasoning Networks for Understanding Multimodal Procedures"
---

## What we study

Multimodal systems should do more than associate captions with pictures. We study models that must identify entities and events, track their relationships, connect language to the right moment in a video, and recombine familiar concepts in unfamiliar sequences.

Our research spans vision–language learning, multilingual representation learning, video–language grounding, procedural understanding, and behavioral evaluation of foundation models.

## Current questions

- Can a model solve a new composition after learning its individual parts?
- Does a video–language model distinguish actions, roles, and event order?
- Which examples teach robust concepts, and which encourage shortcuts?
- How should multimodal reasoning be evaluated across languages and cultures?
- Can benchmarks reveal *why* a model succeeds or fails?

## Our approach

We pair new models with diagnostic datasets and targeted evaluation. CompAct isolates sequential compositional generalization; ViLMA probes linguistic and temporal grounding with controlled contrasts; dataset cartography reveals how training examples shape generalization.

The goal is measurable reasoning: systems whose behavior can be tested with specific hypotheses rather than summarized by a single aggregate score.
