import React from 'react';
import { ArrowRight, Sparkles, Coffee, Heart, Award } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

interface OurStorySectionProps {
  onExploreCakes: () => void;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ onExploreCakes }) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FCF9F5] border-t border-[#4B3028]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Bakery Photography & Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#4B3028]/10 bg-white">
                <img
                  src="/src/assets/images/category_birthday_cake_1792399128641.jpg"
                  alt="Pastry Chef decorating birthday cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Inset card badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-6 rounded-xl shadow-xl border border-[#4B3028]/10 max-w-xs">
                <div className="flex items-center gap-2 text-[#C69A58] mb-1">
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#4B3028]">
                    The Philosophy
                  </span>
                </div>
                <p className="font-serif text-lg font-medium text-[#4B3028] leading-snug">
                  “Cakes are not just dessert. They are the centerpiece of life’s sweetest memories.”
                </p>
                <span className="text-[11px] text-[#7E655D] mt-2 block font-medium">
                  — The Cake Wala Founding Team
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#E8B3B5]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#7E655D]">
                Our Story
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#4B3028] font-normal tracking-tight leading-tight mb-6">
              Baked with <span className="italic font-serif">Passion</span>,<br />
              Made for You.
            </h2>

            <p className="text-sm sm:text-base text-[#7E655D] leading-relaxed mb-6">
              At <strong className="text-[#4B3028] font-semibold">The Cake Wala</strong>, our story began with a simple belief: every memorable milestone—from a baby’s first giggles to a golden 50th wedding anniversary—deserves a cake crafted with extraordinary care, patience, and visual elegance.
            </p>

            <p className="text-sm sm:text-base text-[#7E655D] leading-relaxed mb-8">
              We never cut corners with premade syrups or imitation vanilla. We simmer fresh fruit compotes from scratch, whip dairy creams to silky perfection, and temper authentic Belgian chocolate every morning before sunrise.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl border border-[#4B3028]/10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#4B3028]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#4B3028]">Single-Origin Cocoa</h4>
                </div>
                <p className="text-xs text-[#7E655D]">
                  Finest Callebaut chocolate paired with slow-churned pure butter sponge.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#4B3028]/10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#4B3028]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#4B3028]">Eggless Mastery</h4>
                </div>
                <p className="text-xs text-[#7E655D]">
                  Specially formulated recipes delivering incomparable softness and moisture.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onExploreCakes}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] transition-colors cursor-pointer"
              >
                <span>View All Creations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  'Hi The Cake Wala, I would like to visit or speak with a chef!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#4B3028] hover:text-[#301E19] underline underline-offset-4 decoration-[#E8B3B5]"
              >
                Chat with our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
