> **V12 DEVELOPMENT HANDOFF — translations are NOT complete.** See `MULTILINGUAL-STATUS.md`. The four-language selector does not yet mean all narrative is translated.

# The Veil of Aranor — Expanded Journey Remake

A browser-based cooperative fantasy RPG for 1–6 players. This remake keeps the established dice, skills, Growth, Hope, Threat, save/return and class systems, but substantially changes the pace and structure of the campaign.

## What is new in this remake

- **Real route branches.** Several major choices now open 5–6 exclusive scenes before reconverging with the main story. The East River Road and Western Ridge, Moon Marsh and Old King’s Ridge, Sea Cliffs and Old Quarry, and High Pass and Deep Rootway are genuinely different journeys.
- **Split parties.** At selected moments the company can divide into two groups. Each group receives its own scenes, challenges and turn opportunities while the global player order continues. When both groups reach the rendezvous, the engine reunites them automatically.
- **Fog-of-war map.** The Journey panel is now a stylised map of Aranor. Explored regions emerge from the fog, dotted routes record where the company has travelled, and separated groups leave different trails.
- **Sense Checks.** Optional low-stakes checks use relevant skills to notice shortcuts, clues, safe routes, supplies or context. Missing a Sense Check does not add Threat, wound a hero or give Growth.
- **Longer travel.** Forests, marshes, ridge roads, cliffs and mountain routes now take several scenes. Travel can include camps, weather, route finding, observations and quiet choices rather than jumping directly between plot anchors.
- **Multi-stage battles.** The White City siege now unfolds across several beats. The company can even split between the western wall and the burning lower ward before reuniting for the final approach.
- **Party-size scaling.** Team challenges adapt to the number of heroes actually present in the current subgroup.
- **Shared consequences, separate experiences.** Hope, Threat, Supplies and special items remain expedition-wide, but split groups can discover different information and take different paths.

## Core rules retained

- Six classes: Knight, Ranger, Thief, Mage, Monk and Engineer
- Ten skills and 20 starting skill points
- Relevant skills are restricted by the challenge
- D6 checks with Advantage/Disadvantage at higher mastery or serious wounds
- Heroic Moments on a 6 and Unexpected Complications on a 1
- Solo, Support and Team challenges
- 5 Growth = 1 Skill Point
- Heroic Intervention
- Hope and Threat
- Save, reconnect, Return PIN and campaign backup
- Multiple endings based on discoveries, allies and choices

## Scale

The campaign now contains roughly **120 scene definitions**. A single group will not see all of them: route choices and split-party sections deliberately create different versions of the journey.

- **Cinematic landing page.** The opening screen now uses a new full-height Aranor illustration and a simpler adventure-first presentation.
- **Cleaner Sense Checks.** Sense Checks now focus on the target, relevant skill ratings, and what success or a miss means, without repeating general rules.

## Run / deploy

Use the same Node / Express / Socket.IO deployment process as earlier versions. Upload the project contents to the existing GitHub repository and redeploy on Render, or run locally with `npm install` and `npm start`.

## Voice chat & ambient audio update

This build adds optional in-browser voice chat using WebRTC, with Socket.IO used only for signalling. Players can join/leave voice independently of game state, mute themselves, and see speaking indicators. Voice requires HTTPS and browser microphone permission. The default configuration uses public STUN servers; for the most reliable production use across restrictive networks, add a TURN service in a future deployment.

The Veil of Aranor also now has procedural ambient soundscapes that change with the story location: sea, storm, shoreline waves, river, marsh, forest, caves, mountain wind and battle atmosphere. Ambience has its own toggle and does not affect voice chat.

## Dialogue & Memory Pass
This build adds consequential NPC dialogue, hidden relationship state, a People/Clues/Decisions journal, combined clue conclusions, and knowledge-based difficulty adjustments. Successful questioning now produces actual answers; failed conversations can still reveal partial information or alter trust.


## Definitive Edition V6

This build folds the flagship systems developed for The Glass Road back into The Veil of Aranor:
- slower, more character-driven opening and journey hubs
- equipment condition, service, repair, reforging and Aranorian bindings
- earned hero reputations that can affect later rolls
- stronger private clues, dialogue payoffs and clue conclusions
- more deliberate route identity and story callbacks
- hardened challenge IDs, retry handling and server acknowledgements
- reworked White City battle preparation and finale
- optional hero or NPC sacrifice at the Last Beacon, plus an earned no-sacrifice solution
- memorial epilogues and more reactive ending callbacks
- new cohesive scene-art treatment across the campaign

The campaign remains GM-less, browser-based and playable by 1–6 players.

## V9 Language support

The **Language** selector is available on the landing page and inside the game.
Both selectors use the same browser-stored preference (English, Nederlands, Français).
The opening/landing text and the first deck-pause scene include bundled Dutch and
French text. Other dynamically generated narrative, dialog, player options and
interface text can be machine-translated by configuring DeepL on Render:

1. Open your Render service → Environment.
2. Add `DEEPL_AUTH_KEY` with your DeepL API key (a free DeepL API plan can work).
3. Redeploy. No key is embedded in the site or sent to players' browsers.

If the server has no DeepL key or DeepL is unreachable, the game continues to
work but untranslated passages fall back to English. Translations are cached
in server memory. Machine-translated passages should be proofread before
considering the game fully localized. Players' chat, names, PINs and room codes
are deliberately excluded from automatic translation.


## V17 Arcana & Creative Magic
Arcana is now an eleventh allocatable skill for every class (20 starting points unchanged). Mages receive a class advantage on Arcana rolls. At the first story milestone Mages unlock Mana, usable for +1 on relevant challenges or creative spell choices at the Green Gate (1), Answering Stone (1), and Mountain Gate (2). Other classes can invest in Arcana to identify magic without becoming spellcasters. Existing save characters gain Arcana at zero until upgraded.



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
