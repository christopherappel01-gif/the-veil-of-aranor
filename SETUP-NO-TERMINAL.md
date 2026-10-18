# Updating the live game — no Terminal

1. Unzip the new Veil of Aranor package.
2. Open your existing `lost-expedition-rpg` repository on GitHub.
3. Upload the contents of the unzipped folder over the existing project files.
4. Commit the changes.
5. Render should detect the GitHub commit and redeploy automatically.
6. Wait until Render shows the service as **Live**.
7. Open your existing Veil of Aranor web address and test with two browsers/devices.

Your public game address should not change.

## Quick pre-game test

- Create a new room.
- Join from a second device.
- Lock both characters.
- Start the game.
- Confirm both devices see the same scene and dice result.
- Return to Main Menu and confirm the host sees Continue Adventure.
- Restore the game and use the second player's Return PIN to reconnect.



## V21 — Definitive Presentation Upgrade

This build rolls together the next major quality pass for **The Veil of Aranor**:

- broader bespoke artwork coverage across the main path and branches
- brighter, more eye-catching landing presentation
- richer audio cue pack for discoveries, battles, magic and player actions
- fantasy-styled challenge panels and selectors
- illustrated parchment map treatment for the journey panel
- stronger battle / exploration / conversation presentation states

### Added assets in this build

- new scene art pack (`public/assets/v21_*.jpg`)
- illustrated map backdrop (`public/assets/aranor_map_bg.jpg`)
- audio cue pack (`public/assets/audio/*.wav`)

### Notes

- Multiplayer logic remains the same.
- Existing save / restore flow remains in place.
- This is a presentation-and-immersion upgrade build rather than a story-structure rewrite.
