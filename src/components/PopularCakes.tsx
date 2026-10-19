import React from 'react';
import { ShoppingBag, Eye, Star, MessageCircle } from 'lucide-react';
import { CakeProduct, CakeCategory } from '../types';
import { WHATSAPP_LINK } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface PopularCakesProps {
  products: CakeProduct[];
  activeCategory: CakeCategory;
  onSelectCategory: (category: CakeCategory) => void;
  onQuickView: (product: CakeProduct) => void;
  onAddToCart: (product: CakeProduct) => void;
}

const CATEGORY_TABS: CakeCategory[] = [
  'All',
  'Birthday Cakes',
  'Chocolate Cakes',
  'Wedding Cakes',
  'Anniversary Cakes',
  'Cupcakes & Pastries',
  'Custom Cakes',
];

export const PopularCakes: React.FC<PopularCakesProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
}) => {
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="cakes" className="py-16 sm:py-20 bg-[#FCF9F5] border-y border-[#4B3028]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7E655D] font-medium block mb-2">
            Fresh From The Oven
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4B3028] font-normal tracking-tight">
            Our Signature Cakes
          </h2>
          <p className="text-sm text-[#7E655D] mt-3">
            Handcrafted daily with fine Belgian chocolate, slow-churned butter, and organic berries.
            Each cake is made to order to guarantee peak freshness.
          </p>
        </div>

        {/* Filter Navigation Tabs (Interactive Segmented Bar) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onSelectCategory(tab)}
              className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab
                  ? 'bg-[#4B3028] text-[#F8F3EB] shadow-sm'
                  : 'bg-white text-[#4B3028]/70 hover:text-[#4B3028] hover:bg-white/80 border border-[#4B3028]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const lowestPrice = product.sizes[0]?.price || product.price;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#4B3028]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F3EB]">
                  <BakeryImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Dietary & Bestseller tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {product.isBestseller && (
                      <span className="bg-[#4B3028] text-[#F8F3EB] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded shadow-sm">
                        Bestseller
                      </span>
                    )}
                    <span className="bg-white/90 backdrop-blur-sm text-[#4B3028] text-[10px] font-medium px-2 py-0.5 rounded shadow-sm">
                      {product.dietary[0]}
                    </span>
                  </div>

                  {/* Quick View overlay button */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <span className="bg-white/95 text-[#4B3028] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7E655D] mb-1.5">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-[#C69A58]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-medium text-[#4B3028] tabular-nums">
                          {product.rating}
                        </span>
                        <span className="text-[10px] text-[#7E655D]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-serif text-lg font-medium text-[#4B3028] group-hover:text-[#301E19] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#7E655D] mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Actions Row */}
                  <div className="pt-4 mt-4 border-t border-[#4B3028]/10 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-[#7E655D] block uppercase tracking-wider">
                        From
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#4B3028] tabular-nums">
                        ${lowestPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* WhatsApp quick enquire */}
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                          `Hi, I want to order "${product.name}" from The Cake Wala.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Inquire on WhatsApp"
                        className="p-2 border border-[#4B3028]/20 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#4B3028] rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </a>

                      {/* Customize / Select button */}
                      <button
                        onClick={() => onQuickView(product)}
                        className="px-3 py-2 bg-[#4B3028] text-[#F8F3EB] hover:bg-[#301E19] rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Customize</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
