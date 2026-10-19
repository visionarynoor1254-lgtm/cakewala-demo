import React, { useState } from 'react';
import { Eye, X, ZoomIn, Instagram } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  serves: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Royal Ivory Wedding Arch Tier',
    category: 'Wedding',
    image: '/src/assets/images/category_wedding_cake_1792399128716.jpg',
    serves: '65 guests',
  },
  {
    id: 'g-2',
    title: 'Belgian Chocolate & Berry Drip Tier',
    category: 'Celebration',
    image: '/src/assets/images/hero_celebration_cake_1792399128033.jpg',
    serves: '12 guests',
  },
  {
    id: 'g-3',
    title: 'Bespoke Sugar Petal Monogram',
    category: 'Custom Designer',
    image: '/src/assets/images/category_custom_cake_1792399147187.jpg',
    serves: '25 guests',
  },
  {
    id: 'g-4',
    title: 'Blush Velvet Birthday Rosette',
    category: 'Birthday',
    image: '/src/assets/images/category_birthday_cake_1792399128641.jpg',
    serves: '15 guests',
  },
  {
    id: 'g-5',
    title: 'Gourmet Macarons & Pastry Tier',
    category: 'High Tea & Desserts',
    image: '/src/assets/images/category_cupcakes_pastries_1792399129984.jpg',
    serves: 'Assorted box',
  },
  {
    id: 'g-6',
    title: 'Golden Romance Anniversary Tier',
    category: 'Anniversary',
    image: '/src/assets/images/category_anniversary_cake_1792399147562.jpg',
    serves: '16 guests',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#F8F3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#7E655D] font-medium block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#4B3028] font-normal tracking-tight">
              Celebration Gallery
            </h2>
          </div>
          <p className="text-sm text-[#7E655D] max-w-md">
            A glimpse into recent celebration centerpieces baked and styled with love at The Cake Wala.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white border border-[#4B3028]/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#FCF9F5]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <div className="self-end w-9 h-9 rounded-full bg-white/90 text-[#4B3028] flex items-center justify-center shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[11px] text-[#E8B3B5] font-semibold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mt-0.5">
                    {item.title}
                  </h3>
                  <span className="text-xs text-white/80 mt-1 block">
                    Ideal for: {item.serves}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery footer action */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#7E655D] mb-4">
            Want a design customized specifically for your party theme?
          </p>
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
              'Hi The Cake Wala, I would like to recreate a design from your celebration gallery!'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] transition-colors"
          >
            <span>Inquire About Custom Gallery Designs</span>
          </a>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#F8F3EB] rounded-2xl overflow-hidden shadow-2xl border border-[#4B3028]/20"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-[#4B3028] flex items-center justify-center shadow-md hover:bg-[#F8F3EB] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7E655D] font-medium">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#4B3028]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#7E655D] mt-0.5">
                  Handcrafted for {selectedPhoto.serves}
                </p>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  `Hi The Cake Wala, I love the "${selectedPhoto.title}" from your gallery and would like to order something similar!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-medium hover:bg-[#301E19] transition-colors whitespace-nowrap"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
