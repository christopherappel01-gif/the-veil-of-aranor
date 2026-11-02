# V22.7 Part 1 — Translation catalogue foundations

Part 1 has a stronger translation inventory, glossary, export CSV, import workflow, placeholder validation and a strict Dutch completeness check. **The narrative is NOT fully translated**; do not use this as the final Dutch playtest build. The existing Dutch runtime translation fallback remains.

`node scripts/nl-catalog.mjs --import localization/nl_master.csv` imports completed translations after they have been added to the CSV. `npm run nl:check` fails if any catalogue entry lacks Dutch.

Next: translate the missing entries (human review or approved DeepL API credentials), including text currently constructed dynamically, then audit gameplay and image text in Part 2.
