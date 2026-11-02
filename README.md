# The Veil of Aranor — V22.9 Clean Build

Run `npm install` then `npm start` (or deploy via Render). English is the initial language; each player can select Nederlands independently. Socket.io is required for multiplayer. Local translation files are bundled; this build makes no DeepL requests.

For checks: `npm run test:localisation`, `npm run nl:audit:check`, `npm run nl:check`. The `scripts/` directory is retained because checks and catalogue regeneration require it.

This cleanup does not certify multiplayer behaviour or the translation of every server-generated message. Historical reports are distributed separately in the development archive.
