import React, { useState } from 'react';
import { MessageCircle, Heart, Send, Check } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-[#4B3028] text-[#F8F3EB] pt-16 pb-10 border-t border-[#301E19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#F8F3EB]/15">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-semibold tracking-tight text-[#F8F3EB] block">
              The Cake Wala
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8B3B5] block mt-1">
              Premium Bakery & Celebration Cakes
            </span>
            <p className="text-xs text-[#F8F3EB]/70 mt-4 leading-relaxed max-w-sm">
              Artisanal cakes, decadent pastries, and bespoke multi-tier celebration centerpieces crafted with slow-melted Belgian chocolate and pure fresh dairy cream.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  'Hello The Cake Wala! I would like to make an enquiry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F3EB]/10 hover:bg-[#F8F3EB]/20 border border-[#F8F3EB]/20 rounded-full text-xs font-medium text-[#F8F3EB] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8B3B5] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F3EB]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E8B3B5] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cakes')}
                  className="hover:text-[#E8B3B5] transition-colors cursor-pointer"
                >
                  Signature Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#E8B3B5] transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#E8B3B5] transition-colors cursor-pointer"
                >
                  Celebration Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-orders')}
                  className="hover:text-[#E8B3B5] transition-colors cursor-pointer"
                >
                  Custom Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8B3B5] mb-4">
              Kitchen & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#F8F3EB]/80">
              <div>
                <span className="block text-[#F8F3EB] font-medium">Baking Daily</span>
                <span className="text-[#F8F3EB]/60">8:00 AM – 10:00 PM</span>
              </div>
              <div className="mt-3">
                <span className="block text-[#F8F3EB] font-medium">Delivery Hours</span>
                <span className="text-[#F8F3EB]/60">10:00 AM – 11:30 PM</span>
              </div>
              <div className="mt-3">
                <span className="block text-[#F8F3EB] font-medium">Studio Kitchen</span>
                <span className="text-[#F8F3EB]/60">42 Heritage Boulevard, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8B3B5] mb-4">
              Sweet Community
            </h4>
            <p className="text-xs text-[#F8F3EB]/70 mb-3">
              Receive secret seasonal cake drops and celebration inspirations.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#301E19] text-xs text-[#F8F3EB] placeholder-[#F8F3EB]/40 border border-[#F8F3EB]/15 focus:outline-none focus:border-[#E8B3B5]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#E8B3B5] text-[#4B3028] hover:bg-[#dab0b2] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed with Love!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Join Sweet Club</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F8F3EB]/60 gap-4">
          <p>© {new Date().getFullYear()} The Cake Wala. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Handcrafted with passion &</span>
            <Heart className="w-3 h-3 text-[#E8B3B5] fill-current" />
            <span>for sweet celebrations everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
