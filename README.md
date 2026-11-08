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

- `js/portfolio-data.js`: personal details, introduction, about copy, links, projects, skill groups, education, training, asset paths, and effects options. Projects are rendered automatically; add/remove an object to change the collection. `demo` is a complete verified HTTPS live-demo URL; leave it `null` when unknown. Project cards show live demos only, without GitHub repository links. Never invent demo links or statistics.
- `css/style.css`: change `:root` design tokens for dark colors, light-theme overrides, typography, layouts, breakpoints, and animation styles.
- `index.html`: layout and section ordering, headings, semantic structure, page title, description, and Open Graph metadata. When adding sections, add an ID and matching sidebar link.
- `js/i18n.js`: English, Bengali, and Japanese translation rows. Add a row for new visible text; keep technology and project brand names unchanged. Language choice persists locally.
- `js/main.js`: rendering, project filtering, theme persistence, active navigation, asset checks, reveal and tilt behavior.
- Disable reveal/tilt or change `tiltDegrees` in `portfolio-data.js`. Both effects respect reduced-motion preferences; tilt runs only for mouse input.

### Authentic assets still needed

No profile photograph, reference video, certificate images, or CV PDF were supplied. The portrait uses an explicitly labeled initials placeholder, project artwork is decorative illustration, and CV cards show “PDF not supplied.” No synthetic person or fake download is used.

Place the authentic files at these paths (case-sensitive):

- `assets/images/profile.jpg`
- `assets/cv/resume.pdf`

The site checks HTTP status and content type before exposing the portrait and downloads. Refresh after adding files. The portrait preserves the source appearance via object-fit; adjust object-position in CSS if necessary. Optimize the photo before committing. Certificate images should only be added if authentic.

For project screenshots, add optimized files in `assets/projects/`, extend the project data with an image path, and update the project renderer to create a lazy-loaded image with descriptive alt text. Current artwork intentionally makes no claim to be application screenshots.

## Verification and content provenance

Personal information and project descriptions come from the owner's brief. Public API and old portfolio requests were blocked by the environment's outbound network policy, so profile facts and project links were not independently verified. Unknown repository URLs remain plain text rather than guessed links. No current solved-problem counts, ratings, or unverified metrics are shown. The site makes no runtime third-party requests and does not need GitHub integration.

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

The header language selector supports English, বাংলা, and 日本語, updates the document language, and remembers the choice. Technology and project names retain their original spelling. Body content is at least 15–16px with stronger secondary-text contrast. Review Bengali/Japanese translations before publication for your preferred wording. Live URLs could not be recovered from the old portfolio because access returned 403. Supply verified URLs in each project’s `demo` property.
