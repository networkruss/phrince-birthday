"use client";
import dynamic from "next/dynamic";
import Hero from "@/features/invitation/Hero";
import ProfileCard from "@/features/profile/ProfileCard";
import FeatureGrid from "@/features/mechanics/FeatureGrid";
import Schedule from "@/features/timeline/Schedule";

const PrintActions = dynamic(() => import("@/components/PrintActions"), { 
  ssr: false,
  loading: () => <div className="h-16 flex items-center justify-center text-sky-500 font-bold uppercase tracking-widest animate-pulse">Loading Tools...</div>
});

export default function PrintPage() {
  return (
    <main className="min-h-screen bg-slate-50 print:bg-white pb-20">
      {/* 📸 WEB DASHBOARD HEADER (Hidden in Print) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 mb-4 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-sky-500 p-2 rounded-lg text-white">
              <span className="text-xl">📸</span>
            </div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tight text-slate-900 leading-tight">Snapshot Mode</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Isolated views for Pictorial & Document Copies</p>
            </div>
          </div>
          <PrintActions />
        </div>
      </header>
      
      {/* 📱 RESPONSIVE GRID (Web Style) */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 print:block print:p-0 print:m-0">
        
        {/* SECTION 1: INVITATION CARD */}
        <section className="print:break-after-page print:min-h-0 print:block flex flex-col items-center">
          <div className="w-full mb-4 flex items-center gap-2 print:hidden">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 1: Hero Card</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[420px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 overflow-hidden print:shadow-none print:border-4 print:border-dashed print:border-sky-600 print:bg-white print:mx-auto print:w-[190mm] print:max-w-none print:rounded-[3rem] print:h-auto print:overflow-visible">
            <Hero />
          </div>
        </section>

        {/* SECTION 2: PLAYER PROFILE */}
        <section className="print:break-after-page print:min-h-0 print:block flex flex-col items-center">
          <div className="w-full mb-4 flex items-center gap-2 print:hidden">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 2: Player Stats</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[650px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 p-6 print:bg-white print:border-4 print:border-dashed print:border-sky-600 print:mx-auto print:w-[200mm] print:max-w-none print:shadow-none">
             <ProfileCard />
          </div>
        </section>

        {/* SECTION 3: THE 7 TRADITIONS */}
        <section className="print:break-after-page print:min-h-0 print:block flex flex-col items-center lg:col-span-2">
          <div className="w-full mb-4 flex items-center gap-2 print:hidden">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 3: Guest Lists</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-5xl bg-slate-900 rounded-[4rem] shadow-2xl shadow-sky-900/10 p-4 md:p-8 print:bg-white print:border-4 print:border-dashed print:border-sky-600 print:mx-auto print:w-[200mm] print:max-w-none print:shadow-none">
            <FeatureGrid />
          </div>
        </section>

        {/* SECTION 4: PROGRAM FLOW */}
        <section className="print:break-after-page print:min-h-0 print:block flex flex-col items-center lg:col-span-2">
          <div className="w-full mb-4 flex items-center gap-2 print:hidden">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 4: Emcee Flow</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[600px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 p-4 md:p-10 print:bg-white print:border-4 print:border-dashed print:border-sky-600 print:mx-auto print:w-[200mm] print:max-w-none print:shadow-none">
            <Schedule />
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: letter portrait; margin: 5mm; }
          html, body { 
            background: white !important; 
            color: #0f172a !important; 
            margin: 0; padding: 0; width: 100%; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
          }
          
          /* Force dark text for visibility in print */
          h1, h2, h3, p, span, div, li { color: #0f172a !important; }
          .text-white { color: #0f172a !important; }
          .text-sky-400, .text-sky-500, .text-sky-600 { color: #0284c7 !important; }
          
          /* Background Resets */
          .bg-slate-900, .bg-\\#0D1117, .bg-\\[\\#161B22\\], .bg-slate-800\\/20, .bg-slate-800\\/10 { 
            background: #f8fafc !important; 
            border-color: #e2e8f0 !important; 
          }
          
          /* Forced Center Cards on separate pages */
          section {
            page-break-after: always;
            break-after: page;
            display: block !important;
            padding: 10mm 0 !important;
            width: 100% !important;
            margin: 0 !important;
          }
          
          svg { width: 32px !important; height: 32px !important; display: inline-block !important; }
          .mx-auto { margin-left: auto !important; margin-right: auto !important; }
          .w-full { width: 100% !important; }
          
          /* Hide glow and shadows for ink saving */
          * { box-shadow: none !important; text-shadow: none !important; filter: none !important; }
        }
      `}} />
    </main>
  );
}
