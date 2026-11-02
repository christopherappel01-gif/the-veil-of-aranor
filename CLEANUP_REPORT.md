# V22.9 Clean Build — Change report

- Removed unused `/api/translate` DeepL server endpoint and corresponding disabled client network path. No external translation account/API required.
- Standardised HTML asset version keys and service-worker cache ID to `229-clean`; translation JS added to offline shell list.
- Kept Socket.io, save/rejoin, all gameplay data, all scene images and locally bundled translations.
- Archived historical root-level documentation, working CSVs, previous audits and temporary translation scripts outside the deployment package.
- Kept translation tooling and current coverage audit; kept text observer for legacy UI because deleting it without migrating all fields risks untranslated labels.
- Only static/syntax/reference checks are possible here; full live multiplayer requires user testing.
