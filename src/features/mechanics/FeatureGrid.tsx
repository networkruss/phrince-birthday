import { Gift, Heart, Music, Sparkles, Star, ShoppingBag, Banknote, Balloon } from "lucide-react";
import { partyData } from "@/data/party-info";

export default function FeatureGrid() {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">The ✨ <span className="text-sky-500 underline">7 Traditions</span></h2>
        <div className="bg-sky-600 inline-block px-6 py-2 rounded-full font-bold text-sm uppercase border-2 border-white shadow-lg transform -rotate-1">
          Celebrating Phrince&apos;s Level 7 Milestone!
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {partyData.map((box) => (
          <div key={box.title} className={`${box.color} border-2 border-white/20 rounded-3xl p-6 shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:border-sky-400/50`}>
            <div className="flex items-center gap-3 mb-6 bg-white/10 w-fit px-4 py-2 rounded-2xl border border-white/10">
              {box.icon}
              <h3 className="font-black text-lg uppercase tracking-tight">{box.title}</h3>
            </div>
            <ul className="space-y-3">
              {box.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-90">
                  <span className="bg-black/30 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold border border-white/10 text-sky-400">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
