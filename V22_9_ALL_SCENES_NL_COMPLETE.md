# V22.9 — All audited story scenes translated into Dutch

This build translates the 372 distinct English phrases underlying the 406 missing scene fields identified in the previous expanded scene audit.

## Verification (2 November 2026)
- `node scripts/audit-all-scenes.mjs --check`: PASS; 143 scenes, 1,246 fields, 1,246 translated, 0 missing, 0 extraction errors.
- `node scripts/test-localisation.mjs`: PASS; explicit Dutch/English rendering, choices/dialogue, immutability of canonical scene state.
- `node --check public/app.js` and `node --check server.js`: PASS.
- Generated `public/translations.generated.js` from `translations.catalog.json`.
- Raw catalogue: 2,416/2,730 entries have Dutch values. Of the 314 blank entries, many are parser fragments or other-language strings, but they are not automatically all safe to ignore.

## Not covered by this scene audit
This is 100% coverage of text fields identified by `scripts/audit-all-scenes.mjs`, **not** a proof of 100% Dutch across every server-generated message, UI variation, embedded map label or runtime branch. A live multiplayer end-to-end test has not occurred.

## Installation
Full ZIP contains the complete project. The numbered GitHub batches together contain the same files in their relative paths. Upload all batches; don't upload the ZIP itself as a source file. Keep a backup of the stable deployed version.
