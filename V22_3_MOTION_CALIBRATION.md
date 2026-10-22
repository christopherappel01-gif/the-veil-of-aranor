# V22.3 — Motion Calibration

The original V22.2 reduced-motion CSS rule hid Standard entirely on devices with reduced motion enabled even when the player selected Standard. Removed that suppression. The default still respects OS reduced-motion by starting in Off until the user explicitly chooses otherwise.

Rebuilt the opening sea into two separately calibrated animation files. Standard has 48% of the source frame changes and Enhanced 68%, both with identical frame timings. The existing artwork remains unchanged. Also moderated fog/glow and updated cache versions.

Test status: package, assets, source and syntax validated; production browser/Render and gameplay still require user validation.
