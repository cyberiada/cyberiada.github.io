---
title: "Cyberiad Lab - Home"
layout: homelay
excerpt: "Visual intelligence research at Koç University and Hacettepe University."
permalink: /
---

<section markdown="0" class="home-hero">
  <p class="home-hero__eyebrow">Cyberiad Research Group</p>
  <h1>Teaching machines to see, imagine, and reason about the visual world.</h1>
  <p class="home-hero__lead">We develop generative and multimodal AI systems that understand, create, and edit images and video—bringing together computer vision, machine learning, graphics, language, and signal processing.</p>
  <div class="home-hero__actions">
    <a class="home-button home-button--primary" href="{{ '/research/' | relative_url }}">Explore our research</a>
    <a class="home-button home-button--secondary" href="{{ '/vacancies' | relative_url }}">Join the lab</a>
  </div>
  <p class="home-hero__affiliation">Based at Koç University and Hacettepe University · Affiliated with KUIS AI</p>
</section>

<section markdown="0" class="home-section" aria-labelledby="research-themes-title">
  <div class="home-section__heading">
    <div>
      <p class="home-section__eyebrow">What we study</p>
      <h2 id="research-themes-title">Research themes</h2>
    </div>
  </div>
  <div class="home-theme-grid">
    <a class="home-theme-card" href="{{ '/research/generative-modeling/' | relative_url }}">
      <span class="home-theme-card__number">01</span>
      <h3>Generative visual intelligence</h3>
      <p>Controllable image and video creation, editing, motion planning, and neural scene representations.</p>
      <span class="home-theme-card__arrow" aria-hidden="true">↗</span>
    </a>
    <a class="home-theme-card" href="{{ '/research/multimodal-reasoning/' | relative_url }}">
      <span class="home-theme-card__number">02</span>
      <h3>Multimodal reasoning</h3>
      <p>Vision-language models, compositional generalization, temporal grounding, and behavioral evaluation.</p>
      <span class="home-theme-card__arrow" aria-hidden="true">↗</span>
    </a>
    <a class="home-theme-card" href="{{ '/research/structured-video/' | relative_url }}">
      <span class="home-theme-card__number">03</span>
      <h3>Structured video</h3>
      <p>Continuous, compact representations for coherent motion, reconstruction, resampling, and editing.</p>
      <span class="home-theme-card__arrow" aria-hidden="true">↗</span>
    </a>
    <a class="home-theme-card" href="{{ '/research/spherical-vision/' | relative_url }}">
      <span class="home-theme-card__number">04</span>
      <h3>Spherical visual intelligence</h3>
      <p>Geometry-aware 360° perception, visual attention, eye tracking, and spatial audio.</p>
      <span class="home-theme-card__arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

<section markdown="0" class="home-section" aria-labelledby="featured-work-title">
  <div class="home-section__heading">
    <div>
      <p class="home-section__eyebrow">Latest work</p>
      <h2 id="featured-work-title">Featured research</h2>
    </div>
    <a href="{{ '/publications/' | relative_url }}">View all publications →</a>
  </div>

  <div class="home-featured-grid">
    {% for publi in site.data.publist limit:3 %}
    {% include publication-card.html publication=publi variant="featured" %}
    {% endfor %}
  </div>
</section>

<section markdown="0" class="home-people" aria-labelledby="home-people-title">
  <div class="home-people__copy">
    <p class="home-section__eyebrow">Our group</p>
    <h2 id="home-people-title">Research across institutions and disciplines</h2>
    <p>Cyberiad brings together researchers in computer vision, machine learning, graphics, language, and signal processing at Koç University and Hacettepe University.</p>
    <a href="{{ '/team/' | relative_url }}">Meet the team →</a>
  </div>
  <div class="home-people__pis">
    {% for member in site.data.team_members %}{% if member.role == "pi" %}
    <a class="home-person" href="{{ member.website }}" target="_blank" rel="noopener">
      <img src="{{ '/images/teampic/' | append: member.photo | relative_url }}" alt="Portrait of {{ member.name }}">
      <span><strong>{{ member.name }}</strong><small>{{ member.info }}</small></span>
    </a>
    {% endif %}{% endfor %}
  </div>
</section>

<section markdown="0" class="home-join" aria-labelledby="home-join-title">
  <div>
    <p class="home-section__eyebrow">Work with us</p>
    <h2 id="home-join-title">Help shape the next generation of AI.</h2>
    <p>We welcome ambitious MSc and PhD students, postdoctoral researchers, research assistants, and visiting students.</p>
  </div>
  <a class="home-button home-button--primary" href="{{ '/vacancies' | relative_url }}">Explore opportunities</a>
</section>

<figure class="home-affiliation-logos">
  <img class="home-affiliations__logo" src="{{ '/images/logopic/koc_logo2.png' | relative_url }}" alt="Koç University">
  <img class="home-affiliations__logo" src="{{ '/images/logopic/hacettepe_university_logo.svg' | relative_url }}" alt="Hacettepe University">
</figure>
