"use client";
import { useState } from "react";
import { Send, Users, UserCheck } from "lucide-react";

export default function RsvpForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const scriptUrl = "https://script.google.com/macros/s/AKfycbySTwnXZelc0_ia5hY5Tte-ZLxKwsIhGYnFLxsHzHPrZvxiGl2twXCziXp4kZ-4B78vSQ/exec";

    setLoading(true);
    
    try {
      // Get form data
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      
      const rawMessage = formData.get("message") as string;
      const robloxId = formData.get("robloxUsername") as string;
      
      const finalMessage = robloxId ? `[Roblox ID: ${robloxId}]\n\n${rawMessage}` : rawMessage;

      const data = {
        name: formData.get("guestName"),
        attendees: formData.get("attendees"),
        message: finalMessage,
      };

      // Submit to Google Sheets
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("RSVP Error:", error);
      alert("Opps! May problema sa pag-send. Pakisubukang muli.");
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-10 bg-sky-600/20 border-2 border-sky-500 rounded-3xl animate-pulse">
        <h3 className="text-2xl font-black uppercase text-sky-500">Quest Completed!</h3>
        <p className="mt-2 text-white/80">RSVP Sent. Kitakits sa party, Player! 🎮</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-xl mx-auto" id="rsvp">
      <div className="bg-[#0D1117] border-4 border-sky-600 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Confirm Attendance</h2>
          <p className="text-xs opacity-60 uppercase tracking-widest mt-2 text-white">Secure your slot in the squad</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase ml-2 flex items-center gap-2 text-white/80">
              <UserCheck size={14}/> Name of Guest
            </label>
            <input 
              name="guestName"
              required
              className="w-full bg-black/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-sky-600 outline-none transition-all text-white"
              placeholder="e.g. Builderman / Guest Name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase ml-2 flex items-center gap-2 text-white/80">
              <span className="text-[14px]">🎮</span> Roblox Username <span className="text-[10px] opacity-50 ml-1">(Optional)</span>
            </label>
            <input 
              name="robloxUsername"
              className="w-full bg-black/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-sky-600 outline-none transition-all text-white"
              placeholder="e.g. xX_DragonSlayer_Xx"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase ml-2 flex items-center gap-2 text-white/80">
              <Users size={14}/> Number of Attendees
            </label>
            <select 
              name="attendees"
              className="w-full bg-black/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-sky-600 outline-none text-white appearance-none"
            >
              <option value="1">1 Player</option>
              <option value="2">2 Players</option>
              <option value="3">3 Players (Squad)</option>
              <option value="4">4 Players (Team)</option>
              <option value="Family">Me and Family</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase ml-2 flex items-center gap-2 text-white/80">
              Message for Vhienzyl
            </label>
            <textarea 
              name="message"
              rows={3}
              className="w-full bg-black/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-sky-600 outline-none transition-all text-white resize-none"
              placeholder="Leave a sweet message or birthday wish here..."
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-black py-4 rounded-xl shadow-[0_5px_0_rgb(7,89,133)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? "Syncing..." : <>Submit RSVP <Send size={18}/></>}
          </button>
        </form>
      </div>
    </section>
  );
}
