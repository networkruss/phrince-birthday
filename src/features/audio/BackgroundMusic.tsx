"use client";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BackgroundMusic() {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Do not render on print/snapshot pages
  if (pathname === "/print") return null;

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
        className={`group flex items-center gap-3 bg-[#0D1117] border-2 ${isPlaying ? 'border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'border-white/20'} p-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden max-w-[250px]`}
      >
        <div className={`p-2 rounded-full shrink-0 ${isPlaying ? 'bg-sky-500 text-white' : 'bg-white/10 text-white/50'}`}>
          {isPlaying ? <Music size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        </div>
        
        {isPlaying && (
          <div className="flex flex-col items-start pr-4 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-black uppercase tracking-tighter text-sky-400">Now Playing</p>
              {/* Animated Equalizer Bars */}
              <div className="flex items-end gap-[2px] h-3">
                <div className="w-1 bg-sky-400 animate-[bounce_1s_infinite] rounded-full"></div>
                <div className="w-1 bg-sky-400 animate-[bounce_0.8s_infinite] rounded-full" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 bg-sky-400 animate-[bounce_1.2s_infinite] rounded-full" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <p className="text-xs font-bold text-white uppercase truncate w-full">Soda Pop 🥤</p>
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
