"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => {
        window.print();
      }}
      className="inline-flex items-center rounded-md bg-[#0B4A8F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#07162C]"
    >
      Print / Save as PDF
    </button>
  );
}