"use client";
import React from "react";

export default function PrintActions() {
  const handleDownloadPDF = async () => {
    // Dynamic import inside event handler - only triggers in browser
    const { generateInvitationPDF } = await import("@/utils/pdf-generator");
    await generateInvitationPDF();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
      <button 
        onClick={() => window.print()}
        className="w-64 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest border border-white/10 transition-transform active:scale-95 shadow-xl"
      >
        Print Snapshots 🖨️
      </button>
      
      <button 
        onClick={handleDownloadPDF}
        className="w-64 bg-sky-600 hover:bg-sky-500 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-transform active:scale-95"
      >
        Download PDF 📄
      </button>
    </div>
  );
}
