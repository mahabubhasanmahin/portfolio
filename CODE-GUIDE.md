# Code guide / কোড বোঝার গাইড

The website uses HTML, CSS, and plain JavaScript. The design and content stay the same; source files now have readable lines and section comments.

## Find a section

Search the section ID in `index.html`. Its comment explains the purpose. Most personal content comes from `js/portfolio-data.js`.

| Section ID       | What it does                                 | Where to edit its content                       |
| ---------------- | -------------------------------------------- | ----------------------------------------------- |
| `home`           | Name, introduction, photo, main buttons      | `name`, `headline`, `intro`, `photo`, `resumes` |
| `about`          | Learning background and internship interests | `about`; interest tags are in HTML              |
| `projects`       | Screenshot cards, filters, GitHub/demo links | `projects`                                      |
| `skills`         | Groups of skills and tools                   | `skills`                                        |
| `practice`       | C++ practice summary and Codeforces link     | HTML; `socials.Codeforces`                      |
| `education`      | Education timeline                           | `education`                                     |
| `certifications` | Certificate cards and previews               | `certifications`                                |
| `resume`         | CV preview and downloads                     | `resumes`; file: `assets/cv/mahin_cv.pdf`       |
| `contact`        | Email, social links, location, hometown      | `email`, `socials`, `location`, `hometown`      |

The sidebar, header, quick links, and footer also have comments in HTML. Empty card containers are filled by JavaScript; they are not missing content.

## JavaScript files

| File                | Job                                                                            |
| ------------------- | ------------------------------------------------------------------------------ |
| `portfolio-data.js` | Editable personal content, project records, paths, and effect settings         |
| `main.js`           | Numbered sections 01–16: helpers, content, cards, filters, CV, themes, startup |
| `navigation.js`     | Mobile menu, active section, scrolling, browser history                        |
| `profile.js`        | Load the hero/sidebar photo; show a fallback on failure                        |
| `certificates.js`   | Build certificate cards and their actions                                      |
| `preview.js`        | Project/certificate image dialog                                               |
| `cv.js`             | PDF preview dialog and Open PDF fallback                                       |
| `i18n.js`           | Translation rows: English, Bangla, Japanese; language switching                |
| `effects.js`        | Optional hover, tilt, ripple, and background movement                          |

Keep project URLs and file paths unchanged when editing translations. Each project object has its own name, screenshot, description, technology list, and links. The array order is the display order.

## CSS files

- `css/style.css`: theme colors at the top; named layout sections in the middle; responsive rules at the bottom.
- `css/effects.css`: hover, background, reveal, and reduced-motion rules.

Change effect switches in `portfolio-data.js`. Set an option to `false` to turn it off.

## Read comments

Comments explain the code; they are not terminal commands.

```html
<!-- PROJECTS / প্রজেক্ট: the cards are filled by main.js. -->
```

```js
// CV / সিভি: use the configured PDF path and filename.
```

```css
/* Contact / যোগাযোগ: email and public location. */
```

A few short inline elements use `prettier-ignore` so a dot or colon stays attached to its label. Leave those markers in place.

## Format in VS Code

1. Install the recommended **Prettier — Code formatter** extension.
2. Open a source file and choose **Format Document** (`Shift + Alt + F`).
3. Save. The included VS Code settings also format supported files on save.

HTML/CSS/JavaScript use two-space indentation. Python uses four spaces. Prettier is a development tool; the website does not load it.

## Short commands

Run from the portfolio folder. The formatting commands need Node.js/npm; local preview needs Python.

```sh
# Preview the website
python3 -m http.server 8000
```

```sh
# Format supported source files
npx --yes prettier@3.8.1 --write .
```

```sh
# Check formatting without changing files
npx --yes prettier@3.8.1 --check .
```

```sh
# Check the diff
git diff --check
```

Open `http://localhost:8000`. Uploads under `assets/` are excluded from automatic formatting. The Python and XML files retain their own readable formatting.

Tests are under `tests/`; each test can be run as documented in `VALIDATION.md`. `scripts/stamp-release.py` updates cache versions before a release; it does not push or deploy. Publishing commands are in [README.md](README.md#commands).
