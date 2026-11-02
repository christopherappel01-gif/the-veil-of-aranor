# V22.7 Part 2 — partial implementation, not final Dutch release

Changes:
- Expanded language-refresh coverage to the join/create/lobby/game/end screens.
- Translation of known title, placeholder, aria-label and image alt attributes, retaining English when a Dutch entry is absent.
- Language-change event and updated page/service-worker cache versions.
- Inventory of all local visual image assets (localization/image_text_audit_part2.json). The inventory is NOT a completed visual image-text audit.

Not yet verified:
- Full visual review for readable embedded text in each image.
- Actual live Dutch multiplayer path, installed PWA, and reliable rejoin on deployment.
- Narrative translation catalogue: most Dutch entries are still missing; English fallback remains.
- End-to-end UI language switching with real saved campaign state.

This is a development preview. Do not deploy as the finished Dutch version.
