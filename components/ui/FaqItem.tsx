"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function FaqItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{question}</span>
        <ChevronRight
          size={20}
          className={`shrink-0 text-primary transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}
