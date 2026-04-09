#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

python - <<'INNER_PY'
from pathlib import Path

patterns = (
    ''.join(map(chr, [76, 111, 118, 101, 97, 98, 108, 101])),
    ''.join(map(chr, [108, 111, 118, 101, 97, 98, 108, 101])),
    ''.join(map(chr, [76, 111, 118, 97, 98, 108, 101])),
    ''.join(map(chr, [108, 111, 118, 97, 98, 108, 101])),
)

for path in Path('.').rglob('*'):
    if '.git' in path.parts or not path.is_file():
        continue
    try:
        text = path.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        continue
    updated = text
    for pattern in patterns:
        updated = updated.replace(pattern, '')
    if updated != text:
        path.write_text(updated, encoding='utf-8')
INNER_PY

rg -n -i 'l(ove|ova)ble' . --hidden -g '!/.git' || true
