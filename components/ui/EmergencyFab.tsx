"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+918788198731";
const WHATSAPP = "https://wa.me/918788198731";

export function EmergencyFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:${PHONE}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emergency text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Emergency Call"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
