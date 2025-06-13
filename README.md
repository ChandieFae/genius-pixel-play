# 🎛️ Genius Pixel Play

![Version](https://img.shields.io/badge/version-1.5-blueviolet)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/github/license/ChandieFae/genius-pixel-play)
[![Issues](https://img.shields.io/github/issues/ChandieFae/genius-pixel-play)](https://github.com/ChandieFae/genius-pixel-play/issues)
[![Discussions](https://img.shields.io/github/discussions/ChandieFae/genius-pixel-play)](https://github.com/ChandieFae/genius-pixel-play/discussions)

**Version:** 1.5 Core Build  
**Project Type:** React + Tailwind + Framer Motion + Web Audio API  
**Repository:** [github.com/ChandieFae/genius-pixel-play](https://github.com/ChandieFae/genius-pixel-play)

---

**Genius Pixel Play** is the core interactive audio suite within the G-PAD system. Designed for expression, creativity, and play, it features real-time tone interaction, sound-reactive stickers, and the mystical G=Wiz glyphs—all powered by Chandiefae’s GeniusGPT.

---

## 🌟 Features

### 🎹 Synth Pad
- 8 playable tones (C4 to C5)
- Click-to-play using Web Audio API

### 🎨 Sound Stickers
- Animated emoji-style triggers (🎧 🚀 💥 etc.)
- Each includes a label, frequency, and animation type
- MVP+ structure supports future use of sound files and visual effects

### 🔮 G=Wiz Glyphs
- Custom glyphs with magical sound + animation behaviors
- Tap to trigger (currently logs action in dev mode)
- Includes ✴️ Starburst, 🎷 SaxGlyph, 🔮 Mystic Orb, 💫 SpinBeat

---

## 🖼️ Screenshots

_Add screenshots or GIFs here to showcase the UI and features!_

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

## 🚀 Quick Start

1. **Clone the repo:**
    ```sh
    git clone https://github.com/ChandieFae/genius-pixel-play.git
    cd genius-pixel-play
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Launch the development server:**
    ```sh
    npm run dev
    ```

---

## 🔮 Coming Soon

- 🔊 Full sound engine for G=Wiz glyphs
- 🎤 Voice interaction (Ask Genius to sing, hum, vocalize)
- 🧩 Custom animated sticker uploader
- 🌈 Vibe Mode with visual theming
- 🪄 Remix tools, playback FX, and user soundboard

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome!  
Please [open an issue](https://github.com/ChandieFae/genius-pixel-play/issues) or join the [discussions](https://github.com/ChandieFae/genius-pixel-play/discussions).

---

Built with 💜  
by Chandra, and GPT-Genius 
_A core module in the G-PAD Experience Layer_

---

Let the Genius sing, vibe, and play. 🎙️🎛️
