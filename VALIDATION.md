# Validation

Executed in Chromium through Playwright against the local Python HTTP server on 2026-11-08.

Passed:
- All nine project cards render.
- Five filters show the expected card counts (9, 1, 2, 1, 5).
- No horizontal document overflow at 1440, 768, 390, and 320 CSS pixels.
- Dark/light theme switches and persists after reload.
- All internal anchor destinations exist.
- Missing photograph is hidden; the missing PDF are clearly labeled without broken download links.
- Reduced-motion preference disables portrait animation.
- Keyboard navigation reaches the skip link first and activates focus on main content. An initial failure was fixed by making main programmatically focusable; the rerun passed.
- No JavaScript runtime errors in the browser.
- `git diff --check` passed.

Full-page desktop, tablet, and mobile screenshots were captured in the temporary test directory. Desktop rendering was visually inspected. Layout overflow checks are automated and do not establish a complete visual or screen-reader audit.

Expected limitations:
- Two optional asset HEAD requests return 404 until the authentic photograph and PDF are added. These resource messages are distinct from JavaScript runtime errors. Actual image rendering and PDF downloads could not be tested without supplied files.
- No reference video was attached, so visual matching to that reference is unverified.
- External profile/API requests were denied by network policy (403). Supplied repository URLs and social links have not been independently verified. Two unknown repository links are intentionally absent.
- Real CV hyperlinks, certificate authenticity, email delivery, and deployment were not verified. No remote push or deployment was performed.
- Contrast, focus indicators, semantic regions, accessible button names, and heading order were implemented; no formal WCAG audit or assistive-technology testing was performed.

## Repeat the browser checks

Start the server using README instructions. Install Playwright in a disposable external tooling directory rather than introducing an application dependency:

```sh
mkdir -p /tmp/portfolio-test-tools
npm install --prefix /tmp/portfolio-test-tools playwright
NODE_PATH=/tmp/portfolio-test-tools/node_modules CHROMIUM_PATH=/usr/bin/chromium node tests/smoke.cjs
```

Use a trusted installed Chromium executable. The smoke test currently asserts missing-asset states; update those assertions once real assets are added. It exercises the current app without altering production files.

## Readability and localization update

- Increased main body copy to 15–16px, project titles to 19px, navigation to 13–14px, and strengthened secondary-text contrast in both themes.
- Added English, Bengali (`bn`), and Japanese (`ja`) UI/content translation and persistent language selection. Technology names and project brand names remain unchanged.
- Language checks passed: content changes, document language, persisted selection, localized filtering, no project GitHub links, theme switching, and no runtime errors. No horizontal overflow at 1440, 768, 390, or 320px in all three languages (12 checks).
- The existing smoke suite passed again after the changes. Tests are in `tests/languages.cjs` and `tests/smoke.cjs`; set `TEST_URL` to override the local test server URL.
- Project repository links were removed from cards. Live demos use a configurable `demo` URL; all currently remain null because the old portfolio request returned HTTP 403. Demo URL extraction and actual live-demo navigation remain blocked until source access or owner-supplied URLs are available.
- Bengali desktop rendering was visually inspected; translation wording has not been professionally reviewed.

## Interactive effects and supplied CV update

- Added optional mouse spotlight, bounded project tilt, hover sheen, click/keyboard ripple, perspective grid, floating geometric outlines, and restrained background parallax. Native cursor and readable content are preserved.
- Inspected the supplied HTML, CSS, and JavaScript as reference data without executing them. Recovered four live-demo destinations from the supplied JavaScript and installed the authentic supplied CV as `assets/cv/resume.pdf`. Hosted demo availability remains unverified.
- Effects suite passed: four demo links, no project repository links, spotlight activation, tilt activation, pointer exit reset, ripple creation/cleanup, decorative semantics, reduced-motion disabling of pointer effects/background/ripple, mobile overflow, hidden mobile geometry, disabled touch tracking, and no runtime errors.
- Smoke suite passed with a real CV download link and PDF signature check. Three-language suite passed again, including all 12 viewport/language overflow checks.
- Test harness corrections: waited for the asynchronous media-query change event before checking reduced-motion state, and used an absolute request URL for the PDF assertion. Reruns passed.
- Desktop rendering was visually inspected after effects settled. Profile/certificate images shown inline in chat are not available as local image files; no generated or substitute person was used. The profile placeholder remains until `assets/images/profile.jpg` is supplied as a file.
- Repeat effects checks with the README's Playwright setup: `TEST_URL=http://127.0.0.1:8000 node tests/effects.cjs` (set NODE_PATH/CHROMIUM_PATH as needed).

