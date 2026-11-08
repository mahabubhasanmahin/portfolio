# Upload images and CV

Use the exact active path from `js/portfolio-data.js`.

| File | Active path |
| --- | --- |
| Profile photo (real transparent headshot) | `assets/images/profile.png` |
| CV | `assets/cv/resume.pdf` |
| Python/Django certificate | `assets/certificates/python-django.jpg` |
| Cyber Hygiene certificate | `assets/certificates/cyber-hygiene.jpg` |
| IGPC certificate | `assets/certificates/igpc-2026.jpg` |
| BFS screenshot | `assets/projects/bfs-crawler.webp` |
| Duplicate Finder screenshot | `assets/projects/duplicate-finder.webp` |
| Crop screenshot | `assets/projects/crop-recommendation.webp` |

All eleven screenshots and three certificates are present. The original PNG screenshots remain as source copies, but these three cards now load compressed WebP copies. Replace the active WebP file or update the `image` path to your new file. Other project image paths are in the same data file.

On GitHub, open the folder, select **Add file → Upload files**, and commit the real file to `main`. Paths are case-sensitive. Export the right format; changing a filename extension does not convert an image.

Both profile images load `profile.png`. The unused `profile.jpg` is the generic avatar uploaded earlier. Replacing that JPG alone will not update the real profile photo. If you change the active filename, also update `photo` in the data file and both initial profile sources in `index.html`.

Replace the CV with a PDF named **resume.pdf**. Do not upload a Word document with a PDF extension.

After updates, stamp a new release as described in README, commit, push, and wait for the GitHub Pages deployment. Missing files show honest fallback artwork or status messages.

`assets/images/social-card.png` is the social share image. Regenerate it after a photo/name change using `scripts/make-social-card.cjs` with Playwright installed, or export a new 1200×630 PNG to the same path. `assets/favicon.svg` is the site icon.
