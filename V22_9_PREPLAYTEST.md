# V22.9 pre-playtest engineering pass

- Core scene fields render from immutable English scene definitions via locale lookup.
- A language change rerenders the current game without socket messages or mutating room state.
- Journal, recap, recent game events, NPC and combat UI use explicit translation-at-display boundaries where possible.
- Legacy DOM observer no longer rewrites scene title, text, objective and choice elements.
- Added opening and early-storm Dutch translations, plus several repeated UI headings.
- Run `npm run nl:audit` for reproducible scene coverage and missing-string reports.
- Live multiplayer, image-by-image lettering and all non-scene dynamic narrative remain acceptance risks. Do not claim complete Dutch coverage until reports have zero actionable missing entries and playtesting passes.
