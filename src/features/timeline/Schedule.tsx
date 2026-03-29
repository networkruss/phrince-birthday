import { Utensils, Music, Trophy, Camera, PartyPopper, Sparkles, Gamepad2 } from "lucide-react";

const timelineData = [
  { time: "3:00 PM", task: "Arrival of Guests", sub: "Welcome & Photo Ops", icon: <Camera size={18}/> },
  { time: "3:30 PM", task: "Grand Entrance", sub: "Tuazon & Dela Cruz Family", icon: <PartyPopper size={18}/> },
  { time: "3:45 PM", task: "Soda Pop Performance", sub: "Special Opening Song - Phrince Vhienzyl", icon: <Music size={18}/> },
  { time: "4:00 PM", task: "Opening Prayer", sub: "Led by Emcee Clown", icon: <Sparkles size={18}/> },
  { time: "4:15 PM", task: "Main Program", sub: "Games & Special Numbers", icon: <Gamepad2 size={18}/> },
  { time: "5:00 PM", task: "Birthday Feast", sub: "Dinner is Served", icon: <Utensils size={18}/> },
  { time: "6:00 PM", task: "7 Traditions", sub: "Cake, Gifts, & Wishes", icon: <Trophy size={18}/> },
];

export default function Schedule() {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-black text-center uppercase mb-12 tracking-tight">
        Program <span className="text-sky-600 underline">Flow</span>
      </h2>
      
      <div className="relative border-l-4 border-sky-600/30 ml-4 md:ml-0">
        {timelineData.map((item, i) => (
          <div key={i} className="mb-10 ml-8 relative">
            {/* Dot on the line */}
            <div className="absolute -left-[44px] top-1 bg-sky-600 w-8 h-8 rounded-full border-4 border-black flex items-center justify-center text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              {item.icon}
            </div>
            
            <div className="bg-[#161B22] border border-white/10 p-5 rounded-2xl shadow-xl transform transition-hover hover:border-sky-600/50">
              <span className="text-sky-500 font-black text-sm tracking-widest">{item.time}</span>
              <h3 className="text-xl font-bold text-white mt-1">{item.task}</h3>
              <p className="text-sm opacity-60 italic">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
