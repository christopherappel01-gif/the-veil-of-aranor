# V22.9 – Primary scene Dutch translations

The 395 missing field occurrences identified by the V22.9 source-level scene audit (353 unique strings) were translated into Dutch, including narration, dialogue, choices, action notes and ending passages. The existing English canonical story, gameplay logic and static artwork were not changed.

Validation:
- `npm run nl:coverage` regenerated the browser catalogue and CSV.
- `npm run nl:audit` found **583/583** primary-scene text fields translated across **65** scenes; `localization/nl_missing_scene_text.csv` has no remaining data rows.
- `npm run test:localisation` passed the scene NL→EN renderer and canonical-data immutability tests.
- `node --check server.js` and `node --check public/app.js` passed.

**Scope limitation:** 100% applies to the 65 scene definitions checked by the source-level audit, not to all dynamic server messages, optional/extra scenes, baked-in illustration labels, or a live multiplayer session. Those still require a broader audit / acceptance testing. This is a pre-playtest engineering build, not a certified final Dutch release.
