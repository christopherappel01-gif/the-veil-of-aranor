# V22.8 Localisation Architecture Repair

This version moves core scene rendering to `localizedScene(sceneId, lang)`, using immutable English scene definitions with the built-in translation catalogue as an explicit lookup. Scene titles, missions, narrative paragraphs, and primary choice labels/notes are translated as they are rendered. Changing language calls `refreshSceneLocale()` to update the current scene without emitting gameplay actions or changing the room state. The existing general UI observer is retained only for non-scene interface elements.

## Release limitations
This is an architectural improvement, not a fully verified Dutch release. Untranslated source strings still fall back to English. Dynamic server-generated narrative and inventory text have not been completely migrated, and end-to-end multiplayer verification is still required. No art has been altered.
