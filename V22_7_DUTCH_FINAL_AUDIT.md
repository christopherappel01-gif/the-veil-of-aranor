# V22.7 Dutch final audit / release candidate

Catalogued keys: 1861. Dutch entries: 1547. Empty entries: 314.

Heuristic exception categories: {'fragment_or_identifier': 167, 'non_english_or_review': 79, 'other_or_review': 68}

**Do not call this a fully verified Dutch release.** Player-visible dynamic text and embedded image lettering still need a complete deployed multiplayer playthrough; the existing extractor includes false positives.

Code fix: re-rendered text changes while Dutch is enabled now update translation source, rather than keeping a stale source. Native select labels and accessible attributes are now included in switching.

Manual inspection of 68 `other_or_review` items found language selector labels, already-Dutch/French/German strings, and truncated JavaScript fragments—not complete English player-facing strings. This does **not** guarantee missing runtime text is zero: dynamic interpolation and embedded artwork text need live testing.
