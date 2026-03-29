import { partyData, timelineData } from "../data/party-info";

export const generateInvitationPDF = async () => {
  try {
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "letter", // 8.5 x 11 inches (215.9 x 279.4 mm)
    });

    const skyBlue: [number, number, number] = [2, 132, 199];
    const centerX = 108; // 216mm / 2
    const pageWidth = 216;
    const pageHeight = 279;

    // --- Page 1: Hero ---
    doc.setFillColor(...skyBlue);
    doc.rect(0, 0, pageWidth, 25, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("PHRINCE VHIIENZYL @ 7", centerX, 15, { align: "center" });

    doc.setTextColor(...skyBlue);
    doc.setFontSize(26);
    doc.text("LEVEL 7 UNLOCKED!", centerX, 45, { align: "center" });
    
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(14);
    doc.text("Phrince Vhienzyl's Epic Birthday Bash", centerX, 55, { align: "center" });

    doc.setDrawColor(...skyBlue);
    doc.setLineWidth(1);
    doc.line(centerX - 65, 65, centerX + 65, 65);

    autoTable(doc, {
      startY: 75,
      head: [["EVENT DETAILS", "INFORMATION"]],
      body: [
        ["DATE", "Thursday, May 8, 2026"],
        ["TIME", "3:00 PM - 6:00 PM"],
        ["VENUE", "Buddha Resort"],
        ["THEME", "Roblox - Sky Blue Edition"],
      ],
      theme: "striped",
      headStyles: { fillColor: skyBlue },
      styles: { fontSize: 11, cellPadding: 5 },
      margin: { left: 30, right: 30 },
    });

    // --- Page 2: Program Flow ---
    doc.addPage();
    doc.setFillColor(...skyBlue);
    doc.rect(0, 0, pageWidth, 20, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("PROGRAM FLOW (EMCEE COPY)", centerX, 13, { align: "center" });

    autoTable(doc, {
      startY: 30,
      head: [["TIME", "ACTIVITY", "DETAILS", "CHECK"]],
      body: timelineData.map(item => [
        item.time,
        item.task.toUpperCase(),
        item.sub,
        "[  ]" 
      ]),
      theme: "grid",
      headStyles: { fillColor: skyBlue },
      styles: { fontSize: 10, cellPadding: 4 },
      margin: { left: 15, right: 15 },
    });

    // --- Page 3+: Traditions ---
    doc.addPage();
    doc.setFillColor(...skyBlue);
    doc.rect(0, 0, pageWidth, 20, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("THE 7 TRADITIONS (GUEST LISTS)", centerX, 13, { align: "center" });

    let currentY = 30;
    partyData.forEach((section, index) => {
      if (currentY > 210) {
        doc.addPage();
        currentY = 20;
      }

      autoTable(doc, {
        startY: currentY,
        head: [[section.title.toUpperCase(), "CHECKLIST"]],
        body: section.items.map((name, i) => [`${i + 1}. ${name}`, "[  ]"]),
        theme: "striped",
        headStyles: { fillColor: (index % 2 === 0) ? skyBlue : [30, 41, 59] },
        styles: { fontSize: 9, cellPadding: 2.5 },
        margin: { left: 20, right: 20 },
      });

      currentY = (doc as any).lastAutoTable.finalY + 12;
    });

    // Page Numbers
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} of ${pageCount}`, centerX, pageHeight - 10, { align: "center" });
    }

    doc.save("Phrince-7th-Birthday-Final.pdf");
  } catch (error) {
    console.error("PDF Generate Error:", error);
    alert("Error generating PDF. Please try again.");
  }
};
