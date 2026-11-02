# V22.6 Playtest Edition — audit and limitations

- Preserved V22.5 static artwork and game state logic.
- Added in-game playtest feedback form (client-side copy; no data sent to server).
- Added team help, chapter labels and entry to the existing 5-step how-to-play guide.
- Improved story paragraph spacing.
- Reused existing save/rejoin machinery; no change to persistence contract or unverified multiplayer stability claim.
- Dutch: core help, playtest UI and existing authored translations work. However, existing translations.catalog.json does **not** contain a complete Dutch translation. Complete narrative localisation requires translating all missing catalogue entries (e.g. via a configured DeepL key, `DEEPL_AUTH_KEY`, and running `npm run translations:sync`).
- Text-in-image audit: all JPEGs are retained; no automatic claim that embedded text was translated.
- Switching languages still depends on catalogue coverage and cannot be called seamless until the missing Dutch entries are filled and dynamic strings audited.
