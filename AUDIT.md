# Portfolio audit and follow-up changes

## Follow-up — 9 November 2026 (Dhaka)

The owner requested one project grid and an alternative to blue. All eleven projects now appear together, in their existing data order, with equal screenshot heights. The Featured/More headings and larger featured-card treatment were removed from rendering; original project metadata and links remain intact.

The current theme uses charcoal (`#101715`), emerald (`#047857`), and mint (`#6EE7B7`) with a matching light mode. The profile remains transparent, with no colored frame, border, or glow, and blends into either theme. Existing smooth transitions, pointer tilt, hover, and reduced-motion support remain. Favicon and social-card artwork match the new palette.

Six affected browser suites passed: projects, home, themes, hero layout, hover feedback, and navigation/CV integration. Rechecked automated accessibility in both themes after increasing the light-mode text contrast. The Lighthouse scores below belong to the earlier Midnight Glass audit; Lighthouse was not rerun for this color/layout follow-up.

---

The following records the initial Midnight Glass audit and its limits.

Audit date: 8 November 2026 (UTC). Tested the existing static website at `http://127.0.0.1:8015/portfolio/`, including the GitHub Pages subdirectory. Existing HTML, CSS, JavaScript, assets, content, and tests were inspected before changes. No framework, runtime library, build system, or form backend was added.

## Actual fixes

- **Broken portrait:** the HTML/data referenced `profile.png`, but the latest upload had deleted that file and added a generic `profile.jpg`. Restored the owner's authentic transparent 300×300 headshot from repository history. Both hero and menu now load the matching real image. The unused generic upload is preserved.
- **Conflicting styles:** six stylesheet layers overrode each other, including the old photo collage and light default. Consolidated layout and theme rules into two files. Removed four obsolete override files; preserved source image assets.
- **Active navigation:** replaced overlapping active-section handlers with one controller. It follows actual document order, handles long sections, preserves clicked CV/contact sections near the page bottom, and tolerates malformed hashes. Added a sliding indicator and `aria-current`.
- **Mobile controls:** aligned the CSS and JavaScript breakpoint at 900px; verified menu close by selection, Escape, and outside click. Keyboard focus returns to the toggle after Escape.
- **Missing CV preview:** added a native dialog loading the existing PDF, Escape/close behavior, focus restoration, and an Open PDF fallback. Download still points to the authentic existing PDF.
- **Accessibility:** image-preview close button now has an initial accessible label; dynamic preview alt text is not overwritten by cached translations. Removed the brand link's label that excluded its visible text. Added translated labels for new CV controls.
- **Search metadata:** added the missing SVG favicon and social-share image metadata. Hidden preview download/open anchors now have real initial URLs, fixing Lighthouse's uncrawlable-link finding.
- **Layout stability:** included the real hero headline and research status in initial HTML so JavaScript does not insert a new text block above the introduction.
- **Development checks:** fixed a root-relative module import in the responsive test so it works under `/portfolio/`; updated old default-light/tall-photo expectations to the current requested dark theme and real square headshot. Replacement tall-photo coverage remains.

## Design improvements

- Midnight Glass tokens: `#080F1F` background, `#14213A` cards, `#2563EB` blue, `#22D3EE` cyan, `#F8FAFC` text, `#94A3B8` secondary text. Optional light theme remains.
- Faint grid, radial light, restrained glass surfaces, soft portrait glow, shared spacing and radii.
- Internship-focused introduction and contact CTA; C++ and problem solving remain prominent.
- Three featured projects with larger screenshots, then the remaining eight. All eleven source links, four supplied demo URLs, descriptions, technology lists, and work/learning notes are preserved.
- Certificate cards remain immediately after education, with three/two/one columns and automatic extra rows.
- Native image and PDF dialogs, visible focus rings, 44px card controls, mobile navigation, readable translated layouts.
- Pointer-only tilt, restrained hover lift/border/shadow, and scroll reveal/stagger. Text remains visible without animations. Reduced motion disables movement.
- Three PNG screenshots now load smaller WebP copies, reducing those active files from about 766 KiB to 176 KiB. Original PNGs are retained. No remote fonts or animation libraries are required.

## Content preservation

