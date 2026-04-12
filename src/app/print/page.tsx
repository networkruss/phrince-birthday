"use client";
import dynamic from "next/dynamic";
import Hero from "@/features/invitation/Hero";
import ProfileCard from "@/features/profile/ProfileCard";
import FeatureGrid from "@/features/mechanics/FeatureGrid";
import Schedule from "@/features/timeline/Schedule";
import { partyData, timelineData } from "@/data/party-info";
import { Gamepad2, Calendar, Clock, MapPin } from "lucide-react";

const PrintActions = dynamic(() => import("@/components/PrintActions"), { 
  ssr: false,
  loading: () => <div className="h-16 flex items-center justify-center text-sky-500 font-bold uppercase tracking-widest animate-pulse">Loading Tools...</div>
});

export default function PrintPage() {
  return (
    <main className="min-h-screen bg-slate-50 print:bg-white pb-20 print:pb-0">
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
      
      {/* ========== WEB VIEW (Hidden in Print) ========== */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 print:hidden">
        
        {/* SECTION 1: INVITATION CARD */}
        <section className="flex flex-col items-center">
          <div className="w-full mb-4 flex items-center gap-2">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 1: Hero Card</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[420px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 overflow-hidden">
            <Hero />
          </div>
        </section>

        {/* SECTION 2: PLAYER PROFILE */}
        <section className="flex flex-col items-center">
          <div className="w-full mb-4 flex items-center gap-2">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 2: Player Stats</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[650px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 p-6">
             <ProfileCard />
          </div>
        </section>

        {/* SECTION 3: THE 7 TRADITIONS */}
        <section className="flex flex-col items-center lg:col-span-2">
          <div className="w-full mb-4 flex items-center gap-2">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 3: Guest Lists</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-5xl bg-slate-900 rounded-[4rem] shadow-2xl shadow-sky-900/10 p-4 md:p-8">
            <FeatureGrid />
          </div>
        </section>

        {/* SECTION 4: PROGRAM FLOW */}
        <section className="flex flex-col items-center lg:col-span-2">
          <div className="w-full mb-4 flex items-center gap-2">
            <span className="h-px flex-grow bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase px-3 py-1 border border-slate-200 rounded-full">Section 4: Emcee Flow</span>
            <span className="h-px flex-grow bg-slate-200" />
          </div>
          <div className="w-full max-w-[600px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-sky-900/10 p-4 md:p-10">
            <Schedule />
          </div>
        </section>
      </div>

      {/* ========== PRINT-ONLY LAYOUT (Hidden on Web) ========== */}
      <div id="print-page" className="hidden print:block">
        {/* Top Row: Hero + Profile side by side */}
        <div className="print-row">
          {/* CARD 1: INVITATION */}
          <div className="print-card">
            <div className="print-card-header">
              <Gamepad2 size={14} className="print-icon" />
              <span>INVITATION</span>
            </div>
            <div className="print-card-body" style={{ textAlign: "center" }}>
              <h2 className="print-title" style={{ fontSize: "14pt", marginBottom: "2px" }}>LEVEL 7 UNLOCKED!</h2>
              <div className="print-badge">ROBLOX PARTY</div>
              <p style={{ fontSize: "7pt", color: "#0284c7", margin: "3px 0 1px" }}>
                Phrince Vhienzyl&apos;s Epic Birthday Bash
              </p>
              <p style={{ fontSize: "6pt", color: "#94a3b8", fontStyle: "italic", margin: "0 0 6px" }}>
                Join the ultimate Roblox gaming party!
              </p>
              
              <div className="print-details-box">
                <div className="print-detail-row">
                  <Calendar size={12} className="print-icon" />
                  <div><span className="print-label">WHEN</span><br/>Friday, May 8, 2026</div>
                </div>
                <div className="print-detail-row">
                  <Clock size={12} className="print-icon" />
                  <div><span className="print-label">TIME</span><br/>3:00 PM - 6:00 PM</div>
                </div>
                <div className="print-detail-row" style={{ borderBottom: "none" }}>
                  <MapPin size={12} className="print-icon" />
                  <div><span className="print-label">WHERE</span><br/>Buddha Resort</div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: PLAYER PROFILE */}
          <div className="print-card">
            <div className="print-card-header">
              <span>🎮</span>
              <span>PLAYER PROFILE</span>
            </div>
            <div className="print-card-body" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/phrince-roblox-skyblue.png" 
                  alt="Phrince"
                  style={{ width: "85px", height: "85px", objectFit: "cover", borderRadius: "10px", border: "2px solid #0284c7" }}
                />
                <div style={{ textAlign: "center", fontSize: "5pt", fontWeight: 800, background: "#0284c7", color: "white", borderRadius: "6px", padding: "1px 4px", marginTop: "3px" }}>
                  🏆 LEVEL 7
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 className="print-title" style={{ fontSize: "11pt", marginBottom: "4px", textAlign: "left" }}>
                  Phrince Vhienzyl<br/>Dela Cruz
                </h2>
                <div style={{ fontSize: "7pt", lineHeight: 1.5 }}>
                  <p>🎂 <strong>Age:</strong> Turning 7!</p>
                  <p>📅 <strong>Birthday:</strong> May 8, 2026</p>
                  <p>👕 <strong>Costume:</strong> Sky Blue Edition</p>
                  <p style={{ color: "#0284c7", fontWeight: 700, fontStyle: "italic", marginTop: "3px" }}>
                    ⭐ Dream: Mechanical Engineer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Traditions + Program Flow */}
        <div className="print-row" style={{ flex: 1 }}>
          {/* CARD 3: THE 7 TRADITIONS */}
          <div className="print-card" style={{ flex: 1.4 }}>
            <div className="print-card-header">
              <span>✨</span>
              <span>THE 7 TRADITIONS</span>
            </div>
            <div className="print-card-body">
              <div className="traditions-grid">
                {partyData.map((box, idx) => (
                  <div key={idx} className="tradition-box">
                    <div className="tradition-title">
                      {box.title}
                    </div>
                    <div className="tradition-items">
                      {box.items.map((name, i) => (
                        <div key={i} className="tradition-item">
                          <span className="tradition-num">{i + 1}</span>
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4: PROGRAM FLOW */}
          <div className="print-card" style={{ flex: 0.6 }}>
            <div className="print-card-header">
              <span>📋</span>
              <span>PROGRAM FLOW</span>
            </div>
            <div className="print-card-body">
              <table className="program-table">
                <thead>
                  <tr>
                    <th>TIME</th>
                    <th>ACTIVITY</th>
                    <th>✓</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, i) => (
                    <tr key={i}>
                      <td className="program-time">{item.time}</td>
                      <td>
                        <strong>{item.task}</strong>
                        <br/>
                        <span className="program-sub">{item.sub}</span>
                      </td>
                      <td className="program-check">☐</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { 
            size: letter landscape; 
            margin: 4mm; 
          }
          html, body { 
            background: white !important; 
            margin: 0 !important; padding: 0 !important;
            width: 100% !important; height: 100% !important;
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important;
          }
          * { box-shadow: none !important; text-shadow: none !important; }
          
          main {
            min-height: auto !important;
            height: 100vh !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* ===== PRINT PAGE STRUCTURE ===== */
          #print-page {
            display: flex !important;
            flex-direction: column !important;
            flex: 1 !important;
            gap: 3mm !important;
            padding: 0 !important;
            height: 100% !important;
          }

          .print-row {
            display: flex !important;
            gap: 3mm !important;
            flex: 1 !important;
            min-height: 0 !important;
          }

          .print-card {
            flex: 1 !important;
            border: 1.5pt solid #0284c7 !important;
            border-radius: 8px !important;
            display: flex !important;
            flex-direction: column !important;
            overflow: hidden !important;
            min-height: 0 !important;
          }

          .print-card-header {
            background: #0284c7 !important;
            color: white !important;
            padding: 3px 8px !important;
            font-size: 7pt !important;
            font-weight: 900 !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            flex-shrink: 0 !important;
          }
          .print-card-header span,
          .print-card-header svg { color: white !important; }

          .print-card-body {
            padding: 6px 8px !important;
            flex: 1 !important;
            overflow: hidden !important;
            color: #0f172a !important;
            font-size: 7pt !important;
            min-height: 0 !important;
          }
          .print-card-body * {
            color: #0f172a !important;
          }

          .print-icon {
            width: 12px !important;
            height: 12px !important;
            color: white !important;
          }

          .print-title {
            font-weight: 900 !important;
            text-transform: uppercase !important;
            color: #0f172a !important;
            margin: 0 !important;
          }

          .print-badge {
            display: inline-block !important;
            background: #0284c7 !important;
            color: white !important;
            font-size: 7pt !important;
            font-weight: 800 !important;
            padding: 1px 8px !important;
            border-radius: 4px !important;
            text-transform: uppercase !important;
          }

          /* Event details box */
          .print-details-box {
            border: 1pt solid #bae6fd !important;
            border-radius: 6px !important;
            padding: 4px 6px !important;
            text-align: left !important;
            background: #f0f9ff !important;
          }
          .print-detail-row {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            padding: 2px 0 !important;
            border-bottom: 0.5pt solid #e0f2fe !important;
            font-size: 7pt !important;
          }
          .print-detail-row svg {
            color: #0284c7 !important;
            flex-shrink: 0 !important;
          }
          .print-label {
            font-size: 5pt !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            color: #64748b !important;
          }

          /* ===== TRADITIONS GRID ===== */
          .traditions-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            grid-template-rows: auto auto !important;
            gap: 2mm !important;
          }

          .tradition-box {
            border: 0.75pt solid #bae6fd !important;
            border-radius: 4px !important;
            overflow: hidden !important;
          }

          .tradition-title {
            background: #0284c7 !important;
            color: white !important;
            font-size: 5.5pt !important;
            font-weight: 800 !important;
            padding: 1.5px 4px !important;
            text-transform: uppercase !important;
            text-align: center !important;
          }

          .tradition-items {
            padding: 2px 3px !important;
          }

          .tradition-item {
            display: flex !important;
            align-items: center !important;
            gap: 2px !important;
            font-size: 5.5pt !important;
            line-height: 1.4 !important;
            padding: 0.5px 0 !important;
            color: #0f172a !important;
          }

          .tradition-num {
            background: #e0f2fe !important;
            color: #0284c7 !important;
            width: 10px !important;
            height: 10px !important;
            border-radius: 2px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 5pt !important;
            font-weight: 800 !important;
            flex-shrink: 0 !important;
          }

          /* ===== PROGRAM TABLE ===== */
          .program-table {
            width: 100% !important;
            border-collapse: collapse !important;
            font-size: 6.5pt !important;
          }
          .program-table th {
            background: #f0f9ff !important;
            color: #0284c7 !important;
            font-size: 5.5pt !important;
            font-weight: 800 !important;
            padding: 2px 4px !important;
            text-align: left !important;
            border-bottom: 1pt solid #bae6fd !important;
          }
          .program-table td {
            padding: 3px 4px !important;
            border-bottom: 0.5pt solid #e2e8f0 !important;
            vertical-align: top !important;
            color: #0f172a !important;
          }
          .program-time {
            font-weight: 800 !important;
            color: #0284c7 !important;
            white-space: nowrap !important;
            font-size: 6pt !important;
          }
          .program-sub {
            font-size: 5.5pt !important;
            color: #64748b !important;
            font-style: italic !important;
          }
          .program-check {
            text-align: center !important;
            font-size: 8pt !important;
          }
        }

        /* Hide the print layout on screen */
        @media screen {
          #print-page { display: none !important; }
        }
      `}} />
    </main>
  );
}
