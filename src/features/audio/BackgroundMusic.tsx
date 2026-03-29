"use client";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Note: Most browsers block autoplay. Use a toggle button.
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hidden YouTube Player (using embed URL with autoplay parameter) */}
      <iframe
        ref={playerRef}
        className="hidden"
        src={`https://www.youtube.com/embed/983bBbJx0Mk?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=983bBbJx0Mk`}
        allow="autoplay"
      ></iframe>

      {/* Floating Control Button */}
      <button
        onClick={toggleMusic}
        className={`group flex items-center gap-3 bg-[#0D1117] border-2 ${isPlaying ? 'border-sky-500' : 'border-white/20'} p-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300`}
      >
        <div className={`p-2 rounded-full ${isPlaying ? 'bg-sky-500 text-white animate-pulse' : 'bg-white/10 text-white/50'}`}>
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>
        
        {isPlaying && (
          <div className="pr-4 overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap">
            <p className="text-[10px] font-black uppercase tracking-tighter text-sky-400">Now Playing</p>
            <p className="text-xs font-bold text-white uppercase">Soda Pop 🥤</p>
          </div>
        )}
      </button>

      {/* Floating Info (Optional) */}
      {!isPlaying && (
        <div className="absolute -top-12 right-0 bg-sky-600 text-white text-[10px] font-black px-3 py-1 rounded-full animate-bounce whitespace-nowrap border border-white shadow-lg pointer-events-none">
          Click for Music! 🎵
        </div>
      )}
    </div>
  );
}
