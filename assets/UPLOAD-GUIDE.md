# Update images

Upload each real file to the exact path below in the portfolio repository:

| Image | Path |
| --- | --- |
| Profile photo | `assets/images/profile.png` |
| IGPC 2026 certificate | `assets/certificates/igpc-2026.jpg` |
| BFS Web Crawler screenshot | `assets/projects/bfs-crawler.png` |
| Duplicate File Finder screenshot | `assets/projects/duplicate-finder.png` |
| Crop Recommendation screenshot | `assets/projects/crop-recommendation.png` |

On GitHub, open the folder, click **Add file → Upload files**, choose the file, and commit it to `main`. The next Pages deployment will include it. Refresh the site after deployment.

All five files are now uploaded and these paths are configured. Replace a file at the same path to update it. Missing files keep their placeholder/status; the browser loads each configured image directly and shows a fallback if loading fails. Do not change PNG to JPG by renaming the extension. Export it in the correct format, or change the `photo`/`image` path in `js/portfolio-data.js` to match your real filename. Paths are case-sensitive.

All eleven project screenshots, three certificate images, the profile photo, and CV are now stored in this repository. Replace the CV at `assets/cv/resume.pdf`.
