"use client";

import { useState } from "react";
import { Download, Printer, Loader2 } from "lucide-react";
import { generateResumePdf } from "@/lib/generateResumePdf";

export default function PrintButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await generateResumePdf();
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    const resumeEl = document.getElementById("resume-content");
    if (!resumeEl) return;

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "-10000px";
    iframe.style.left = "-10000px";
    iframe.style.width = "800px";
    iframe.style.height = "1000px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) {
      document.body.removeChild(iframe);
      return;
    }

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Saqib Zafar - Resume</title>
          <style>
            * {
              margin: 0;
              box-sizing: border-box;
              font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            }
            body {
              color: #111827;
              background: #fff;
              padding: 20px 32px;
              font-size: 12px;
              line-height: 1.5;
            }
            header { border-bottom: 2px solid #111827; padding-bottom: 10px; }
            h1 { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.025em; }
            h2 {
              font-size: 13px; font-weight: 700; text-transform: uppercase;
              letter-spacing: 0.1em; color: #111827;
              border-bottom: 1px solid #d1d5db; padding-bottom: 4px;
              margin-top: 14px; margin-bottom: 6px;
            }
            h3 { font-size: 12px; font-weight: 700; color: #111827; }
            p, li, span { font-size: 12px; line-height: 1.5; color: #374151; }
            a { color: #1d4ed8; text-decoration: underline; font-size: 12px; }
            ul { list-style: disc inside; padding: 0; }
            li { margin-top: 1px; }
            img { border-radius: 9999px; width: 52px; height: 52px; object-fit: cover; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .gap-4 { gap: 16px; }
            .gap-x-4 { column-gap: 16px; }
            .gap-y-0\\.5 { row-gap: 2px; }
            .flex-wrap { flex-wrap: wrap; }
            .justify-between { justify-content: space-between; }
            .items-baseline { align-items: baseline; }
            .inline-flex { display: inline-flex; }
            .gap-1 { gap: 4px; }
            .space-y-3 > * + * { margin-top: 10px; }
            .space-y-2 > * + * { margin-top: 6px; }
            .space-y-1\\.5 > * + * { margin-top: 4px; }
            .space-y-1 > * + * { margin-top: 3px; }
            .space-y-0 > * + * { margin-top: 0; }
            .mt-3 { margin-top: 10px; }
            .mt-2 { margin-top: 6px; }
            .mt-1\\.5 { margin-top: 4px; }
            .mt-1 { margin-top: 3px; }
            .pb-1 { padding-bottom: 4px; }
            .grid { display: grid; }
            .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .gap-6 { gap: 24px; }
            .text-gray-500 { color: #6b7280; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-700 { color: #374151; }
            .text-gray-900 { color: #111827; }
            .text-blue-700 { color: #1d4ed8; }
            .italic { font-style: italic; }
            .font-semibold { font-weight: 600; }
            .font-bold { font-weight: 700; }
            .font-medium { font-weight: 500; }
            .underline { text-decoration: underline; }
            .uppercase { text-transform: uppercase; }
            .tracking-widest { letter-spacing: 0.1em; }
            .border-b { border-bottom: 1px solid #d1d5db; }
            .border-b-2 { border-bottom: 2px solid #111827; }
            .border-gray-300 { border-color: #d1d5db; }
            .border-gray-900 { border-color: #111827; }
            .text-\\[13px\\] { font-size: 13px; }
            .text-\\[12px\\] { font-size: 12px; }
            .text-\\[11px\\] { font-size: 10px; }
            .text-xs { font-size: 12px; }
            .text-sm { font-size: 13px; }
            .text-2xl { font-size: 1.5rem; }
            .leading-snug { line-height: 1.375; }
            .ring-2 { box-shadow: 0 0 0 2px #e5e7eb; }
            svg { display: none; }
            .pointer-events-none { display: none; }
            @media print {
              body { padding: 10px 20px; }
            }
          </style>
        </head>
        <body>
          ${resumeEl.innerHTML}
        </body>
      </html>
    `);
    doc.close();

    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }, 300);
    };
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 print:hidden">
      <button
        onClick={handlePrint}
        className="group cursor-pointer flex items-center gap-2 rounded-full border border-primary-500/30 bg-surface-950/90 px-5 py-3 text-sm font-medium text-primary-400 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-primary-500/60 hover:bg-primary-500/10 hover:shadow-xl hover:shadow-primary-500/10"
      >
        <Printer className="h-4 w-4" />
        <span className="hidden sm:inline">Print</span>
      </button>
      <button
        onClick={handleDownload}
        disabled={loading}
        className="group cursor-pointer flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/40 hover:brightness-110 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="hidden sm:inline">Generating...</span>
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download as PDF</span>
          </>
        )}
      </button>
    </div>
  );
}
