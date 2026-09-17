"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, User } from "lucide-react";

const PHONE_DR = "+918788198731";
const PHONE_YASH = "+918262883668";
const WHATSAPP_DR = "https://wa.me/918788198731";

export function EmergencyFab() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
        <a
          href={WHATSAPP_DR}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
          aria-label="WhatsApp Dr. Akshata"
        >
          <MessageCircle size={24} />
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emergency text-white shadow-lg transition-transform hover:scale-110 animate-pulse"
          aria-label="Emergency Call"
        >
          <Phone size={24} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 bg-gradient-to-br from-emergency to-red-700 text-white">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">Emergency Call</h3>
                  <p className="text-sm text-white/80">Select a contact to call now</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <a
                href={`tel:${PHONE_DR}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <User size={22} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">Dr. Akshata Bhand</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Veterinary Physician</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emergency text-white">
                  <Phone size={20} />
                </div>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold">
                <span className="h-px w-10 bg-gray-200 dark:bg-gray-700" />
                <span>OR</span>
                <span className="h-px w-10 bg-gray-200 dark:bg-gray-700" />
              </div>

              <a
                href={`tel:${PHONE_YASH}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <User size={22} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">Yash Bhand</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Assistant / Coordinator</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emergency text-white">
                  <Phone size={20} />
                </div>
              </a>

              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-700">
                <a
                  href="https://wa.me/918788198731?text=Hello%20Dr.%20Akshata%2C%20it's%20an%20EMERGENCY.%20Please%20respond%20ASAP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  Emergency WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
