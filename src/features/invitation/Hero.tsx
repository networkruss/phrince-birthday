import { Gamepad2, Calendar, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-sky-600/20 to-transparent pointer-events-none" />
      
      {/* Level Badge */}
      <div className="relative z-10 mb-6 group animate-bounce">
        <div className="bg-sky-600 p-4 rounded-2xl border-4 border-white shadow-[0_0_20px_rgba(14,165,233,0.6)]">
          <Gamepad2 size={48} className="text-white" />
        </div>
      </div>

      {/* Main Titles */}
      <div className="relative z-10 space-y-2 mb-8">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
          Level 7 Unlocked!
        </h1>
        <div className="inline-block bg-sky-600 px-6 py-2 rounded-full border-2 border-white transform -rotate-2">
          <span className="text-xl md:text-2xl font-bold uppercase">Roblox Party</span>
        </div>
        <p className="text-lg md:text-xl text-sky-400 font-medium mt-4">
          Phrince Vhienzyl&apos;s Epic Birthday Bash
        </p>
        <p className="text-sm opacity-80 italic">Join the ultimate Roblox gaming party!</p>
      </div>

      {/* Event Details Card */}
      <div className="relative z-10 w-full max-w-md bg-[#0D1117]/80 backdrop-blur-md border-2 border-sky-600 rounded-3xl p-6 shadow-2xl">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-4 border-b border-white/10 pb-3">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold">When</p>
              <p className="font-bold">Wednesday, May 7, 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-white/10 pb-3">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold">Time</p>
              <p className="font-bold">3:00 PM - 7:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold">Where</p>
              <p className="font-bold italic">Buddha resort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
