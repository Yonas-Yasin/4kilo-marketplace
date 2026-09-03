"""Stamp a version query onto every local CSS/JS link.

GitHub Pages serves assets with Cache-Control: max-age=600, so a browser will
reuse a stale stylesheet for up to ten minutes after a deploy. Changing the URL
sidesteps that entirely: a new ?v= value is a new URL, so it is always fetched.

Run with a version number:  python bump.py 5
"""
import io, os, re, sys

ROOT = r"c:\Users\0913\Desktop\4KILO MARKETPLACE"
version = sys.argv[1] if len(sys.argv) > 1 else "1"

PATTERNS = [
    # href="assets/css/styles.css"  /  href="assets/img/favicon.svg"
    (re.compile(r'(href=")(assets/[^"?]+\.(?:css|svg))(?:\?v=[^"]*)?(")'), 'href'),
    # src="assets/js/app.js"
    (re.compile(r'(src=")(assets/[^"?]+\.js)(?:\?v=[^"]*)?(")'), 'src'),
]

total = 0
for name in sorted(os.listdir(ROOT)):
    if not name.endswith(".html"):
        continue
    path = os.path.join(ROOT, name)
    with io.open(path, encoding="utf-8") as f:
        html = f.read()
    before = html
    n = 0
    for rx, _ in PATTERNS:
        html, k = rx.subn(lambda m: m.group(1) + m.group(2) + "?v=" + version + m.group(3), html)
        n += k
    if html != before:
        with io.open(path, "w", encoding="utf-8", newline="") as f:
            f.write(html)
    print("%-16s %d link(s) stamped ?v=%s" % (name, n, version))
    total += n

print("\ntotal:", total)
