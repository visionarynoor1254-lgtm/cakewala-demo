import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/bakeryData';
import { CakeCategory } from '../types';
import { BakeryImage } from './BakeryImage';

interface CategorySectionProps {
  onSelectCategory: (category: CakeCategory) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#7E655D] font-medium block mb-2">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#4B3028] font-normal tracking-tight">
            Find Your Perfect Cake
          </h2>
        </div>
        <p className="text-sm text-[#7E655D] max-w-md">
          Explore artisanal creations designed for intimate moments, milestone birthdays, and grand weddings.
        </p>
      </div>

      {/* 6 Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES_DATA.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id as CakeCategory)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-white border border-[#4B3028]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            {/* Image Container with Hover Scale */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FCF9F5]">
              <BakeryImage
                src={cat.image}
                alt={cat.name}
                fallbackType={
                  cat.id === 'Birthday Cakes'
                    ? 'birthday'
                    : cat.id === 'Chocolate Cakes'
                    ? 'chocolate'
                    : cat.id === 'Wedding Cakes'
                    ? 'wedding'
                    : cat.id === 'Anniversary Cakes'
                    ? 'anniversary'
                    : cat.id === 'Cupcakes & Pastries'
                    ? 'cupcakes'
                    : 'custom'
                }
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Top Pill / Count indicator */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-medium text-[#4B3028] shadow-sm tabular-nums">
                {cat.count} designs
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex items-center justify-between bg-white border-t border-[#4B3028]/5">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#4B3028] group-hover:text-[#301E19] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#7E655D] mt-0.5 line-clamp-1">
                  {cat.tagline}
                </p>
              </div>

              {/* Arrow Circle */}
              <div className="w-9 h-9 rounded-full bg-[#F8F3EB] group-hover:bg-[#4B3028] group-hover:text-[#F8F3EB] text-[#4B3028] flex items-center justify-center shrink-0 transition-colors duration-200">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
