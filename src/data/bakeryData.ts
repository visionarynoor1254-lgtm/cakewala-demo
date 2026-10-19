import { CakeProduct, Testimonial } from '../types';

export const HERO_IMAGE = '/images/bakery/hero_celebration_cake.jpg';

export const CATEGORIES_DATA = [
  {
    id: 'Birthday Cakes',
    name: 'Birthday Cakes',
    tagline: 'Joyful celebrations & sparkler moments',
    count: 12,
    image: '/images/bakery/category_birthday_cake.jpg',
  },
  {
    id: 'Chocolate Cakes',
    name: 'Chocolate Cakes',
    tagline: 'Pure Belgian ganache & dark cocoa',
    count: 15,
    image: '/images/bakery/category_chocolate_truffle.jpg',
  },
  {
    id: 'Wedding Cakes',
    name: 'Wedding Cakes',
    tagline: 'Grand bespoke tiers & handcrafted blossoms',
    count: 8,
    image: '/images/bakery/category_wedding_cake.jpg',
  },
  {
    id: 'Anniversary Cakes',
    name: 'Anniversary Cakes',
    tagline: 'Romantic notes of berries & vintage gold',
    count: 10,
    image: '/images/bakery/category_anniversary_cake.jpg',
  },
  {
    id: 'Cupcakes & Pastries',
    name: 'Cupcakes & Pastries',
    tagline: 'Parisian macarons & fresh berry tarts',
    count: 18,
    image: '/images/bakery/category_cupcakes_pastries.jpg',
  },
  {
    id: 'Custom Cakes',
    name: 'Custom Cakes',
    tagline: 'Tailored designs, sculptured sugar & personal themes',
    count: 24,
    image: '/images/bakery/category_custom_cake.jpg',
  },
];

