# Mahin Portfolio

Personal website of **Md. Mahabub Hasan Mahin**, a CSE student at Green University of Bangladesh. I live in Dhaka. My hometown is Rangpur, Bangladesh.

**[Visit my portfolio](https://mahabubhasanmahin.github.io/portfolio/)**

Built with HTML, CSS, and JavaScript. No build step, framework, or backend is needed.

## Included

- Eleven class and personal projects, with three featured projects.
- Project screenshots, source links, four supplied demo links, and editable project notes.
- Skills, education, three certificates, CV preview and download, and contact links.
- Midnight Glass design, light theme, and English, Bengali, and Japanese.
- Mobile menu, keyboard navigation, image previews, and optional motion effects.

## Run locally

Open this folder in VS Code and run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. VS Code Live Server also works. Use a server rather than opening the HTML file directly; browser modules need HTTP.

## Edit content

| Change | File |
| --- | --- |
| Name, introduction, contact, photo, projects, skills, education, certificates, CV | `js/portfolio-data.js` |
| Page structure, SEO title, description, social tags, structured data | `index.html` |
| English, Bengali, Japanese translations | `js/i18n.js` |
| Colors, typography, spacing, responsive layout | `css/style.css` |
| Hover, reveal, grid, and glow | `css/effects.css` |
| Tilt, background movement, button effects | `js/effects.js` |
| Menu and active section indicator | `js/navigation.js` |
| CV preview | `js/cv.js` |
| Certificate cards / image preview | `js/certificates.js` / `js/preview.js` |

**Photo:** replace `assets/images/profile.png` with a real PNG. The hero and menu share it. Square headshots show the whole image; tall photos use cover fitting. Keep the face inside the photo. A transparent background works. To use another filename, change `photo` in the data file and both initial image sources in `index.html`. Renaming a JPG extension does not convert it to PNG.

**Projects:** add an object to `projects`. Use `featured: true` for the first group, and `demo: null` when there is no live site. Upload a screenshot and put its relative path in `image`. Each project has editable `description`, `work`, `learning`, `stack`, and `repo`. The current work notes describe features; they do not establish individual or team roles. Replace them with your specific contribution when confirmed.

**Skills and research:** edit the skill groups honestly. Keep basic and project-based labels where appropriate. `currentFocus` records work on a research paper; no publication or result is claimed.

**Certificates:** add records to `certifications`. New cards appear automatically: three columns on desktop, two on tablets, one on phones, with more rows as needed. Use a real certificate image. There are no invented verification codes.

**CV:** export your updated document as **`resume.pdf`** and replace `assets/cv/resume.pdf`. Both preview and download use `resumes[].path`. Mobile browsers may need the preview's **Open PDF** link.

**Colors:** edit the variables at the start of `css/style.css`. Light-theme overrides follow the dark defaults. **Motion:** edit the `effects` options in the data file; set an option to `false` to disable it. `tiltDegrees` changes tilt strength. Shared hover duration is `--motion`. Effects respect reduced motion and pointer type.

**Contact:** email opens the visitor's mail app. There is no contact form or submission server. Add a real form service only if you intend to configure and test it.

See [the upload guide](assets/UPLOAD-GUIDE.md) for asset paths.

## Publish with GitHub Pages

In GitHub, choose **Settings → Pages → Deploy from a branch → main → / (root)**. This is a static site; no build command is needed. Keep `.nojekyll`.

Before a release, update the cache version and push the files you changed:

```sh
python3 scripts/stamp-release.py YOUR_RELEASE_ID
git status
git add <files-you-changed>
git commit -m "Update portfolio"
git push origin main
```

Check the Pages deployment in GitHub Actions, then refresh the site. Section URLs such as `/portfolio/#projects` work without server rewrites. Keep asset paths relative. If the site address changes, update `index.html` and `sitemap.xml`. Revert a commit to undo a release; avoid force-pushing shared history.

## Checks

See [AUDIT.md](AUDIT.md) for actual fixes, tests, and limits. Browser tests are development tools, not website dependencies:

```sh
npm install --prefix /tmp/portfolio-test-tools playwright
NODE_PATH=/tmp/portfolio-test-tools/node_modules CHROMIUM_PATH=/usr/bin/chromium TEST_URL=http://localhost:8000/ node tests/smoke.cjs
```

Use your installed Chromium path. Other integration checks are in `tests/`. To test the deployment prefix, serve the parent folder and set `TEST_URL=http://localhost:8000/portfolio/`.

## Google search

Submit the website and `sitemap.xml` in [Google Search Console](https://search.google.com/search-console/), verify ownership, and request indexing. Google controls indexing and search position; metadata cannot guarantee ranking.

[Email](mailto:mahabubhasanmahin231@gmail.com) · [GitHub](https://github.com/mahabubhasanmahin) · [LinkedIn](https://linkedin.com/in/md-mahabub-hasan-mahin-54908229a)
