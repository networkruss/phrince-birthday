import Hero from "@/features/invitation/Hero";
import ProfileCard from "@/features/profile/ProfileCard";
import Gallery from "@/features/gallery/Gallery";
import FeatureGrid from "@/features/mechanics/FeatureGrid";
import Schedule from "@/features/timeline/Schedule";
import RsvpForm from "@/features/rsvp/RsvpForm";
import Link from "next/link";
import { Camera } from "lucide-react";
import FloatingCubes from "@/components/ui/FloatingCubes";

export default function Home() {
  return (
    <main className="grid-bg min-h-screen relative overflow-hidden">
      <FloatingCubes />
      <Hero />
      <div className="max-w-6xl mx-auto space-y-12 pb-20 relative z-10">
        <ProfileCard />
        <Gallery />
        <FeatureGrid />
        <Schedule />
        <RsvpForm />
      </div>
      
      <footer className="py-10 text-center flex flex-col items-center gap-4">
        <Link 
          href="/print"
          className="flex items-center gap-2 px-4 py-2 bg-sky-600/10 border border-sky-600/30 rounded-full text-sky-500 hover:bg-sky-600/20 transition-all text-xs font-black uppercase tracking-widest mb-4"
        >
          <Camera size={14}/> Snapshot Mode (for Printing)
        </Link>
        <p className="opacity-30 text-[10px] uppercase tracking-[0.3em] text-sky-400">
          Phrince Vhienzyl @ 7 • Sky Blue Edition • 2026
        </p>
      </footer>
    </main>
  );
}