## Professional layout and source alignment

- Latest owner request supersedes the earlier removal of project repository links. All eleven projects from the supplied JavaScript are represented, with exact source URLs and the four supplied live-demo URLs. No demos were invented for desktop/CLI projects.
- Read-only Git verification succeeded for all eleven repository roots. Live service availability and the BFS subdirectory were not independently checked.
- Extracted three actual screenshot assets from literal data URLs in the supplied JavaScript, without executing the uploaded code. Optimized the large face-age screenshot as WebP. All three decode successfully in Chromium.
- Language selection now lives in the sidebar (beside the brand on mobile). Added refined navy/indigo/cyan styling, compact sidebar spacing, screenshot rendering, and paired demo/GitHub actions.
- Project-specific tests passed for all exact source/demo URLs, missing-demo absence, sidebar language control, screenshot decoding, and initial shared education anchor positioning.
- Smoke, language, and effects suites passed after the project list and styling updates. Desktop project cards and mobile overview were visually inspected.
- The portrait is still an initials placeholder. The inline chat photo was visually available but had no downloadable local asset/file ID; a real JPG/PNG attachment is needed to populate the configured portrait path.

## Asset recovery and image preview update

- Recovered five additional project screenshots through read-only Git access to CipherVault, Alert-Notification-System, E-Learning-Quiz-Platform-Java-MySQL-, Restaurant-Management-System-Assembly-, and Line-Coding-Error-Simulator. Kept the requested project identity and used genuine repository assets, optimized as WebP.
- Added Python/Django certificate from the owner's public `www.mahabub.com` website repository and Cyber Hygiene certificate embedded in the uploaded HTML. No third-party credential verification was performed.
- Eight project images and two certificate images are present. No substitute portrait was used; the brick-wall portrait, IGPC certificate, BFS, duplicate finder, and crop screenshots remain unavailable as downloadable files. The old Netlify asset endpoint and GitHub attachment/avatars endpoints returned policy 403 responses. A different old profile photo was inspected but intentionally not substituted.
- Preview suite passed: eight screenshot controls, two certificate controls, project/certificate modal open, loaded images, initial focus, Escape dismissal, focus restoration, Bengali close label, mobile overflow, and no runtime errors.
- Project suite passed with all eight screenshots decoding, source/demo URL matching, sidebar language selector, and initial education hash positioning.
- Language and effects suites passed again. Initial runs failed because the old local HTTP server stopped responding; starting a new local server resolved the test prerequisite, and the affected checks passed.

## Certificate actions and simple English update

- Replaced duplicate training/image collections with one `certifications` array containing date, title, issuer, and optional image. Certificate rendering is in `js/certificates.js`.
- Added explicit View certificate and Download certificate actions. The IGPC record has no dead actions while its image is missing. A failed thumbnail hides its actions and shows a short status.
- Preview now shows loading and failure states, the matching title, a real download link, and accessible close behavior. Certificate numbers and images were not altered; no verification IDs/links were invented.
- Simplified English navigation, section headings, introduction, about text, project descriptions, skill group labels, CV copy, and contact copy. Official names, course titles, and technology names remain unchanged. Updated Bengali/Japanese translation entries alongside the English changes.
- Certificate suite passed: three records, two view buttons, two downloads, no actions for missing image, both preview titles/images, Escape/focus restoration, completed real image download with correct filename, Bengali/Japanese controls, simulated failed image message, 320px layout, and no runtime errors.
- Existing smoke, language, and preview suites passed after the changes. Certificate desktop rendering was visually inspected. `git diff --check` passed.

## Separate certificates section and responsive layout

- Education and Certificates are separate, full-width sibling sections, with Certificates immediately after Education.
- Certificate cards use one column on mobile, two on medium screens, and three on large screens. Education entries stack on small screens. Mobile sidebar navigation scrolls horizontally and certificate controls have at least 44px touch targets.
- Responsive suite passed at 320, 360, 390, 600, 768, 1024, 1440, and 1920px: no horizontal document overflow, equal section widths, and certificate controls fitting their container with touch target sizing. Bengali/Japanese mobile overflow checks passed.
- Certificate suite passed again, including actual downloads, preview focus and Escape, translated controls, and image failure handling. These checks cover representative screen sizes, not every physical device/browser.

## Automatic certificate card rows

