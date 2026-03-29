import Hero from "@/features/invitation/Hero";
import ProfileCard from "@/features/profile/ProfileCard";
import Gallery from "@/features/gallery/Gallery";
import FeatureGrid from "@/features/mechanics/FeatureGrid";
import Schedule from "@/features/timeline/Schedule";
import RsvpForm from "@/features/rsvp/RsvpForm";

export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      <Hero />
      <div className="max-w-6xl mx-auto space-y-12">
        <ProfileCard />
        <Gallery />
        <FeatureGrid />
        <Schedule />
        <RsvpForm />
      </div>
      
      <footer className="py-10 text-center opacity-30 text-[10px] uppercase tracking-[0.3em] text-sky-400">
        Phrince Vhienzyl @ 7 • Sky Blue Edition • 2026
      </footer>
    </main>
  );
}
