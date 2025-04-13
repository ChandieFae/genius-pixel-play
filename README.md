# 🎛️ Genius Pixel Play

**Version:** 1.5 Core Build\
**Project Type:** React + Tailwind + Framer Motion + Web Audio API\
**Repository:** [github.com/ChandieFae/genius-pixel-play](https://github.com/ChandieFae/genius-pixel-play/tree/main)

**Genius Pixel Play** is the core interactive audio suite within the G-PAD system. Designed for expression, creativity, and play, it features real-time tone interaction, sound-reactive stickers, and the mystical G=Wiz glyphs—all powered by Chandiefae’s GeniusGPT.

---

## 🌟 Features

- **🎹 Synth Pad**

  - 8 playable tones (C4 to C5)
  - Click-to-play using Web Audio API

- **🎨 Sound Stickers**

  - Animated emoji-style triggers (🎧 🚀 💥 etc.)
  - Each includes a label, frequency, and animation type
  - MVP+ structure supports future use of sound files and visual effects

- **🔮 G=Wiz Glyphs**

  - Custom glyphs with magical sound + animation behaviors
  - Tap to trigger (currently logs action in dev mode)
  - Includes ✴️ Starburst, 🎷 SaxGlyph, 🔮 Mystic Orb, 💫 SpinBeat

---

## 🧠 File Structure

```
src/
├── components/
│   └── GeniusPixelPlay.tsx      # Main UI component
├── data/
│   ├── tones.ts                 # Note-to-frequency mappings
│   ├── stickers.ts              # Animated emoji sound stickers
│   └── glyphMap.ts              # G=Wiz symbol definitions
```

---

## 🚀 Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/ChandieFae/genius-pixel-play.git
cd genius-pixel-play
```

2. Install dependencies:

```bash
npm install
```

3. Launch the development server:

```bash
npm run dev
```

---

## 🔮 Coming Soon (Next Model Upgrade)

- 🔊 Full sound engine for G=Wiz glyphs
- 🎤 Voice interaction (Ask Genius to sing, hum, vocalize)
- 🧩 Custom animated sticker uploader
- 🌈 Vibe Mode with visual theming
- 🪄 Remix tools, playback FX, and user soundboard

---

## Built with 💜

 by **Chandiefae, and  GeniusGPT**\
A core module in the **G-PAD Experience Layer**

> Let the Genius sing, vibe, and play. 🎙️🎛️