- Styled certificate cards like project cards, with consistent artwork height, card surfaces, aligned actions, and hover/focus highlighting. Missing images use a decorative symbol while keeping the missing-image status and no dead actions.
- Removed forced full-row spanning of the final tablet card. New certificates now flow naturally through the grid.
- Responsive and certificate-action suites passed. Added a browser-only fixture of ten records: confirmed three cards per desktop row, nine filling three rows, and a tenth starting a fourth. The fixture never changes production data; the site retains its three real training records.

## Search metadata and optional image uploads

- Added full-name title and initial HTML heading, canonical URL, index/follow metadata, profile structured data, social metadata, and sitemap.xml. Search tests passed for title/name presence before JavaScript, a single complete rendered heading, parsed structured data, canonical URL, and served sitemap.
- Google indexing/ranking was not verified or promised. Google Search Console ownership verification and sitemap submission must be completed by the owner.
- Added optional upload paths for the five missing assets and assets/UPLOAD-GUIDE.md. Browser-only mocked image responses confirmed a newly uploaded screenshot and IGPC certificate become active automatically; absent files preserve existing cards/statuses. Existing smoke suite passed again.
- Prepared a simple GitHub profile README in the separate profile repository, correcting email, portfolio address, project details, and removing unverified counts/badges. Profile push was denied with GitHub 403; it has not been published. A copy is available outside the portfolio checkout under /workspace/shared/mahin-github-profile-README.md.

## Home, profile, featured projects, and mobile menu refresh

- Pulled the owner's five image uploads from main with a fast-forward. Fixed the portrait lookup from profile.jpg to the actual profile.png without replacing or altering the uploaded picture. All eleven project screenshots and all three certificate images now activate.
- Added three featured project cards with larger screenshots ahead of the remaining project grid, without duplicating cards. Every card has native expandable details for What it does, My work, and What I learned. Notes describe supplied features and practice topics; no solo/team roles, advanced skill claims, or project metrics were invented.
- Owner stated they are working on a research paper. Added only a research-in-progress line, with no paper title, field, publication, or result claims.
- Added a compact mobile menu with an expanded state, automatic close on link/outside clicks, Escape dismissal/focus return, and translated labels. Added consistent hover timing, restrained section border/glow reveals with stable text, and decorative scroll parallax disabled on mobile/coarse pointers and reduced motion.
- Home-refresh suite passed: real PNG decode/display and no placeholder, three featured cards and eleven unique cards, expandable detail fields, research line, direct CV link, seven viewport overflow checks, mobile menu behavior, translated controls/image labels, reduced motion, and no runtime errors.
- Smoke, certificate, language, effects, search/upload, preview, project-link/image, and responsive-grid suites passed with updated expectations for the owner's now-present images. Actual CV PDF and certificate image download checks passed. Homepage desktop/mobile screenshots were visually inspected.
- New CV replacements must be named resume.pdf at assets/cv/resume.pdf. The existing authentic CV remains available until the owner replaces it.

## Direct portrait loading and release consistency repair

- Owner's live screenshot showed current copy but an initials placeholder. Public live image probing was denied by this environment's network policy (CONNECT 403), so the exact production response/cache state could not be observed.
- Removed HEAD-request gating and blocking asset preflight awaits. The real uploaded PNG now has a source in initial HTML and is visible without JavaScript; `js/profile.js` handles load/error and already-cached image completion. Only an actual image loading failure reveals the placeholder.
- Converted the now-uploaded project/certificate records to direct image paths, and initialized CV links from the supplied local PDF path. Controls no longer wait for independent metadata requests.
- Added release query versions across HTML styles/main entry, module imports, and portrait to keep cached assets consistent. `scripts/stamp-release.py` updates the version as one repeatable step. Current release: 20261108-r2.
- Deployment suite passed on a local server at the actual `/portfolio/` URL prefix: portrait decode/display with HEAD forbidden, no HEAD requests, current release image URL, project/certificate rendering, working controls, static HTML image source, no-JavaScript decode/display, real request-failure fallback, and no runtime errors.
- All ten suites passed: deployment, home-refresh, smoke, certificates, languages, effects, preview, projects, responsive, and search/image-fallback checks. Full viewport checks cover 320–1920px where applicable. Deployment-path desktop rendering was visually inspected.
- These are local browser/deployment-path checks. Published GitHub Pages state remains unverified because its host was blocked by runtime network policy.

## Reference cyan palette and menu avatar

