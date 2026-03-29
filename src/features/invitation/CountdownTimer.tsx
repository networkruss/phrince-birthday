"use client";
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target date: May 8, 2026, 3:00 PM (Local time)
    const targetDate = new Date("2026-05-08T15:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="relative z-10 w-full max-w-md mx-auto mb-8 print:hidden">
      <div className="bg-slate-900/80 backdrop-blur-md border-y-2 border-sky-500 py-4 px-6 relative overflow-hidden group">
        
        {/* Animated Cyber Lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50 -translate-x-full group-hover:animate-[slide_2s_linear_infinite]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50 translate-x-full group-hover:animate-[slide-reverse_2s_linear_infinite]" />

        <div className="flex items-center justify-center gap-2 mb-2 text-sky-400">
          <Timer size={16} className="animate-pulse" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em]">Server Launch In</p>
        </div>

        <div className="flex justify-center gap-3 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-2xl font-black text-sky-600/50 mt-1">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-2xl font-black text-sky-600/50 mt-1">:</span>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <span className="text-2xl font-black text-sky-600/50 mt-1">:</span>
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide { 100% { transform: translateX(100%); } }
        @keyframes slide-reverse { 100% { transform: translateX(-100%); } }
      `}} />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-3xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[8px] md:text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}
