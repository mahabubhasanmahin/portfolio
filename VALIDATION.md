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
