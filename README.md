# Mahin Portfolio

Personal portfolio of **Md. Mahabub Hasan Mahin**, a CSE student at Green University of Bangladesh. I live in Dhaka, and my hometown is Rangpur, Bangladesh.

**[View the website](https://mahabubhasanmahin.github.io/portfolio/)**

Built with HTML, CSS, and JavaScript. No build step or backend is needed.

## What is included

- About me, skills, education, and contact links.
- Eleven projects with GitHub links and four live demos.
- Certificate cards with image previews and downloads.
- CV download, dark/light themes, and English, Bengali, and Japanese.
- Mobile-friendly layouts, keyboard support, and optional hover effects.

## Run locally

Open this folder in VS Code. In the terminal, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Use the existing checkout in cloud tasks; no extra Git worktree is needed. VS Code Live Server also works. Do not open `index.html` directly, because the JavaScript modules need a local server.

## Edit the website

| What to change | File |
| --- | --- |
| Personal details, skills, projects, certificates, and image paths | `js/portfolio-data.js` |
| Section order, page title, and search details | `index.html` |
| English, Bengali, and Japanese text | `js/i18n.js` |
| Main colors, text sizes, and layout | `css/style.css` |
| Card design, sidebar, and mobile layout | `css/polish.css` |
| Hover effects and background | `css/effects.css` and `js/effects.js` |
| Certificate buttons | `js/certificates.js` |
| Image previews | `js/preview.js` |

To add a project or certificate, add an item to its list in `js/portfolio-data.js`. New cards appear automatically. Certificates use three columns on large screens, two on medium screens, and one on mobile. Add only real details and working links.

To turn off an effect, set its option to `false` in the `effects` object. Motion effects respect the visitor's reduced-motion setting.

## Upload images and CV

| File | Upload path |
| --- | --- |
| Profile photo | `assets/images/profile.png` |
| IGPC certificate | `assets/certificates/igpc-2026.jpg` |
| BFS screenshot | `assets/projects/bfs-crawler.png` |
| Duplicate Finder screenshot | `assets/projects/duplicate-finder.png` |
| Crop screenshot | `assets/projects/crop-recommendation.png` |
| CV (already added; replace when needed) | `assets/cv/resume.pdf` |

All listed images are now uploaded and active. Replace a file at the same path and commit it to `main`; the update will appear after deployment. Keep the exact spelling and file type. See [the upload guide](assets/UPLOAD-GUIDE.md) for details.

## Publish updates

GitHub Pages uses **Settings → Pages → Deploy from a branch → main → / (root)**. Changes pushed to `main` are included in the next successful deployment.

```sh
git status
git add <files-you-changed>
git commit -m "Update portfolio"
git push origin HEAD:main
```

For Vercel or Netlify, use this folder as a static site, leave the build command empty, and use `.` as the output/publish folder. Update the canonical URL, social URL, and `sitemap.xml` if you change the site's address.

To undo a published change, revert its commit and push the revert. Avoid force-pushing shared history.

## Google search

Add `https://mahabubhasanmahin.github.io/portfolio/` to [Google Search Console](https://search.google.com/search-console/). Complete ownership verification, submit `sitemap.xml`, and request indexing. Google decides when and where the site appears in search.

## Checks

Browser checks cover mobile layouts, filters, language switching, certificate downloads, image previews, and reduced motion. See [VALIDATION.md](VALIDATION.md) for results and limits. Live-demo availability and other check limits are listed there.

Optional test tools are separate from the website:

```sh
npm install --prefix /tmp/portfolio-test-tools playwright
NODE_PATH=/tmp/portfolio-test-tools/node_modules CHROMIUM_PATH=/usr/bin/chromium node tests/smoke.cjs
```

Start the local server first. Use your installed Chromium path. Set `TEST_URL` if the server uses a different address or port. Other checks are in `tests/`.

## Contact

[Email](mailto:mahabubhasanmahin231@gmail.com) · [GitHub](https://github.com/mahabubhasanmahin) · [LinkedIn](https://linkedin.com/in/md-mahabub-hasan-mahin-54908229a)

## Home and project updates

The profile uses `assets/images/profile.png`; the file extension must match the `photo` setting. Replace the CV at `assets/cv/resume.pdf` when you have a new version.

The first three projects have `featured: true` in `js/portfolio-data.js`. They appear first with larger screenshots; the remaining projects follow below. Each project has editable `work` and `learning` notes, shown inside Project details. These notes describe the supplied project features and practice topics, without claiming a team role or advanced expertise. Edit them to reflect your exact contribution. `currentFocus` holds the research-paper-in-progress line; no title, topic, or publication claim is shown.

The compact mobile menu is in `js/navigation.js`. Home and featured styles are in `css/refresh.css`. The section reveal adds a short border/glow change while keeping text still. Background scroll movement is limited to decorative layers, disabled on mobile/coarse pointers and reduced-motion settings. Hover timing is shared across cards and buttons.

## Asset loading and cache updates

The portrait loads directly from the initial HTML, including when JavaScript is off. The website does not require HEAD requests before showing images or starting the controls. Missing project/certificate images use their normal error fallbacks. Existing uploaded image paths are stored in each record’s `image` field.

To make browser caches use a matching set of files after a future release, run `python3 scripts/stamp-release.py YOUR_NEW_RELEASE_ID` before committing. This updates the CSS, main JavaScript, local module imports, and portrait URL together. Keep the generated query versions in place. The current release is `20261108-r9`. `tests/deployment.cjs` checks direct loading, HEAD-denied behavior, JavaScript-off display, and real image-failure fallback; it also runs under `/portfolio/`.

## Pale cyan background and profile images

`css/cyan-theme.css` defines the owner's pale blue/cyan reference palette. The final `css/coding-background.css` layer combines a blue background with three local coding/CSE photographs; the dark theme remains available. The choice is saved under `mahin-theme-cyan` so previous default-dark state does not hide this new palette on first use. Text and card colors are adjusted together for readability.

The hero portrait and menu avatar both use the original `assets/images/profile.png`, with CSS framing only. Replace that file to update both. `js/profile.js` handles direct loading and separate fallbacks for each image. The seven home/project/menu/motion features remain in place.

Hover feedback is controlled by the final rules in `css/cyan-theme.css`: cards lift 7px, borders and shadows strengthen, and buttons/menu items change color. Fine-pointer hover and keyboard focus stay visible in both themes. Reduced-motion mode keeps feedback stationary.

## Coding/CSE image background

The three local photographs are `coding-background.webp`, `code-pattern.webp`, and `network-background.webp` under `assets/images/`, from the owner’s older portfolio. `css/coding-background.css` positions them over a blue gradient as soft layers. Edit the `.background-photo` opacity and `.photo-*` positions there. Background images never intercept clicks. Mobile shows two layers; motion preferences and existing hover settings are respected.

The Home section keeps an opaque reading gradient on the left and the photo collage toward the right. Portrait badges use unrotated, bounded positions to avoid clipping at narrow widths and in translated layouts.

Profile framing follows the uploaded file’s real dimensions. Tall photos use a 4:5 hero frame with cover fitting and a separate menu-avatar crop. Square or wider photos use contain fitting with no portrait zoom. The original 900×1600 photo is currently uploaded. Replace `assets/images/profile.png` to update both images; no manual crop-mode change is required.
