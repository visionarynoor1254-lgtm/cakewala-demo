import React, { useState } from 'react';
import { MessageCircle, Calendar, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/bakeryData';

export const CustomOrderSection: React.FC = () => {
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [guestCount, setGuestCount] = useState('25–50 guests');
  const [flavor, setFlavor] = useState('Belgian Dark Chocolate Ganache');
  const [eventDate, setEventDate] = useState('');
  const [themeNotes, setThemeNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const OCCASIONS = [
    'Birthday Celebration',
    'Wedding Reception',
    'Anniversary',
    'Milestone & Baby Shower',
    'Corporate Gala',
  ];

  const GUEST_RANGES = [
    '10–20 guests (1.5 kg)',
    '25–50 guests (2.5–4 kg)',
    '50–100 guests (3-tier)',
    '100+ guests (Grand tier)',
  ];

  const FLAVORS = [
    'Belgian Dark Chocolate Ganache',
    'Madagascar Vanilla & Fresh Berries',
    'Velvet Red Berry & Cream Cheese',
    'Lotus Biscoff & Salted Caramel',
    'Persian Rose & Roasted Pistachio',
  ];

  const customOrderWhatsAppText = `*Custom Cake Enquiry — The Cake Wala*
• *Name:* ${customerName || 'Celebration Host'}
• *Occasion:* ${occasion}
• *Estimated Guests:* ${guestCount}
• *Preferred Flavor:* ${flavor}
• *Event Date:* ${eventDate || 'Upcoming'}
• *Vision / Theme Notes:* ${themeNotes || 'Custom artistic design'}

Please share design ideas, pricing, and availability!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    // Direct user to WhatsApp with the formatted order text
    const fullUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(customOrderWhatsAppText)}`;
    window.open(fullUrl, '_blank');
  };

  return (
    <section id="custom-orders" className="py-20 bg-[#F8F3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Creative copy & inspiration */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#E8B3B5]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#7E655D]">
                Bespoke Patisserie
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#4B3028] font-normal tracking-tight leading-tight mb-6">
              Dreaming of a <br />
              <span className="italic">One-of-a-Kind</span> Cake?
            </h2>

            <p className="text-sm sm:text-base text-[#7E655D] leading-relaxed mb-8">
              Whether it’s a romantic floral tier for your wedding, a superhero fantasy for your child’s birthday, or a sophisticated gold-leaf anniversary piece—our master pastry chefs bring your sweetest dreams to life.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4B3028]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#4B3028]">1-on-1 WhatsApp Consultation</h4>
                  <p className="text-xs text-[#7E655D]">Share your Pinterest boards, color palettes, and reference photos directly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4B3028]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#4B3028]">Taste Tasting Boxes Available</h4>
                  <p className="text-xs text-[#7E655D]">Sample our 4 most loved sponges & fillings before finalizing wedding tiers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E8B3B5]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4B3028]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#4B3028]">Dedicated Event Delivery Concierge</h4>
                  <p className="text-xs text-[#7E655D]">Delivered in insulated chilled vans with on-site assembly for tiered cakes.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#4B3028]/10 flex items-center gap-4">
              <HeartHandshake className="w-8 h-8 text-[#4B3028] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#4B3028]">Need urgent assistance?</p>
                <p className="text-[11px] text-[#7E655D]">
                  Call our head patissier directly at{' '}
                  <span className="font-semibold text-[#4B3028]">+91 98765 43210</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Order Builder Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-[#4B3028]/10">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#4B3028]/10">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#4B3028]">
                    Custom Cake Inquiry
                  </h3>
                  <p className="text-xs text-[#7E655D] mt-0.5">
                    Fill in your celebration details for instant WhatsApp quotation
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#25D366] font-medium bg-[#25D366]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Replies in 15 mins</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Occasion Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                      Celebration Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028]"
                    >
                      {OCCASIONS.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guest Count & Flavor Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                      Guest Count / Weight
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028]"
                    >
                      {GUEST_RANGES.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                      Sponge & Filling Flavor
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028]"
                    >
                      {FLAVORS.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                    Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028]"
                    />
                  </div>
                </div>

                {/* Theme & Design Vision */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B3028] mb-1.5">
                    Design Theme, Colors, or Message on Cake
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your theme, color palette (e.g. blush pink & gold), flower preference, or special dietary request (100% eggless)..."
                    value={themeNotes}
                    onChange={(e) => setThemeNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#F8F3EB]/40 rounded-lg border border-[#4B3028]/20 focus:outline-none focus:border-[#4B3028] text-[#4B3028] placeholder-[#7E655D]/60"
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4B3028] text-[#F8F3EB] hover:bg-[#301E19] rounded-lg text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                  <span>Send Custom Enquiry on WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#7E655D] text-center">
                  Clicking will open WhatsApp with your prefilled details. You can also attach reference photos in the chat!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
