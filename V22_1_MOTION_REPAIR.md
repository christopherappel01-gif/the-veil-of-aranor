# V22.1 Ambient Motion Repair

**Root cause found:** the V22 sea video was encoded as MPEG-4 Part 2 (`mp4v`) despite its .mp4 extension, which many browsers do not decode via HTML5 video. It has been re-encoded as browser-friendly H.264 (`avc1`), yuv420p, with fast-start metadata.

- Cache identifiers bumped and `app.js` script reference updated.
- Video is preloaded and its motion layer is kept above static artwork.
- Mist and glowing ambient effects made slightly more visible.
- Motion initialization runs if page is already loaded.
- Effects other than sea remain *CSS ambient overlays*, not fully animated artwork.
