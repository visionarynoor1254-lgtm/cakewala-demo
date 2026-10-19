import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FCF9F5] border-t border-[#4B3028]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7E655D] font-medium block mb-2">
            What Our Customers Say
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4B3028] font-normal tracking-tight">
            Sweet Words
          </h2>
          <p className="text-xs sm:text-sm text-[#7E655D] mt-2">
            Heartwarming reviews from families, couples, and celebration hosts who trusted us with their big day.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-[#4B3028]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C69A58] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#4B3028] font-serif italic leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#4B3028]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#4B3028]">{t.name}</h4>
                  <p className="text-[11px] text-[#7E655D]">{t.city}</p>
                </div>
                <span className="text-[10px] bg-[#E8B3B5]/30 text-[#4B3028] font-medium px-2 py-0.5 rounded">
                  {t.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
