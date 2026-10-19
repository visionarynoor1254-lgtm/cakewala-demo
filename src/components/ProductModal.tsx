import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { CakeProduct, CakeSize } from '../types';
import { WHATSAPP_LINK } from '../data/bakeryData';

interface ProductModalProps {
  product: CakeProduct | null;
  onClose: () => void;
  onAddToCart: (
    product: CakeProduct,
    size: CakeSize,
    customMessage: string,
    quantity: number
  ) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<CakeSize>(
    product.sizes[1] || product.sizes[0]
  );
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, customMessage, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  const whatsAppMessage = `Hello The Cake Wala! I would like to order:
• Cake: ${product.name}
• Size: ${selectedSize.label} (${selectedSize.serves})
• Price: $${(selectedSize.price * quantity).toFixed(2)}
• Quantity: ${quantity}
${customMessage ? `• Message on Cake: "${customMessage}"\n` : ''}
Please confirm availability and delivery slots!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#F8F3EB] rounded-2xl shadow-2xl overflow-hidden border border-[#4B3028]/15 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#4B3028] hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Image */}
        <div className="md:w-5/12 bg-white relative">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-56 md:h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="bg-[#4B3028] text-[#F8F3EB] text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded">
              {product.category}
            </span>
            <span className="bg-white/95 text-[#4B3028] text-[10px] font-medium px-2 py-0.5 rounded shadow-sm">
              {product.dietary.join(' · ')}
            </span>
          </div>
        </div>

        {/* Right Column: Customization Options */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh] flex flex-col justify-between">
          <div>
            {/* Title & Rating */}
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center text-[#C69A58] text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-semibold text-[#4B3028] ml-1">{product.rating}</span>
                <span className="text-[#7E655D] ml-1">({product.reviewsCount} reviews)</span>
              </div>
              <span className="text-xs text-[#7E655D]">·</span>
              <span className="text-xs text-[#7E655D] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#7E655D]" />
                {product.preparationTime}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#4B3028] font-medium">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#7E655D] mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Notes */}
            <div className="mt-4 p-3 bg-white/80 rounded-lg border border-[#4B3028]/10 text-xs">
              <div className="flex items-start gap-2 mb-1">
                <span className="font-semibold text-[#4B3028] w-20 shrink-0">Sponge:</span>
                <span className="text-[#7E655D]">{product.spongeFlavor}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-[#4B3028] w-20 shrink-0">Filling:</span>
                <span className="text-[#7E655D]">{product.fillingFlavor}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-2">
                Select Cake Size & Servings
              </label>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedSize.label === size.label
                        ? 'border-[#4B3028] bg-white ring-1 ring-[#4B3028] shadow-sm'
                        : 'border-[#4B3028]/15 bg-white/50 hover:bg-white text-[#7E655D]'
                    }`}
                  >
                    <span className="block text-xs font-semibold text-[#4B3028]">
                      {size.weight}
                    </span>
                    <span className="block text-[10px] text-[#7E655D] mt-0.5">
                      {size.serves}
                    </span>
                    <span className="block text-xs font-medium text-[#4B3028] mt-1 tabular-nums">
                      ${size.price.toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message on Cake */}
            <div className="mt-4">
              <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                <span>Free Piped Message on Cake</span>
                <span className="text-[10px] font-normal text-[#7E655D]">Max 30 characters</span>
              </label>
              <input
                type="text"
                maxLength={30}
                placeholder="e.g. Happy Birthday Aanya! 🎉"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028] placeholder-[#7E655D]/60"
              />
            </div>

            {/* Quantity */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3028]">
                Quantity
              </span>
              <div className="flex items-center border border-[#4B3028]/20 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm text-[#4B3028] hover:bg-[#F8F3EB] cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-semibold text-[#4B3028] tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm text-[#4B3028] hover:bg-[#F8F3EB] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Pricing & Order CTAs */}
          <div className="mt-6 pt-4 border-t border-[#4B3028]/15">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#7E655D]">Total Price</span>
              <span className="font-serif text-2xl font-semibold text-[#4B3028] tabular-nums">
                ${(selectedSize.price * quantity).toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] transition-colors cursor-pointer shadow-sm"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#4B3028] border border-[#4B3028]/30 rounded-lg text-xs font-semibold hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-[#7E655D] text-center mt-3 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Handcrafted fresh · Temperature-controlled delivery guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
