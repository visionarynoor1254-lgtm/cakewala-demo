import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Heart, Clock, Award } from 'lucide-react';
import { HERO_IMAGE, WHATSAPP_LINK } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCustomClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCustomClick,
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Background ambient aesthetic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#E8B3B5]" />
              <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#7E655D]">
                Freshly Baked • Made with Love
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#4B3028] font-normal tracking-tight leading-[1.12] mb-6 text-balance">
              Every Celebration Deserves a <span className="italic font-normal text-[#301E19]">Beautiful Cake.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#7E655D] font-normal leading-relaxed mb-8 max-w-xl">
              From chocolate favourites to custom celebration cakes, find something
              special for your next memorable moment. Handcrafted with slow-melted
              Belgian chocolate and whipped fresh cream.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4B3028] text-[#F8F3EB] rounded-lg font-medium text-sm hover:bg-[#301E19] hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  'Hi The Cake Wala, I would like to order a celebration cake!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/90 hover:bg-white text-[#4B3028] border border-[#4B3028]/20 rounded-lg font-medium text-sm hover:border-[#4B3028]/40 transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Editorial Quick Specs Strip */}
            <div className="pt-6 border-t border-[#4B3028]/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#4B3028] tabular-nums">100%</p>
                <p className="text-xs text-[#7E655D] mt-0.5">Eggless Available</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#4B3028] tabular-nums">4h</p>
                <p className="text-xs text-[#7E655D] mt-0.5">Express Bake Notice</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#4B3028] tabular-nums">5.0 ★</p>
                <p className="text-xs text-[#7E655D] mt-0.5">Over 1,200 Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cake Showcase Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle back decorative frame inspired by luxury patisserie references */}
              <div className="absolute -inset-3 bg-[#E8B3B5]/20 rounded-2xl -rotate-1 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-[#4B3028]/10">
                <BakeryImage
                  src={HERO_IMAGE}
                  alt="Belgian Dark Chocolate Celebration Cake on Ceramic Stand"
                  loading="eager"
                  fallbackType="hero"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle caption badge at corner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-[#4B3028]/10 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7E655D] block">
                      Signature Bestseller
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#4B3028]">
                      Belgian Chocolate Dream
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#7E655D] block">Starts at</span>
                    <span className="font-serif text-lg font-semibold text-[#4B3028] tabular-nums">
                      $28.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Values Feature Strip */}
      <div className="mt-16 sm:mt-20 border-y border-[#4B3028]/10 bg-[#FCF9F5]/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#4B3028]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#4B3028]">Pure Ingredients</h4>
                <p className="text-xs text-[#7E655D] mt-0.5">Real dairy cream & Callebaut chocolate</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#4B3028]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#4B3028]">Baked with Love</h4>
                <p className="text-xs text-[#7E655D] mt-0.5">Artisanal small batches daily</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#4B3028]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#4B3028]">Custom Celebration</h4>
                <p className="text-xs text-[#7E655D] mt-0.5">Personalized to your dream design</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#4B3028]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#4B3028]">Timely Delivery</h4>
                <p className="text-xs text-[#7E655D] mt-0.5">Chilled doorstep delivery vans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
