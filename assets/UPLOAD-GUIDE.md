# Upload files

| File | Path |
| --- | --- |
| Profile photo | `assets/images/profile.png` |
| CV | `assets/cv/mahin_cv.pdf` |
| Project screenshots | `assets/projects/` |
| Certificate images | `assets/certificates/` |
| Social share image | `assets/images/social-card.png` |

1. Open the folder on GitHub and choose **Add file → Upload files**.
2. Upload the real file with the exact name and type.
3. If you change a filename, update its path in `js/portfolio-data.js`.

**CV:** use **mahin_cv.pdf**. Preview and both download buttons share this file. The old `resume.pdf` is no longer used. Keep the same filename for future replacements.

**Photo:** both profile images use `profile.png`. If its filename changes, update the data file and both initial image sources in `index.html`. Transparent PNGs blend into the page background.

**Projects/certificates:** use each record's `image` path. File paths are case-sensitive; renaming an extension does not convert a file.

See the [README commands](../README.md#commands) for local preview and publishing. Publish only after approval.
