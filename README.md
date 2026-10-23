# Denny Type

https://type.iamdenny.com

Node 22+, zero runtime dependencies. `npm run verify`; `PORT=4350 npm run dev`. Four languages, static searchable pages, browser-local processing and explicit snapshot sharing.

## Deploy

GitHub Pages via Actions. CNAME `type.iamdenny.com` → `iamdenny.github.io`. Verify `/release.json` against the deployment commit.

## Analytics and revenue

GA4 loads only on the production domain after visitor opt-in. No input text, participant names, scores or URL fragments are sent. AdSense publisher metadata and ads.txt are present; ad serving requires provider approval. Site-specific Adsterra 300×250 banners load after separate advertising permission. Normal-flow affiliate banners link to Coupang with commission disclosures. Top, bottom and both desktop rails promote Tools, Games, MODU TT and Print; mobile rails stack below content. Category blocking and actual revenue require provider evidence.

## Sharing

Links encode a snapshot; recipients can see its contents. They are not synchronized or authenticated. Local records are not verified rankings.

Coupang channel registration is pending: profile read/update failed in the provider UI. Affiliate banners remain disabled until persistent registration is verified (`coupang.channelRegistered`).

Official network banner artwork is copied unchanged from MODU TT `/brand/`, Tools `/ko/promo/`, and Games `/ko/promote/`. Source URLs are recorded in `public/banners/sources.json`. Desktop rails use 160×600 assets; mobile uses the official 320×100 variants.

## Workspace features

Passage progress follows normalized typed characters. Three text sizes persist on this device. After finishing, missed words can generate a focused review passage; the original passage remains available. Review uses final-position mistakes, not deleted keystroke history.

Focus mode expands the tool and hides surrounding promotional content until Exit focus or Escape. Default banner placements remain available. Controls and feedback are translated into English, Korean, Japanese and Spanish.
