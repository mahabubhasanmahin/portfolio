# Mahin Portfolio

A dependency-free, responsive portfolio built with semantic HTML, CSS, and ES modules. No build step, backend, database, API key, or frontend framework is required.

## Run locally

From the existing checkout (cloud tasks are already isolated; no worktree is needed):

```sh
cd /workspace/portfolio
python3 -m http.server 8000 --bind 0.0.0.0
```

For a local VS Code checkout, open the project directory and run `python3 -m http.server 8000` in its terminal, or use Live Server. Open the server in a browser. Opening index.html directly as a file will not load ES modules reliably.

## Edit content and design

- `js/portfolio-data.js`: personal details, introduction, about copy, links, projects, skill groups, education, training, asset paths, and effects options. Projects are rendered automatically; add/remove an object to change the collection. `demo` is a complete verified HTTPS live-demo URL; leave it `null` when unknown. `repo` is the complete GitHub URL copied from the owner-supplied source. Project cards show a source link and a live demo when one was supplied. Never invent demo links or statistics.
- `css/style.css`: change `:root` design tokens for dark colors, light-theme overrides, typography, layouts, breakpoints, and animation styles.
- `index.html`: layout and section ordering, headings, semantic structure, page title, description, and Open Graph metadata. When adding sections, add an ID and matching sidebar link.
- `js/i18n.js`: English, Bengali, and Japanese translation rows. Add a row for new visible text; keep technology and project brand names unchanged. Language choice persists locally.
- `js/main.js`: rendering, project filtering, theme persistence, active navigation, asset checks, reveal and tilt behavior.
- Disable reveal/tilt or change `tiltDegrees` in `portfolio-data.js`. Both effects respect reduced-motion preferences; tilt runs only for mouse input.

### Authentic assets still needed

The supplied `mahin_CV.pdf` is installed as `assets/cv/resume.pdf`. The uploaded source files were inspected as reference material, rather than executed or used to replace the existing application. A local profile photo and certificate image files still need to be added. The portrait uses an explicitly labeled initials placeholder, project artwork is decorative illustration, and the CV card exposes the authentic PDF download. No synthetic person or fake download is used.

Place the authentic files at these paths (case-sensitive):

- `assets/images/profile.jpg`
- `assets/cv/resume.pdf`

The site checks HTTP status and content type before exposing the portrait and downloads. Refresh after adding files. The portrait preserves the source appearance via object-fit; adjust object-position in CSS if necessary. Optimize the photo before committing. Certificate images should only be added if authentic.

For project screenshots, add optimized files in `assets/projects/` and set a project’s `image` path in `js/portfolio-data.js`. The renderer displays a lazy-loaded screenshot with alt text and falls back to artwork if loading fails. Three actual screenshots were extracted from the supplied JavaScript; other cards use decorative artwork.

## Verification and content provenance

Personal information and project descriptions come from the owner's brief. Public API and old portfolio requests were blocked by the environment's outbound network policy, so profile facts and project links were not independently verified. All eleven project source URLs were subsequently recovered from the supplied source and their repository roots were verified with read-only Git requests. No current solved-problem counts, ratings, or unverified metrics are shown. The site makes no runtime third-party requests and does not need GitHub integration.

See `VALIDATION.md` for executed checks and remaining limitations. No fake contact form is included; email uses mailto. A mail client must be configured on the visitor's device.

## Deploy to Vercel or Netlify

This folder is the complete static site. No build command is needed; publish the repository root (`.`). On Vercel, import the GitHub repository, select **Other** as the framework, leave Build Command unset and set Output Directory to `.` if required. On Netlify, import the repository with no build command and publish directory `.`. Test a preview before promoting it. Set a real canonical URL and optional absolute Open Graph image URL after choosing the production domain.

The repository is already initialized. For a separate new local folder only, run `git init` and add the intended remote. Review changes before committing:

```sh
git status
git add index.html css js assets README.md VALIDATION.md .gitignore
git commit -m "Build editable developer portfolio"
# Only when you intend to publish your changes:
git push origin HEAD:main
```

Do not push or replace an existing production site without owner approval. Subsequent approved pushes trigger deployments when Git integration is enabled. To roll back, promote a previous known-good deployment in the provider dashboard, or create a revert commit and push it after review. Never rewrite shared Git history as a rollback shortcut.

Browser smoke checks are preserved in `tests/smoke.cjs`; see `VALIDATION.md` for the optional external test-tool installation and commands. These tools are not runtime dependencies.

## Readability and languages

The sidebar language selector supports English, বাংলা, and 日本語, updates the document language, and remembers the choice. Technology and project names retain their original spelling. Body content is at least 15–16px with stronger secondary-text contrast. Review Bengali/Japanese translations before publication for your preferred wording. Four live URLs were recovered from the owner-supplied `main (1).js`: Cipher Vault, SSAN, AI Face Age Detection, and FoodieHub. They are owner-supplied destinations; availability of the hosted services is not independently verified. Other projects retain no demo URL.

## Mouse, button, and background effects

`js/effects.js` manages pointer spotlight, project tilt, button ripple, and background parallax. `css/effects.css` controls their appearance. Change the `effects` object in `js/portfolio-data.js`:

- `spotlight`: mouse-following highlights on cards.
- `tilt` and `tiltDegrees`: project-card perspective; the angle is capped at 8 degrees.
- `buttons`: hover sheen and click ripple (keyboard activation is supported).
- `background`: decorative gradient orbs, perspective grid, and floating outlines.
- `reveal`: existing scroll transitions.

Pointer work uses a single scheduled animation frame only when the mouse moves. It resets on pointer exit, blur, visibility changes, or motion-preference changes. Touch devices disable tracking, narrow screens hide geometry, and reduced-motion mode hides the background and removes tilt/ripple. Native cursors, keyboard focus, and readable text remain intact. No animation library or 3D runtime is required.

## Professional layout update

`css/polish.css` contains the final sidebar, responsive language control, refined navy/indigo/cyan palette, project actions, and screenshot presentation. The selected list now matches all eleven projects in the supplied source. Four projects have supplied live URLs; all eleven have GitHub source links. Do not invent browser demos for local desktop/CLI projects. The authentic CV is downloadable directly from the hero button.
