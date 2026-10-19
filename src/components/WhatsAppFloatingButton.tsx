import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="relative bg-white text-[#4B3028] p-3 rounded-xl shadow-xl border border-[#4B3028]/15 text-xs max-w-[220px] animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#4B3028] text-white rounded-full flex items-center justify-center text-[10px] hover:bg-[#301E19] cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-[#4B3028]">Have a cake question?</p>
          <p className="text-[#7E655D] mt-0.5 text-[11px]">
            Chat directly with our chef on WhatsApp for custom orders & urgent slots!
          </p>
        </div>
      )}

      <a
        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
          'Hello The Cake Wala! I would like to inquire about ordering a fresh cake.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
