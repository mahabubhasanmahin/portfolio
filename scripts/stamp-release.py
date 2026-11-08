"""Version local browser modules/styles so a release uses matching files.
Usage: python3 scripts/stamp-release.py 20261108-r2
"""
from pathlib import Path
import re
import sys

version = sys.argv[1]
if not re.fullmatch(r'[A-Za-z0-9_-]+', version):
    raise SystemExit('Use letters, numbers, hyphens, or underscores for the release.')
root = Path(__file__).resolve().parents[1]
for path in (root / 'js').glob('*.js'):
    text = path.read_text()
    text = re.sub(r"(from\s+['\"])(\./[^'\"?]+\.js)(?:\?v=[^'\"]+)?(['\"])", lambda m: f'{m[1]}{m[2]}?v={version}{m[3]}', text)
    path.write_text(text)
path = root / 'index.html'
text = path.read_text()
text = re.sub(r'((?:src|href)=")(js/main\.js|css/[^"?]+\.css|assets/images/profile\.png)(?:\?v=[^"]+)?(")', lambda m: f'{m[1]}{m[2]}?v={version}{m[3]}', text)
path.write_text(text)
