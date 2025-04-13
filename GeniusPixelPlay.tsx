// GeniusPixelPlay.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tones } from "../data/tones";
import { stickers } from "../data/stickers";
import { glyphMap } from "../data/glyphMap";

function playTone(freq: number, type: OscillatorType = "sine", volume: number = 0.5) {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.4);
}

export default function GeniusPixelPlay() {
  const [showSynth, setShowSynth] = useState(false);

  return (
    <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-purple-900 to-indigo-800 text-white w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-extrabold text-center">🎶 Genius Pixel Play</h2>

      <div className="flex justify-between items-center">
        <span className="text-sm">Toggle Advanced Modes</span>
        <button
          className="text-xs underline text-purple-300 hover:text-white"
          onClick={() => setShowSynth(!showSynth)}
        >
          {showSynth ? "Hide G=Wiz" : "Show G=Wiz"}
        </button>
      </div>

      {/* Synth Tone Grid */}
      <div className="grid grid-cols-4 gap-4">
        {tones.map((tone) => (
          <motion.button
            key={tone.name}
            whileTap={{ scale: 0.9 }}
            className="rounded-lg p-3 text-sm font-bold border border-white bg-purple-700 hover:bg-purple-600"
            onClick={() => playTone(tone.freq)}
          >
            {tone.name}
          </motion.button>
        ))}
      </div>

      {/* Sound Sticker Strip */}
      <div className="flex flex-wrap gap-3 justify-center">
        {stickers.map((sticker) => (
          <motion.button
            key={sticker.label}
            whileTap={{ scale: 1.15 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            className="text-4xl"
            onClick={() => playTone(sticker.freq)}
            title={sticker.label}
          >
            {sticker.icon}
          </motion.button>
        ))}
      </div>

      {/* G=Wiz Glyph Soundboard */}
      <AnimatePresence>
        {showSynth && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-purple-950 p-4 rounded-xl"
          >
            <h3 className="text-lg font-bold mb-3">🔮 G=Wiz Sound Glyphs</h3>
            <div className="grid grid-cols-4 gap-3">
              {glyphMap.map((glyph) => (
                <motion.div
                  key={glyph.name}
                  whileTap={{ scale: 1.25 }}
                  className="text-3xl cursor-pointer hover:text-purple-300"
                  onClick={() => console.log(`Triggering: ${glyph.behavior.sound}`)}
                  title={glyph.name}
                >
                  {glyph.symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
