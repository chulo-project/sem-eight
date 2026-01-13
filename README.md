# sem-eight (Exam Preparation Materials)

Hosted notes + solved questions for 8th Semester CSIT exam preparation.

Live site:
https://chulo-project.github.io/sem-eight/

## What’s inside

- **AD (CSC461)**: `./AD/`
- **GIS (CSC468)**: `./GIS/`
- **ICC (CSC467)**: `./ICC/`

Each subject folder contains:

- `Study-Guide.md` (table of contents / study plan)
- `chapters/` (unit-wise notes)
- `yearly-questions/` (board questions + solutions)
- `tu-provided/` and/or `students-asked/` (extra materials)

## Website vs GitHub README

- **Website homepage** is generated from `index.md` (so `/sem-eight/` serves an `index.html`).
- This `README.md` is intended for GitHub viewers (project overview + dev/deploy notes).

## Local development

If you want to preview the site locally:

1. Install Jekyll.
2. Run:

```bash
jekyll serve
```

Note:

- This repo uses `baseurl: /sem-eight`. Locally, open the site at:
  `http://127.0.0.1:4000/sem-eight/`

## Deployment

Deployment happens via GitHub Actions (`.github/workflows/deploy.yml`) using GitHub Pages.

Do not commit `_site/` (it’s generated during the Pages build).

## License

MIT

## Author

Asmin Bhattarai