Compared the complete data object with a pre-change snapshot. Only the hero introduction and three screenshot paths changed. Names, contact details, skills/proficiency labels, projects, project notes, source/demo URLs, education, certificates, CV path, and research-in-progress status are retained. No achievements, team roles, research results, or publication details were invented. Expected graduation remains labelled **Expected 2027**; academic records were not independently authenticated.

## Verification

- **15 Playwright suites passed: 315 assertions.** Coverage includes 320–1920px layouts, three languages, both themes and persistence, all project filters, certificate rows/downloads/failures, image preview/failures, genuine PDF preview resource and download, focus restoration, keyboard skip link, menu interactions, anchors, direct section refresh, invalid hashes, reduced motion, blocked HEAD requests, JavaScript-off initial portrait, and local missing-request/runtime-error checks.
- Screenshots inspected at phone, tablet, and desktop sizes. No horizontal overflow in the tested viewport/language/theme combinations.
- Axe WCAG A/AA automated checks: **zero detected violations in dark and light modes**. This is automated coverage, not a complete manual accessibility certification.
- Latest local mobile Lighthouse: **Performance 94, Accessibility 100, Best Practices 100, SEO 100; CLS 0**. An earlier local run scored performance 98; timings vary with machine load. Desktop scores are recorded in the saved report. These are local lab results, not production field measurements.
- All eleven GitHub repository roots resolve HEAD through Git. The supplied BFS nested directory URL returned HTTP 200. GitHub profile returned HTTP 200.
- JavaScript syntax and `git diff --check` checked before release.
- Reports, screenshots, link checks, and individual test logs are saved in `/workspace/shared/portfolio-audit/` in the task workspace; they are not website runtime files.

## Limits and remaining manual checks

- The environment's outbound proxy denied connections to the live GitHub Pages URL, LinkedIn, Codeforces, and the four supplied demos (CONNECT 403). Those links were preserved; their live availability/content could not be verified here. A proxy rejection is not proof that the destination is broken.
- Contact is a real **mailto link**, not a form. There is no server-side validation, submission, or delivery claim. Sending email was not tested.
- The real PDF resource and download were tested. Embedded PDF viewing differs by browser, so Open PDF remains available. Physical iOS/Android devices, Safari, and assistive-technology sessions were not available.
- GitHub Pages must finish its deployment after push. Production rendering, CDN caching, production Lighthouse, Google indexing, and search rank cannot be verified through the blocked live connection.
- The owner's existing project work/learning notes describe features and practice topics. Confirm exact individual contributions before replacing them with stronger claims.
- GitHub Pages controls compression/cache response headers. Readable, unminified source is retained for VS Code editing; Lighthouse may suggest minification and longer caching. No heavy build pipeline was introduced for a small static site.

## Modified files

- `index.html`: static hero, semantic/decorative labels, theme default, favicon, Open Graph/social metadata, two stylesheet entries.
- `css/style.css`, `css/effects.css`: consolidated design, responsive rules, dialogs, motion and reduced-motion rules. Removed `polish.css`, `refresh.css`, `cyan-theme.css`, `coding-background.css` after consolidation.
- `js/main.js`, `navigation.js`, `effects.js`, `preview.js`, `i18n.js`, `portfolio-data.js`: initialization, menu/indicator, optional effects, translated accessible controls, factual hero copy, compressed screenshot paths. Added `js/cv.js`.
- Restored `assets/images/profile.png`; added `social-card.png`, `assets/favicon.svg`, and three project WebP files. Added `scripts/make-social-card.cjs` for repeatable share-card export.
- Updated README, upload guide, validation notes, responsive/profile tests, renamed theme test, and added integration audit coverage.

## Editing and deployment

[README.md](README.md) maps photos, projects, skills, CV, colors, translations, and animations to their editable files. [assets/UPLOAD-GUIDE.md](assets/UPLOAD-GUIDE.md) lists active upload paths. CV filename: **resume.pdf**, stored under **assets/cv/**.

GitHub Pages: **Settings → Pages → Deploy from a branch → main → / (root)**. Run the release-stamp script, commit, and push to main; wait for the Pages workflow. Keep relative assets and fragment section links. No build command or SPA rewrite is needed.
