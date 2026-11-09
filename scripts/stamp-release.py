"""Update cache versions for a portfolio release.

Run from the repository: python3 scripts/stamp-release.py YOUR_RELEASE_ID
This edits source files only; it does not commit, push, or deploy.
"""

from pathlib import Path
import re
import sys

# 1. Release name / রিলিজ: accept a simple name safe for URL query strings.
version = sys.argv[1]
if not re.fullmatch(r"[A-Za-z0-9_-]+", version):
    raise SystemExit("Use letters, numbers, hyphens, or underscores for the release.")

root = Path(__file__).resolve().parents[1]

# 2. Modules / মডিউল: make local JavaScript imports use the same cache version.
for path in (root / "js").glob("*.js"):
    text = path.read_text()
    text = re.sub(
        r"(from\s+['\"])(\./[^'\"?]+\.js)(?:\?v=[^'\"]+)?(['\"])",
        lambda match: f"{match[1]}{match[2]}?v={version}{match[3]}",
        text,
    )
    path.write_text(text)

# 3. Initial HTML / শুরুর পেজ: version styles, entry module, and profile images.
path = root / "index.html"
text = path.read_text()
text = re.sub(
    r'((?:src|href)=")(js/main\.js|css/[^"?]+\.css|assets/images/profile\.png)'
    r'(?:\?v=[^"]+)?(")',
    lambda match: f"{match[1]}{match[2]}?v={version}{match[3]}",
    text,
)
path.write_text(text)
