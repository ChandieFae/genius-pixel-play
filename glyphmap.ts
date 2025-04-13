// glyphMap.ts
// Contains musical glyph definitions for G=Wiz: sound-reactive, animated symbols used in Genius interactions

export const glyphMap = [
  {
    symbol: "✴️",
    name: "Starburst",
    behavior: {
      sound: "twinkle.mp3",
      animation: "twist",
    },
  },
  {
    symbol: "🎷",
    name: "SaxGlyph",
    behavior: {
      sound: "sax-loop.wav",
      animation: "slide",
    },
  },
  {
    symbol: "🔮",
    name: "Mystic Orb",
    behavior: {
      sound: "chime-sweep.ogg",
      animation: "glow",
    },
  },
  {
    symbol: "💫",
    name: "SpinBeat",
    behavior: {
      sound: "spin-beat.mp3",
      animation: "spin",
    },
  },
];
