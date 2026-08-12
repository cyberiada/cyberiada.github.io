# Cyberiad Lab

[Cyberiad Lab](https://cyberiada.github.io/) is a research group working at the intersection of computer vision, machine learning, natural language processing, and computer graphics. We develop AI systems that can understand, reason about, and create visual content, with particular emphasis on controllable generative models, multimodal reasoning, structured video representations, and immersive visual intelligence.

This repository contains the source of the lab’s public website. It brings together our research directions, publications, project pages, team, alumni, opportunities, news, and institutional information in a single maintainable site.

## Research areas

Our work is organized around four complementary themes:

- **Generative modeling** — controllable image and video generation, editing, diffusion models, motion planning, and neural scene representations.
- **Multimodal reasoning** — vision–language grounding, compositional generalization, temporal understanding, and diagnostic evaluation of multimodal systems.
- **Structured video representations** — continuous and efficient representations for motion, reconstruction, interpolation, resampling, and editing.
- **Spherical visual intelligence** — geometry-aware 360° perception, visual attention, eye tracking, and spatial-audio understanding.

Each area has a dedicated overview page connected to relevant Cyberiad publications and project websites.

## Website structure

The site is built with [Jekyll](https://jekyllrb.com/) and deployed through GitHub Pages. Content, presentation, and reusable components are intentionally separated so that routine updates do not require editing page templates.

| Location | Purpose |
| --- | --- |
| `_data/` | Structured publications, people, alumni, navigation, research areas, and project-page records |
| `_includes/` | Reusable member, publication, research-card, metadata, navigation, and footer components |
| `_layouts/` | Page-level layouts for the home, team, publications, research, and text pages |
| `_pages/` | Public page content and research-area descriptions |
| `_sass/` and `css/` | Design system and page-specific responsive styles |
| `images/` | Team portraits, publication thumbnails, research figures, logos, and social-preview assets |
| `js/` | Client-side enhancements such as publication filtering |
| `scripts/` | Deterministic content and link validation scripts |
| `.github/workflows/` | Automated build, HTML, link, image, and accessibility checks |

## Updating website content

Most updates should be made through the structured files in `_data/`:

- Add or edit publications in `_data/publist.yml`.
- Update active students in `_data/students.yml`.
- Update principal investigators in `_data/team_members.yml`.
- Add former students to `_data/alumni.yml`.
- Edit research overview cards in `_data/research_areas.yml`.
- Register preserved project-page directories in `_data/project_pages.yml`.
- Update primary navigation in `_data/navigation.yml`.

Publication images belong in `images/pubpic/`, team portraits in `images/teampic/`, and research figures in `images/research/`. Please use descriptive filenames, optimized web formats, and meaningful alternative text where an image conveys information.

### Linking a Cyberiad project page

Project websites are hosted as directories in the same GitHub Pages repository. Publications should reference them with `project_slug` rather than repeating the full domain:

```yaml
- title: "Example publication"
  project_slug: ExampleProject
```

The slug must also appear in `_data/project_pages.yml`. At build time, it resolves to:

```text
https://cyberiada.github.io/ExampleProject/
```

External project websites can continue to use a complete `project` URL.

## Local development

### Requirements

- Ruby and Bundler
- Node.js and npm

Install the dependencies and start the development server:

```sh
bundle install
npm install
bundle exec jekyll serve
```

The site will be available at [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

Jekyll does not automatically reload `_config.yml`. Restart the server after changing site-level configuration.

## Quality assurance

Every push and pull request to `main` or `gh-pages` runs the **Site quality** workflow. It checks:

- Jekyll production build
- Required publication images
- Registered Cyberiad project-page folders
- Internal links, fragments, scripts, and assets
- Generated HTML structure
- WCAG 2 AA accessibility across all public page types

Run the deterministic checks locally with:

```sh
ruby scripts/check_publication_images.rb
ruby scripts/check_project_pages.rb
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,.github/jekyll-ci.yml
bundle exec ruby scripts/check_internal_links.rb _site
bundle exec htmlproofer ./_site --disable-external --no-enforce-https
npm run check:html
```

The accessibility suite expects the local Jekyll server to be running on port 4000:

```sh
npm run check:accessibility
```

## Contribution workflow

This repository is shared by multiple collaborators. Please use a review branch and pull request for all non-trivial changes:

1. Create a focused branch from the latest `main`.
2. Keep content updates and structural refactors in separate commits where practical.
3. Run the local checks relevant to the change.
4. Open a pull request describing the motivation, visible effects, and any migration considerations.
5. Merge only after automated checks pass and the rendered pages have been reviewed.

Avoid force-pushing shared branches or rewriting repository history. Existing project directories—including `LAMP`, `ViLMA`, `GaussianVideo`, `SalViT360-AV`, and other publication websites—are independent research artifacts and must be preserved.

## Deployment

The production site targets the root GitHub Pages domain:

```text
https://cyberiada.github.io/
```

The repository also hosts standalone project pages under paths such as:

```text
https://cyberiada.github.io/LAMP/
https://cyberiada.github.io/ViLMA/
https://cyberiada.github.io/GaussianVideo/
```

When integrating a new site version, merge the Jekyll source alongside these directories—do not replace the repository contents wholesale. After a domain or metadata change, verify canonical URLs, the generated sitemap, social previews, and Google Search Console ownership.

## Contact

For research and collaboration inquiries, see the contact information on the [Cyberiad Lab website](https://cyberiada.github.io/) or contact the principal investigators through their institutional profiles.