- Applied a pale blue/cyan gradient based on the owner's supplied swatch, with navy text, coordinated card surfaces, and blue/cyan/purple section accents. It is the new default; explicit dark theme selection remains available and persists in its own preference key.
- Added the actual uploaded portrait beside the sidebar brand/menu, including on mobile, with direct image loading and an independent error fallback. Adjusted hero portrait framing to show the face and upper body more clearly using CSS only; original pixels/files were not changed.
- Release version updated to 20261108-r3. Desktop and mobile light-theme screenshots were visually inspected.
- New palette suite passed: default palette, both real image decodes, avatar replacing monogram, light/dark overflow and avatar visibility across five viewport widths, persisted dark selection, consistent portrait framing with reduced motion, retained featured work/details, and no runtime errors.
- Existing ten regression suites passed after updating expected default-theme behavior and release version. Body, secondary, and link contrast ratios against representative palette surfaces measured 9.70, 4.78, and 6.68 respectively; this is not a full accessibility audit of every gradient state.

## Stronger hover feedback

- Increased card lift to 7px with a clear border, shadow/ring, and theme-specific surface change. Strengthened button/menu hover, image zoom, image-preview hint visibility, keyboard focus, and pressed feedback. Fine-pointer conditions limit animated hover; reduced-motion mode keeps the visual state stationary.
- Hover-feedback suite passed in light and dark themes: border change, stronger shadow, lift, reset after exit, and stationary reduced-motion feedback.
- Existing effects, responsive, and deployment suites passed. Release version is 20261108-r4; deployment test now checks that portrait/entry versions match instead of relying on a fixed version literal.

## Coding/CSE photograph background

- Replaced the blue/cyan page background with a locally stored coding/CSE photograph recovered from the owner's older website repository, optimized as WebP. Neutral overlays/surfaces keep text readable; separate light/dark opacity settings and a lighter mobile layer avoid blocking controls or scroll.
- Removed blue grid/orb background layers while retaining button accents, hover feedback, and existing features. Source photo is decorative; it does not claim authorship of the code shown in it.
- Confirmed the image serves successfully and is applied by the browser. Light/dark image/layout checks and stronger-hover suite passed. Desktop rendering was visually inspected. Release: 20261108-r5.

## Blue multi-image CSE background

- Clarified owner preference: restored the blue background and combined three distinct local coding/CSE photographs (code close-up, coding workstation, and code/server imagery). Sources are the owner's older public portfolio assets, optimized as WebP.
- Applied soft masked layers, low opacity, and blue overlays with a clear reading area. Desktop shows three image layers; mobile keeps two. All layers are decorative and ignore pointer events.
- Browser checks confirmed all three image files serve and the three photo layers render. Light/dark layout/portrait checks and effects suite passed, including mobile overflow and reduced-motion behavior. Desktop composition was visually inspected. Release: 20261108-r6.

## Home screenshot cleanup

- Based on the supplied screenshot, reduced code-image clutter behind the main copy while retaining the requested blue multi-image background. Added a stronger reading gradient and moved the network/workstation layers toward the outer/lower areas.
- Removed badge rotation and negative outer offsets; constrained the portrait scene, badges, and availability caption so the Bangladesh label is no longer clipped at the hero edge.
- New hero-layout suite passed badge bounds and document overflow checks at 320, 390, 768, 1024, 1440, and 1920px in English, Bengali, and Japanese (18 combinations). Home-refresh suite passed again. Desktop result was visually inspected.
- The owner did not identify a specific screenshot region beyond asking for a fix; these changes address the visible background/text interference and cropped badge, preserving the requested colors, photos, and existing features. Release: 20261108-r7.

## New square headshot framing

- Fast-forwarded the owner's newly uploaded 300×300 RGBA profile.png. The previous 160% hero zoom and 220% menu-avatar zoom were designed for the old full-body photo and clipped the replacement headshot.
- Removed enlarged dimensions and negative offsets from both image placements, switched to contain fitting, used a square hero frame, and updated intrinsic HTML dimensions. Source image pixels were preserved.
- Light/dark portrait/layout suite passed, including reduced-motion containment. Hero badge bounds/overflow passed across six widths and three languages. Deployment/image-fallback suite passed. Desktop rendering was visually inspected with the full head and shoulders visible. Release: 20261108-r8.

## Automatic framing for restored portrait

- Pulled the owner's restored 900×1600 profile.png. Added natural-dimension detection to the direct image loader: tall uploads use portrait cover framing and a matching avatar crop, while square/wider uploads use containment without the old tall-photo zoom. Intrinsic dimensions update after decoding.
- Added narrow-screen width/grid constraints; no horizontal overflow at 320, 390, 594, 760, 1024, or 1440px in the framing test. Portrait badge bounds also passed across the existing six widths and three languages.
- Profile-framing tests passed with the real tall photo and a browser-only square fixture. Light/dark portrait/layout and hero-layout suites passed. Release: 20261108-r9.