export const PRODUCTS: CakeProduct[] = [
  {
    id: 'choc-dream',
    name: 'Belgian Chocolate Dream',
    category: 'Chocolate Cakes',
    price: 38,
    rating: 4.9,
    reviewsCount: 142,
    description:
      'Our signature dark chocolate sponge layered with 54% Callebaut Belgian ganache, slow-drip dark chocolate glaze, and finished with fresh wild blackberries and 24k edible gold dust.',
    spongeFlavor: 'Valrhona Chocolate Sponge',
    fillingFlavor: 'Callebaut Dark Chocolate Truffle',
    dietary: ['100% Eggless', 'Nut Free'],
    image: '/images/bakery/hero_celebration_cake.jpg',
    isBestseller: true,
    preparationTime: '4 hours notice',
    sizes: [
      { label: 'Petite (0.5 kg)', weight: '0.5 kg', price: 28, serves: '4–6 guests' },
      { label: 'Classic (1.0 kg)', weight: '1.0 kg', price: 38, serves: '8–12 guests' },
      { label: 'Grand (2.0 kg)', weight: '2.0 kg', price: 68, serves: '16–22 guests' },
    ],
  },
  {
    id: 'blush-berry-birthday',
    name: 'Blush Berry Birthday Rosette',
    category: 'Birthday Cakes',
    price: 42,
    rating: 4.9,
    reviewsCount: 98,
    description:
      'Airy Madagascar vanilla bean sponge brushed with fresh strawberry compote, encased in delicate blush pink Swiss meringue buttercream with organic raspberries and golden candles.',
    spongeFlavor: 'Madagascar Vanilla Bean',
    fillingFlavor: 'Strawberry Raspberry Compote & Silk Cream',
    dietary: ['100% Eggless'],
    image: '/images/bakery/category_birthday_cake.jpg',
    isBestseller: true,
    preparationTime: '6 hours notice',
    sizes: [
      { label: 'Petite (0.5 kg)', weight: '0.5 kg', price: 32, serves: '4–6 guests' },
      { label: 'Classic (1.0 kg)', weight: '1.0 kg', price: 42, serves: '8–12 guests' },
      { label: 'Grand (2.0 kg)', weight: '2.0 kg', price: 74, serves: '16–22 guests' },
    ],
  },
  {
    id: 'opera-truffle-slice',
    name: 'Royale Dark Truffle Praline',
    category: 'Chocolate Cakes',
    price: 36,
    rating: 4.8,
    reviewsCount: 84,
    description:
      'A dense, luxurious chocolate fudge center infused with subtle espresso essence and hazelnut gianduja crunch, coated in mirror shine glaze with hand-shaved chocolate ribbons.',
    spongeFlavor: 'Espresso Fudge Cake',
    fillingFlavor: 'Silky Gianduja & Roasted Hazelnut Praline',
    dietary: ['100% Eggless'],
    image: '/images/bakery/category_chocolate_truffle.jpg',
    isBestseller: true,
    preparationTime: '4 hours notice',
    sizes: [
      { label: 'Petite (0.5 kg)', weight: '0.5 kg', price: 26, serves: '4–6 guests' },
      { label: 'Classic (1.0 kg)', weight: '1.0 kg', price: 36, serves: '8–12 guests' },
      { label: 'Grand (2.0 kg)', weight: '2.0 kg', price: 64, serves: '16–22 guests' },
    ],
  },
  {
    id: 'floral-wedding-grace',
    name: 'The Ivory Petal Wedding Tier',
    category: 'Wedding Cakes',
    price: 185,
    rating: 5.0,
    reviewsCount: 46,
    description:
      'Three graceful tiers of champagne vanilla and lemon elderflower sponge, sculpted with textured ivory palette-knife buttercream and handcrafted sugar blossoms with gilded edges.',
    spongeFlavor: 'Champagne & Lemon Elderflower',
    fillingFlavor: 'White Chocolate Mascarpone & Lemon Curd',
    dietary: ['100% Eggless', 'Nut Free'],
    image: '/images/bakery/category_wedding_cake.jpg',
    isBestseller: true,
    preparationTime: '48 hours notice',
    sizes: [
      { label: '2-Tier Classic (2.5 kg)', weight: '2.5 kg', price: 125, serves: '25–30 guests' },
      { label: '3-Tier Grand (4.5 kg)', weight: '4.5 kg', price: 185, serves: '50–65 guests' },
      { label: '4-Tier Royal (7.0 kg)', weight: '7.0 kg', price: 280, serves: '80–110 guests' },
    ],
  },
  {
    id: 'anniversary-ruby-elegance',
    name: 'Golden Romance Anniversary Cake',
    category: 'Anniversary Cakes',
    price: 48,
    rating: 4.9,
    reviewsCount: 77,
    description:
      'Two elegant tiers layered with velvety red velvet sponge, French cream cheese frosting, cascading fresh red currants and raspberries, adorned with bespoke golden filigree patterns.',
    spongeFlavor: 'Traditional Crimson Red Velvet',
    fillingFlavor: 'Tahitian Vanilla Cream Cheese Frosting',
    dietary: ['100% Eggless', 'Nut Free'],
    image: '/images/bakery/category_anniversary_cake.jpg',
    isBestseller: true,
    preparationTime: '6 hours notice',
    sizes: [
      { label: 'Petite (0.75 kg)', weight: '0.75 kg', price: 36, serves: '6–8 guests' },
      { label: 'Classic (1.5 kg)', weight: '1.5 kg', price: 48, serves: '12–16 guests' },
      { label: 'Grand (2.5 kg)', weight: '2.5 kg', price: 82, serves: '22–28 guests' },
    ],
  },
  {
    id: 'artisan-cupcake-trio',
    name: 'Petits Fours & Macaron Box',
    category: 'Cupcakes & Pastries',
    price: 24,
    rating: 4.8,
    reviewsCount: 112,
    description:
      'A curated box of 6 handcrafted pastries: 2 raspberry-blush frosted cupcakes, 2 Tahitian vanilla & pistachio French macarons, and 2 fresh berry custard tartlets on butter pastry.',
    spongeFlavor: 'Almond & Vanilla Sponge Assortment',
    fillingFlavor: 'Chantilly Crème & Tart Raspberry Coulis',
    dietary: ['100% Eggless'],
    image: '/images/bakery/category_cupcakes_pastries.jpg',
    isBestseller: false,
    preparationTime: 'Same day (2 hours)',
    sizes: [
      { label: 'Box of 6 Assorted', weight: '0.4 kg', price: 24, serves: '2–4 guests' },
      { label: 'Party Box of 12 Assorted', weight: '0.8 kg', price: 44, serves: '6–8 guests' },
      { label: 'Celebration Platter of 24', weight: '1.6 kg', price: 82, serves: '15–20 guests' },
    ],
  },
  {
    id: 'bespoke-monogram-custom',
    name: 'Bespoke Sugar Petal Monogram',
    category: 'Custom Cakes',
    price: 95,
    rating: 5.0,
    reviewsCount: 63,
    description:
      'Fully customizable showstopper crafted with custom calligraphy names, delicate edible gold leaf foil, textured blush fondant, and handmade sugar English roses tailored to your theme.',
    spongeFlavor: 'Custom: Choice of Vanilla, Chocolate, or Rose',
    fillingFlavor: 'Custom Ganache or Berry Silk Cream',
    dietary: ['100% Eggless', 'Nut Free'],
    image: '/images/bakery/category_custom_cake.jpg',
    isBestseller: true,
    preparationTime: '24 hours notice',
    sizes: [
      { label: '1.5 kg Designer Tier', weight: '1.5 kg', price: 75, serves: '12–15 guests' },
      { label: '2.5 kg Dual Tier', weight: '2.5 kg', price: 95, serves: '22–28 guests' },
      { label: '4.0 kg Triple Celebration', weight: '4.0 kg', price: 160, serves: '40–50 guests' },
    ],
  },
  {
    id: 'salted-caramel-crunch',
    name: 'Salted Butter Caramel Pecan',
    category: 'Birthday Cakes',
    price: 40,
    rating: 4.9,
    reviewsCount: 89,
    description:
      'Moist brown-sugar sponge with slow-simmered Fleur de Sel butter caramel, candied Georgia pecans, and fluffy whipped mascarpone cream rosettes.',
    spongeFlavor: 'Brown Butter Sponge',
    fillingFlavor: 'Fleur de Sel Caramel & Candied Pecan Praline',
    dietary: ['100% Eggless'],
    image: '/images/bakery/hero_celebration_cake.jpg',
    isBestseller: false,
    preparationTime: '4 hours notice',
    sizes: [
      { label: 'Petite (0.5 kg)', weight: '0.5 kg', price: 30, serves: '4–6 guests' },
      { label: 'Classic (1.0 kg)', weight: '1.0 kg', price: 40, serves: '8–12 guests' },
      { label: 'Grand (2.0 kg)', weight: '2.0 kg', price: 70, serves: '16–22 guests' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Pooja M.',
    city: 'South Extension',
    occasion: '1st Birthday Celebration',
    quote:
      '“The cake was an absolute masterpiece! Not only was the blush floral design breathtaking, but every bite of the berry vanilla sponge was moist and perfectly balanced. Ordering via WhatsApp was seamless!”',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Rahul & Tanya S.',
    city: 'Defence Colony',
    occasion: '5th Wedding Anniversary',
    quote:
      '“The Cake Wala made our anniversary unforgettable. The dark Belgian chocolate ganache was rich without being overly sweet. Delivered right on the dot in immaculate chilled packaging.”',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Arjun K.',
    city: 'Vasant Vihar',
    occasion: 'Custom Wedding Tier',
    quote:
      '“The three-tier ivory cake looked like something out of a European patisserie magazine. All 70 of our guests complimented the flavor. Truly Delhi’s best bespoke bakery!”',
    rating: 5,
  },
];

export const BAKERY_PHONE = '+919876543210';
export const WHATSAPP_LINK = 'https://wa.me/919876543210';
