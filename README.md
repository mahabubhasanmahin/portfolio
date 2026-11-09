# Mahin Portfolio

**Md. Mahabub Hasan Mahin** — final-semester CSE student, Green University of Bangladesh.

Kanchan, Narayanganj, Bangladesh · Hometown: Rangpur · Seeking an internship.

[Website](https://mahabubhasanmahin.github.io/portfolio/) · [Email](mailto:mahabubhasanmahin231@gmail.com) · [GitHub](https://github.com/mahabubhasanmahin)

HTML, CSS, and JavaScript. No build step required.

Choose English, বাংলা, or 日本語 to change the website text. Brand/technology names and code keep their standard spelling. Uploaded PDFs and text inside screenshots are original documents, not automatic translations.

[Code guide / কোড বোঝার গাইড](CODE-GUIDE.md) — section comments, file roles, and VS Code formatting.

## Edit files

| Update                                                      | File                               |
| ----------------------------------------------------------- | ---------------------------------- |
| Personal details, projects, skills, education, certificates | `js/portfolio-data.js`             |
| Page structure and SEO                                      | `index.html`                       |
| English, Bengali, Japanese text                             | `js/i18n.js`                       |
| Colors and layout                                           | `css/style.css`                    |
| Animations                                                  | `css/effects.css`, `js/effects.js` |
| Profile photo                                               | `assets/images/profile.png`        |
| CV preview and download                                     | `assets/cv/mahin_cv.pdf`           |

Replace the CV with a real PDF using the same filename. Both download buttons save it as **mahin_cv.pdf**. Add projects or certificates to their lists in the data file; cards appear automatically. Keep skill levels and project notes accurate.

## Commands

Run locally from this folder:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. VS Code Live Server also works.

Format source files or check their formatting:

```sh
npx --yes prettier@3.8.1 --write .
npx --yes prettier@3.8.1 --check .
```

Prepare matching cache versions before an approved release:

```sh
python3 scripts/stamp-release.py YOUR_RELEASE_ID
git diff --check
git status
```

Publish only when approved:

```sh
git add <changed-files>
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages: **Settings → Pages → main → / (root)**. No build command. Keep relative asset paths and `.nojekyll`.

[Upload guide](assets/UPLOAD-GUIDE.md) · [Current update report](INTERNSHIP-UPDATE.md) · [Earlier audit](AUDIT.md)
