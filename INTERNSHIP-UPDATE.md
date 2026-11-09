# Internship content update — 9 November 2026 (Dhaka)

Status: prepared and tested locally. The owner subsequently authorized committing and pushing the fixes after reviewing the live CV 404.

## Updated content

- Name and email retained exactly. Location is **Kanchan, Narayanganj, Bangladesh**; hometown is **Rangpur, Bangladesh**. Contact, header, SEO description, structured data, README, and social image now agree. No street address, coordinates, or postal code was added.
- University education now reads **2023–Present | Final Semester | Seeking Internship**, with the existing B.Sc. in Computer Science and Engineering and Green University of Bangladesh. Removed the website's expected-2027 claim from active content; no graduation month was introduced.
- Hero, About, interests, and contact copy cover Software Development, IT Support, Technical Operations, and Technical Talent Acquisition internships. These are interests, not employment experience or recruiting expertise.
- C++ is the main practice language. DSA is selected topics and ongoing practice. Other programming languages, databases, frameworks, Linux, and networking remain basic, foundational, or project-based. All active additions have English, Bengali, and Japanese translations.
- First five projects: Alert & Notification System, Cipher Vault, FoodieHub, Duplicate File Finder & System Cleaner, Smart Safety Awareness Network. All other six projects, screenshots, source links, and supplied demo links remain.
- Project detail labels now say **Project features** and **Practice topics**, avoiding unsupported individual-contribution or outcome claims. Removed FoodieHub's unsupported roles claim; its login/session source and README support sign-in and cart scope, not a confirmed role system.
- No CSS, layout, theme, animation, photo source, certificate, or PDF content changed. Updated the existing cache query version to `20261109-internship1` so approved future publishing can load matching content/modules.

## Source and link review

Read the public repository file lists and READMEs for all projects where available: ten READMEs, plus the Java BFS source in the supplied nested path. All eleven source repositories resolved HEAD. The five priority projects' described technology and broad feature scope agree with their source documentation. Spot-checked FoodieHub sign-in/session code and the BFS queue traversal. This was source/documentation verification, not an execution or security audit of eleven separate applications. It does not establish each contributor's personal role.

Four supplied demo URLs and the alternative SSAN demo were requested, but the environment proxy rejected the connections with CONNECT 403. This is not evidence that the sites are broken. The URLs remain unchanged.

SSAN needs owner confirmation:

- Current portfolio: `https://ssan-web-kappa.vercel.app/`
- Current SSAN repository README: `https://smart-safety-awareness-network.netlify.app/`

## Verification

All 16 browser suites passed after updating two tests that assumed Cipher Vault / Backend was first. Tests now select the intended project/filter by its name rather than the old position. Coverage includes:

- Requested order and all eleven projects, source/demo href values, and screenshot decoding.
- New location, semester, interests, and translation switching in English, Bengali, Japanese; location structured data contains only type/name.
- Phone, tablet, desktop viewport checks, including 320, 390, 768, 1440px for the new copy; the existing broader responsive tests also passed.
- Mobile menu, anchors, direct refresh, active navigation, CV preview/download, image/certificate preview and fallback, keyboard focus, filters, themes/persistence, reduced motion, and browser runtime/missing-local-request checks.
- Axe automated WCAG A/AA checks: no detected violations in either theme. This does not replace manual screen-reader/device testing.
- Inspected desktop and phone screenshots. All configured images and the CV exist. JavaScript syntax and `git diff --check` pass.

Lighthouse was not rerun: this is a content-only update, and no current Lighthouse score is claimed. Physical mobile devices and Safari were not available. Live site/demo rendering and backend application functionality could not be verified through the blocked connection. No contact message was sent.

## Current CV

The owner's uploaded PDF is now **assets/cv/mahin_cv.pdf**. It was retrieved from the repository's latest main branch. Home download, CV section download, preview, and Open PDF use this file. Both downloads explicitly save as **mahin_cv.pdf**.

Its extracted text states final semester, 2023–Present, foundational technical familiarity, and Talent Acquisition internship interest. No PDF text was edited. The earlier resume.pdf has been deleted by the owner and is no longer linked.

## Modified files

| File | Change |
| --- | --- |
| `js/portfolio-data.js` | Identity/location, internship copy, skill labels, project order, education, FoodieHub scope |
| `js/i18n.js` | English/Bengali/Japanese additions for all new text |
| `index.html` | Initial hero copy, interests, header/contact, metadata and structured location; asset cache version |
| `js/main.js` | Neutral project-detail labels and module cache versions |
| `js/cv.js`, `js/navigation.js`, `js/preview.js` | Import cache version only; behavior retained |
| `scripts/make-social-card.cjs` | Correct location and learner/final-semester text |
| `assets/images/social-card.png` | Regenerated existing social graphic with the corrected text |
| `README.md`, `assets/UPLOAD-GUIDE.md`, `VALIDATION.md`, `AUDIT.md` | Short commands, current CV upload instructions, and review links |
| `tests/home-refresh.cjs`, `tests/smoke.cjs`, `tests/audit.cjs` | Current CV path, exact download filename, and neutral project detail labels |
| `tests/languages.cjs` | Assert new Bengali copy and locate Backend by translated name |
| `tests/search-and-uploads.cjs` | Target Cipher Vault by name for the simulated screenshot failure |
| `tests/internship-content.cjs` | New integration coverage for current owner-supplied content and priority order |
| `INTERNSHIP-UPDATE.md` | This review report and outstanding confirmations |

## Needs owner input

1. Confirm which SSAN demo URL should be preferred; neither destination could be checked live here.
2. Exact individual contributions can be added later when provided; the current feature-based wording avoids inventing them.

The owner authorized publishing these reviewed fixes in the follow-up request. GitHub Pages must complete its deployment after the push.

## Language follow-up

Completed Bengali/Japanese coverage for descriptive project names, generic skill terms, hero name, browser title, language controls, screenshot labels, and localized project counts. Fixed composite text translation and verified English restoration, filters, dialogs, and unchanged URLs. Added `tests/full-localization.cjs`. Brand/technology names and code retain their standard spelling; uploaded PDFs and screenshot contents are not translated. The cache release is now `20261109-locales`.
