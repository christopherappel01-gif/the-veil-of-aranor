# V22.9.1 — Dutch runtime UI repair

This update responds to the reported screenshots showing English in a Dutch-language session.

## Explicitly repaired
- Current-turn, waiting-turn and rendezvous banner; player names remain unchanged.
- Threat/pressure status warning.
- Team-roll results, success grades, skill labels, dismiss action, and related result wording.
- Empty special-item inventory message.
- Save/resume information, including localized saved-scene title. Room codes and PINs are preserved byte-for-byte.
- Class/background labels and online/away indicators in player cards.
- Key challenge/sense-check interface labels.
- Language switching re-renders the current game and refreshes saved/rejoin panel.
- Browser service-worker cache and app script/style version updated.

## Unverified
This is a targeted repair of the reported screens, not evidence that all dynamically generated English messages across every branch have been eliminated. The game still contains some authored English in additional gameplay feedback and certain server-generated strings, and a live browser multiplayer check remains necessary.

## Tests
Run `node --check public/app.js`, `node --check server.js`, `npm run test:localisation`, and `npm run nl:audit:check`.
