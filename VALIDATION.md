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
