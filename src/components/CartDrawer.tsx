import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_LINK } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [deliveryDate, setDeliveryDate] = useState('');
  const [includeCandles, setIncludeCandles] = useState(true);
  const [includeCutlery, setIncludeCutlery] = useState(true);
  const [isCheckingOutOnline, setIsCheckingOutOnline] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  // Online checkout form state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const deliveryFee = subtotal > 60 || subtotal === 0 ? 0 : 5;
  const total = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    let orderText = `*New Cake Order — The Cake Wala*\n\n`;
    items.forEach((item, index) => {
      orderText += `${index + 1}. *${item.product.name}*\n`;
      orderText += `   • Size: ${item.selectedSize.label} (${item.selectedSize.serves})\n`;
      orderText += `   • Qty: ${item.quantity} × $${item.unitPrice.toFixed(2)} = $${(
        item.unitPrice * item.quantity
      ).toFixed(2)}\n`;
      if (item.customMessage) {
        orderText += `   • Piped Message: "${item.customMessage}"\n`;
      }
      orderText += `\n`;
    });

    orderText += `• *Subtotal:* $${subtotal.toFixed(2)}\n`;
    orderText += `• *Delivery:* ${deliveryFee === 0 ? 'Free' : '$' + deliveryFee.toFixed(2)}\n`;
    orderText += `• *Total Amount:* $${total.toFixed(2)}\n`;
    if (deliveryDate) {
      orderText += `• *Requested Delivery Date:* ${deliveryDate}\n`;
    }
    orderText += `• *Candles & Knife:* ${includeCandles ? 'Yes, please' : 'No'}\n\n`;
    orderText += `Please confirm my order and send payment details!`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(orderText)}`, '_blank');
  };

  const handleOnlineOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `CW-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed(orderNumber);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F3EB] shadow-2xl flex flex-col justify-between border-l border-[#4B3028]/15">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#4B3028]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#4B3028]" />
              <h2 className="font-serif text-xl font-medium text-[#4B3028]">
                Your Sweet Bag
              </h2>
              <span className="text-xs text-[#7E655D] font-mono tabular-nums">
                ({items.length} {items.length === 1 ? 'item' : 'items'})
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full hover:bg-[#F8F3EB] text-[#4B3028] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderConfirmed ? (
              <div className="text-center py-12 px-4 bg-white rounded-2xl border border-[#4B3028]/10 shadow-sm animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-medium text-[#4B3028]">
                  Order Confirmed!
                </h3>
                <p className="text-xs text-[#7E655D] mt-1">
                  Order ID: <span className="font-mono font-semibold text-[#4B3028]">{orderConfirmed}</span>
                </p>
                <p className="text-xs text-[#7E655D] mt-4 leading-relaxed">
                  Thank you, <strong className="text-[#4B3028]">{customerName}</strong>! Our kitchen team has received your order and will contact you on WhatsApp or call at <strong className="text-[#4B3028]">{customerPhone}</strong> to confirm the exact delivery slot.
                </p>
                <button
                  onClick={() => {
                    setOrderConfirmed(null);
                    setIsCheckingOutOnline(false);
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#E8B3B5]/30 text-[#4B3028] flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#4B3028]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#7E655D] mt-1 mb-6">
                  Explore our freshly baked cakes and pick your celebration treat!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] cursor-pointer"
                >
                  Explore Cakes
                </button>
              </div>
            ) : isCheckingOutOnline ? (
              /* Simple Online Checkout Form */
              <form onSubmit={handleOnlineOrderSubmit} className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-[#4B3028]/10">
                  <h3 className="font-serif text-lg font-medium text-[#4B3028]">
                    Delivery Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOutOnline(false)}
                    className="text-xs text-[#7E655D] hover:text-[#4B3028] underline"
                  >
                    Back to Bag
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Roy"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Apartment, Street, Landmark, City..."
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1">
                    Requested Delivery Date
                  </label>
                  <input
                    type="date"
                    required
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028]"
                  />
                </div>

                <div className="pt-4 border-t border-[#4B3028]/10">
                  <div className="flex justify-between text-xs text-[#7E655D] mb-1">
                    <span>Payment Mode</span>
                    <span className="font-semibold text-[#4B3028]">Pay on Delivery / UPI</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-[#4B3028] mb-4">
                    <span>Total Due</span>
                    <span className="tabular-nums">${total.toFixed(2)}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#4B3028] text-[#F8F3EB] rounded-lg text-xs font-semibold hover:bg-[#301E19] shadow-md transition-colors cursor-pointer"
                  >
                    Confirm & Place Cake Order
                  </button>
                </div>
              </form>
            ) : (
              /* Itemized Cart List */
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="bg-white p-4 rounded-xl border border-[#4B3028]/10 shadow-xs flex gap-3"
                    >
                      <BakeryImage
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#F8F3EB] shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif text-sm font-medium text-[#4B3028] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.cartItemId)}
                            className="text-[#7E655D] hover:text-rose-600 transition-colors p-0.5 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#7E655D] mt-0.5">
                          <span>{item.selectedSize.label}</span>
                          <span className="mx-1">·</span>
                          <span className="text-[#4B3028] font-medium tabular-nums">
                            ${item.unitPrice.toFixed(2)}
                          </span>
                        </div>

                        {item.customMessage && (
                          <p className="text-[10px] text-[#4B3028] bg-[#F8F3EB] px-2 py-1 rounded mt-1.5 italic">
                            “{item.customMessage}”
                          </p>
                        )}

                        {/* Quantity Adjuster */}
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#4B3028]/10">
                          <div className="flex items-center border border-[#4B3028]/20 rounded bg-[#F8F3EB]/50 overflow-hidden text-xs">
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.cartItemId,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="px-2 py-0.5 hover:bg-white cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 font-mono font-semibold text-[#4B3028] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.cartItemId, item.quantity + 1)
                              }
                              className="px-2 py-0.5 hover:bg-white cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs font-semibold text-[#4B3028] tabular-nums">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Celebration Add-ons */}
                <div className="p-4 bg-white rounded-xl border border-[#4B3028]/10 text-xs space-y-2.5">
                  <h4 className="font-semibold text-[#4B3028] uppercase text-[11px] tracking-wider">
                    Complimentary Celebration Extras
                  </h4>
                  <label className="flex items-center gap-2 cursor-pointer text-[#7E655D]">
                    <input
                      type="checkbox"
                      checked={includeCandles}
                      onChange={(e) => setIncludeCandles(e.target.checked)}
                      className="rounded accent-[#4B3028]"
                    />
                    <span>Include birthday candles & cake knife</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-[#7E655D]">
                    <input
                      type="checkbox"
                      checked={includeCutlery}
                      onChange={(e) => setIncludeCutlery(e.target.checked)}
                      className="rounded accent-[#4B3028]"
                    />
                    <span>Eco-friendly bamboo dessert forks</span>
                  </label>
                </div>

                {/* Delivery Date Input */}
                <div className="p-4 bg-white rounded-xl border border-[#4B3028]/10 text-xs">
                  <label className="block font-semibold text-[#4B3028] uppercase text-[11px] tracking-wider mb-1.5">
                    Select Celebration Date
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-[#4B3028]/20 text-[#4B3028] bg-[#F8F3EB]/40 focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Action Buttons */}
          {items.length > 0 && !isCheckingOutOnline && !orderConfirmed && (
            <div className="p-6 bg-white border-t border-[#4B3028]/10 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#7E655D]">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#7E655D]">
                  <span>Doorstep Delivery</span>
                  <span className="font-mono tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 60 && (
                  <p className="text-[10px] text-[#7E655D]">
                    Add ${(60 - subtotal).toFixed(2)} more for free delivery!
                  </p>
                )}
                <div className="flex justify-between text-base font-serif font-semibold text-[#4B3028] pt-2 border-t border-[#4B3028]/10">
                  <span>Total Amount</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Order Actions */}
              <div className="grid grid-cols-1 gap-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-[#4B3028] text-[#F8F3EB] hover:bg-[#301E19] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Send Order to WhatsApp</span>
                </button>

                <button
                  onClick={() => setIsCheckingOutOnline(true)}
                  className="w-full py-2.5 bg-white text-[#4B3028] hover:bg-[#F8F3EB] border border-[#4B3028]/30 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  Confirm Online Order (Doorstep Delivery)
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7E655D]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero hassle · 100% freshness guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
