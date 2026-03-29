import { Gamepad2, Calendar, MapPin, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section className="relative min-h-screen print:min-h-0 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-sky-600/20 to-transparent pointer-events-none" />
      
      {/* Level Badge */}
      <div className="relative z-10 mb-6 group animate-bounce print:animate-none">
        <div className="bg-sky-600 p-4 rounded-2xl border-4 border-white shadow-[0_0_20px_rgba(14,165,233,0.6)] print:shadow-none print:w-16 print:h-16 print:p-2 flex items-center justify-center">
          <Gamepad2 size={48} className="text-white print:w-10 print:h-10" />
        </div>
      </div>

      {/* Main Titles */}
      <div className="relative z-10 space-y-2 mb-8">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-lg print:text-slate-900 print:drop-shadow-none">
          Level 7 Unlocked!
        </h1>
        <div className="inline-block bg-sky-600 px-6 py-2 rounded-full border-2 border-white transform -rotate-2 print:bg-sky-100 print:border-sky-600">
          <span className="text-xl md:text-2xl font-bold uppercase print:text-sky-600">Roblox Party</span>
        </div>
        <p className="text-lg md:text-xl text-sky-400 font-medium mt-4 print:text-slate-700">
          Phrince Vhienzyl&apos;s Epic Birthday Bash
        </p>
        <p className="text-sm opacity-80 italic print:text-slate-500 mb-8">Join the ultimate Roblox gaming party!</p>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Event Details Card */}
      <div className="relative z-10 w-full max-w-md bg-[#0D1117]/80 backdrop-blur-md border-2 border-sky-600 rounded-3xl p-6 shadow-2xl print:bg-white print:text-slate-900 print:shadow-none print:border-4">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-4 border-b border-white/10 pb-3 print:border-slate-100">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500 print:bg-sky-50 print:text-sky-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold print:opacity-70">When</p>
              <p className="font-bold print:text-slate-900">Thursday, May 8, 2026</p>
            </div>
          </div>
 
          <div className="flex items-center gap-4 border-b border-white/10 pb-3 print:border-slate-100">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500 print:bg-sky-50 print:text-sky-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold print:opacity-70">Time</p>
              <p className="font-bold print:text-slate-900">3:00 PM - 6:00 PM</p>
            </div>
          </div>
 
          <div className="flex items-center gap-4">
            <div className="bg-sky-600/20 p-2 rounded-lg text-sky-500 print:bg-sky-50 print:text-sky-600">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50 font-bold print:opacity-70">Where</p>
              <p className="font-bold italic print:text-slate-900">Buddha resort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
