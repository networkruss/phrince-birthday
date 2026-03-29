import { Star, Trophy, Target, Gamepad } from "lucide-react";

export default function ProfileCard() {
  const badges = [
    { label: "Robux Master", icon: <Star size={16} />, color: "bg-sky-600" },
    { label: "Top Player", icon: <Trophy size={16} />, color: "bg-slate-700" },
    { label: "Game Hero", icon: <Target size={16} />, color: "bg-sky-500" },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-sky-600/10 border-2 border-sky-600 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-[0_0_30px_rgba(14,165,233,0.2)]">
        
        {/* Photo Slot */}
        <div className="relative group">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl border-4 border-white overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-xl">
            <img 
              src="/phrince-roblox-skyblue.png"
              alt="Phrince Vhienzyl"
              className="w-full h-full object-cover bg-slate-800"
            />
            <div className="absolute top-2 right-2 bg-sky-600 text-[10px] font-black px-3 py-1 rounded-full border border-white uppercase">
              Level 7
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-sky-600 text-xs font-bold whitespace-nowrap uppercase tracking-widest">
            🏆 Pro Gamer
          </div>
        </div>

        {/* Stats Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="bg-sky-600 inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-2">
            Player Profile 🎮
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Phrince Vhienzyl <br className="hidden md:block" /> Dela Cruz
          </h2>
          
          <div className="space-y-2 opacity-90 text-sm md:text-base">
            <p className="flex items-center justify-center md:justify-start gap-2">
              🎂 <span className="font-bold">Age:</span> Turning 7!
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              📅 <span className="font-bold">Birthday:</span> May 7, 2026
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              👕 <span className="font-bold">Costume:</span> Epic Sky Blue Edition
            </p>
            <p className="text-sky-400 font-bold italic pt-2">
              ⭐ Dream: Become a Mechanical Engineer!
            </p>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
            {badges.map((b) => (
              <div key={b.label} className={`${b.color} flex items-center gap-2 px-3 py-1 rounded-lg text-[10px] font-bold uppercase border border-white/20`}>
                {b.icon} {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
