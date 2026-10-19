import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F3EB]/95 backdrop-blur-md border-b border-[#4B3028]/10 transition-colors">
      {/* Top announcement strip */}
      <div className="bg-[#4B3028] text-[#F8F3EB] text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-wider font-light">
        <span>Handcrafted Fresh Daily</span>
        <span className="mx-2 opacity-50">·</span>
        <span>Orders open for Birthdays, Anniversaries & Weddings</span>
        <span className="mx-2 opacity-50">·</span>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#E8B3B5] transition-colors ml-1 font-medium"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex flex-col text-left focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#4B3028] group-hover:text-[#301E19] transition-colors">
              The Cake Wala
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#7E655D] -mt-1 font-sans">
              Artisanal Patisserie
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation Links (Single-line, quiet typography) */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#4B3028]/80">
          <button
            onClick={() => handleNavClick('home')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 relative hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('cakes')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Cakes
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick('custom-orders')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Custom Orders
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#4B3028] transition-colors whitespace-nowrap cursor-pointer py-1 hover:underline underline-offset-8 decoration-[#E8B3B5] decoration-2"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (WhatsApp direct order & Shopping bag) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
              'Hello The Cake Wala! I would like to inquire about ordering a fresh cake.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium tracking-wide text-[#4B3028] bg-[#E8B3B5]/30 hover:bg-[#E8B3B5]/50 border border-[#E8B3B5] rounded-full transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp Enquiry</span>
          </a>

          {/* Cart Bag */}
          <button
            onClick={onOpenCart}
            aria-label={`View cart with ${cartCount} items`}
            className="relative p-2.5 text-[#4B3028] hover:text-[#301E19] hover:bg-[#4B3028]/5 rounded-full transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-[#4B3028] text-[#F8F3EB] text-[10px] font-semibold flex items-center justify-center rounded-full shadow-sm tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#4B3028] hover:bg-[#4B3028]/5 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F3EB] border-b border-[#4B3028]/15 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-serif text-[#4B3028]">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors border-b border-[#4B3028]/10"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('cakes')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors border-b border-[#4B3028]/10"
            >
              Cakes
            </button>
            <button
              onClick={() => handleNavClick('story')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors border-b border-[#4B3028]/10"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors border-b border-[#4B3028]/10"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('custom-orders')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors border-b border-[#4B3028]/10"
            >
              Custom Orders
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 hover:text-[#E8B3B5] transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-[#4B3028]/10 flex flex-col gap-3">
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                'Hello The Cake Wala! I would like to place an order.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-sm font-medium hover:bg-[#301E19] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
