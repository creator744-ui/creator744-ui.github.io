# C7 Winners — Game Art Assets (3D icons)

Drop game art here and it appears in the lobby **automatically** — no code change.
The lobby renders `/icons/games/<game-id>.webp`; if a file is missing it falls
back to the game's emoji, so nothing ever breaks.

## File spec (for the design team)
- **Format:** `.webp` (preferred) — transparent or full-bleed.
- **Filename:** exactly the **game id** below + `.webp` (lowercase, hyphens). e.g. `aviator.webp`, `football.webp`, `crazy-time.webp`.
- **Size:** **512×512 px**, square (1:1). Rendered into a rounded tile via `object-fit: cover`, so keep the subject centered with a little safe margin.
- **Style:** rich 3D rendered casino art (like the reference: Fishing Master, Chicken Road, Super 777, Power of Kraken…). Keep it readable at ~90 px.
- **Palette:** C7 Winners brand — warm **orange / gold** accents on the tile; vivid 3D.
- Keep each file ideally **< 60 KB**.

## How to add
1. Export each game as `512×512` `.webp`, named by its id.
2. Put the files in this folder (`public/icons/games/`).
3. Bump the service-worker `CACHE_VERSION` (so clients refetch) and deploy — done.

## Game ids (55) — filenames to deliver

### Crash / Spribe
`wingo` · `aviator` · `aviator-2` · `jetx` · `aviatrix` · `canado` · `zeppelin` · `crash` · `cricket-x`

### Slots
`gates-olympus` · `sweet-bonanza` · `fruit-party` · `big-bass` · `starlight` · `wolf-gold` · `wild-ape` · `book-of-dead` · `starburst` · `buffalo-king` · `uono`

### Live
`crazy-time` · `live-roulette` · `live-blackjack` · `live-baccarat` · `monopoly-live`

### Cards / Indian
`teen-patti` · `rummy` · `uno` · `ludo` · `dragon-tiger` · `andar-bahar` · `blackjack` · `baccarat` · `jhandi-munda` · `call-break`

### Instant
`mines` · `plinko` · `dice` · `hilo` · `wheel-game` · `limbo` · `keno` · `coinflip`

### Sports
`football` · `ipl-cricket` · `basketball` · `tennis` · `e-sports` · `kabaddi`

### Fishing
`happy-fishing` · `ocean-king` · `fish-hunter` · `deep-sea` · `bomb-fishing` · `dragon-king`

---
_Source of truth for ids: `src/config/games.ts`. Rendering: `src/components/casino/GameArt.tsx`._
