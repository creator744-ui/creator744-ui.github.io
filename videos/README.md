# Live Casino video clips

Short looping casino video clips for the `/live` page's HDR4K
stream panels. Pulled from Pexels (free, no attribution required),
trimmed to 8s, scaled to 480×270, h264 + yuv420p + faststart,
audio stripped.

## Current files

| File | Size | Source | Subject |
|---|---|---|---|
| `roulette.mp4`  | ~170 KB | [Pexels #7607440](https://www.pexels.com/video/7607440) | Roulette wheel/table |
| `blackjack.mp4` | ~70 KB  | [Pexels #6813862](https://www.pexels.com/video/6813862) | Blackjack cards being dealt |
| `baccarat.mp4`  | ~126 KB | [Pexels #7607954](https://www.pexels.com/video/7607954) | Baccarat table |
| `shows.mp4`     | ~585 KB | [Pexels #36116715](https://www.pexels.com/video/36116715) | Neon casino lights |

All ~480×270, 8s loops, h264, yuv420p, audio stripped. Total ~950 KB.

## Wiring

```ts
// src/pages/CasinoLive.tsx
const VIDEO_SOURCES = {
  roulette:  '/videos/roulette.mp4',
  blackjack: '/videos/blackjack.mp4',
  baccarat:  '/videos/baccarat.mp4',
  shows:     '/videos/shows.mp4',
};
```

Coming-soon tables also use videos — the COMING SOON badge stays
visible, video plays underneath as a preview tease.

## Replace with your own studio footage

```bash
ffmpeg -i source.mov -t 8 \
  -vf "scale=480:-2,format=yuv420p" \
  -c:v libx264 -preset slow -crf 30 \
  -an -movflags +faststart \
  roulette.mp4
```

## Pexels API recipe

```bash
KEY="<your-pexels-api-key>"
curl -H "Authorization: $KEY" \
  "https://api.pexels.com/videos/search?query=roulette&per_page=5&size=medium"
```

Pick a video, grab the SD-resolution `link`, download with the
same Authorization header, then transcode per recipe above.

Free tier: 200 requests/hour. Free license, no attribution required.
