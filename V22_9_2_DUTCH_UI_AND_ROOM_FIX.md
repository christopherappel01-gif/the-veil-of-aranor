# V22.9.2 — Character creation and Dutch UI repair

## Root cause and fix

The class selector used `<option>Knight</option>`. When the Dutch attribute translator changed the option label to `Ridder`, the value sent to `createRoom`/`joinRoom` became `Ridder`, which the server rejected because its canonical class IDs are English. Both selectors now render explicit canonical option values: `<option value="Knight">Ridder</option>`. The background selector likewise preserves English IDs. A compatibility mapper handles older translated class values.

Language initialisation was also called before its translation variables had been initialised. The early call was removed and the final, already defined language setter handles initialisation. Saved-game UI initialisation is similarly delayed until the scene definitions exist.

## Extra Dutch work

Localised the class and background descriptions, hero/lobby labels, skill guidance, scene-art captions, common error messages, journal and recap headings, inventory/battle/status labels, class insights, and several structured event-log patterns. Translations are presentation-only; internal gameplay IDs and saved state are unchanged.

## Tests

- Headless Chromium DOM smoke (with a mock socket): no JavaScript page errors, Dutch Create Room sends `cls: Knight`, `background: Noble`; Dutch Join Room sends `cls: Mage`, `background: Scholar`; EN↔NL preserves canonical selection. The mock also renders the character lobby without errors.
- `node scripts/test-character-creation.mjs`: passed.
- `node scripts/test-localisation.mjs`: passed.
- `node scripts/audit-all-scenes.mjs --check`: 143 scene definitions, 1,246 fields, 0 missing Dutch scene fields.
- `node --check` client/server: passed.

## Still not guaranteed

The browser test uses mocked socket events, not a live Render multiplayer instance. Not every possible dynamically composed server message, item/gear description, journal event, finale combination, and image-embedded word has been personally observed. The canonical scene audit is not an exhaustive runtime-language certification. The existing live playtest and gameplay regression checks are still necessary.

## Extended browser rendering sweep

A Chromium test loaded the real HTML and bundled Dutch catalogue with a mock Socket.io client and Dutch selected. It exercised both character-creation buttons, switched EN→NL, simulated joining the lobby, and rendered 147 identified scene IDs with simulated one-player game state. All 147 rendered without JavaScript exceptions or page errors. This does **not** validate live server room creation, game advancement, actual multiplayer or every conditional combination; it is a client-side smoke test only. Results are in `localization/nl_browser_scene_smoke.json`.

The room-creation repair is supported by actual browser DOM behaviour: the visible label `Ridder` retained `value="Knight"` and `Magiër` retained `value="Mage"`; emitted payloads contained the English canonical IDs the server requires.
