# C7Winner Sound Assets

The c7 theme catalogues 8 sound files at these paths. **You do not need to add
real MP3 files for sounds to work** — `useSound` automatically falls back to a
Web Audio API synthesizer (`src/lib/sound-synth.ts`) that generates pleasant
casino sounds procedurally.

## Behavior

1. `useSound.play('jackpot')` tries to play `/sounds/jackpot.mp3`
2. If the file 404s (or any playback error), the synth fires instead
3. After a single failure for a given URL, future calls skip the file fetch
   and go straight to the synth

This means:
- **Out of the box:** sounds work via the synth (zero audio bytes shipped)
- **Add real MP3s later:** drop them into this directory and they'll be used

## Expected files

| Path                          | When it plays                           | Synth fallback              |
|-------------------------------|-----------------------------------------|----------------------------|
| `/sounds/intro-theme.mp3`     | Optional welcome/intro                  | C major arpeggio           |
| `/sounds/click.mp3`           | Every button tap                        | Short square-wave tick     |
| `/sounds/jackpot.mp3`         | LuckyWheel JACKPOT, jackpot RewardPopup | C–E–G–C ascending + chord  |
| `/sounds/win.mp3`             | LuckyWheel rare win, big RewardPopup    | C major triad chord        |
| `/sounds/notification.mp3`    | Bell click, notification appears        | Two-tone bell              |
| `/sounds/spin-start.mp3`      | LuckyWheel SPIN pressed                 | Rising sawtooth + noise    |
| `/sounds/spin-end.mp3`        | LuckyWheel settles on prize             | Descending triangle        |
| `/sounds/coin.mp3`            | Small reward, normal RewardPopup        | Metallic triangle ping     |

## Recommended specs (if adding real files)

- Format: MP3 at 128 kbps
- Length: 100–600 ms (avoid >1s — feels laggy)
- Peak volume: -6 dBFS (the synth caps at gain 0.25, so MP3s should match)
- License: must be royalty-free for commercial use

Sources to consider:
- https://mixkit.co/free-sound-effects/casino/ (free, commercial use OK)
- https://freesound.org/ (CC0 / CC-BY licenses — check each file)
- https://www.zapsplat.com/ (free with attribution)

## Testing

```ts
import { useSound } from '@/hooks/useSound';

function MyButton() {
  const { play, muted, toggleMute } = useSound();
  return (
    <button onClick={() => play('jackpot')}>
      Test Jackpot Sound
    </button>
  );
}
```

The first click after page load will unlock the Web Audio context (browser
autoplay policy). Subsequent sounds play immediately.

## Mute / volume

The hook persists mute state and volume to `localStorage`:
- `c7-sound-muted` — `"1"` or `"0"`
- `c7-sound-volume` — float `0`–`1`

Users can toggle via `toggleMute()` or set with `setVolume(0.8)`.
