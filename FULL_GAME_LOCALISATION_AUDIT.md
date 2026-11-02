# Full-game Dutch localisation audit — expanded scene coverage

The preceding primary scene audit inspected only the 65 scenes in the initial `const scenes` definition. This release adds `scripts/audit-all-scenes.mjs`, which evaluates the additional `Object.assign(scenes, …)` declarations, directly assigned scenes, later text overrides and class-specific injected choices, **in source order**.

Results: 143 scene definitions, 1,246 story text fields, 787 currently covered with Dutch strings and 459 still lacking an exact Dutch catalogue match (63.2% coverage). This audit is strictly more comprehensive than the previous 583-field report, but still does not prove translation of all server-side dynamic output or embedded words in artwork.

Additional 59 previously unrecognised strings have been translated; `scripts/nl-catalog.mjs` regenerates the client dictionary. See `localization/nl_all_scenes_missing.csv` for the remaining missing fields and `localization/nl_all_scenes_audit.json` for a machine-readable summary.

## Release gate

This build **fails the translation-completeness gate** because 459 scene fields remain untranslated; it is a development/audit build only. Server-generated English gameplay strings, all class and event branch outputs, image text and actual multi-device play must be reviewed before a fully Dutch release. The prior primary-scene 100% result is insufficient because it did not include later scene modifications.

## Checks

- `node scripts/audit-all-scenes.mjs` — expanded scene audit (use `--check` to fail on missing fields).
- `node scripts/test-localisation.mjs` — explicit language render regression.
- `node --check public/app.js` and `node --check server.js` — syntax.
- `node scripts/nl-catalog.mjs` — regenerate dictionary.
