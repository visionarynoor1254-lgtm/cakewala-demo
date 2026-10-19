export type CakeCategory =
  | 'All'
  | 'Birthday Cakes'
  | 'Chocolate Cakes'
  | 'Wedding Cakes'
  | 'Anniversary Cakes'
  | 'Cupcakes & Pastries'
  | 'Custom Cakes';

export interface CakeSize {
  label: string;
  weight: string;
  price: number;
  serves: string;
}

export interface CakeProduct {
  id: string;
  name: string;
  category: CakeCategory;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  spongeFlavor: string;
  fillingFlavor: string;
  dietary: ('100% Eggless' | 'Contains Egg' | 'Nut Free' | 'Gluten Free Friendly')[];
  image: string;
  isBestseller?: boolean;
  preparationTime: string;
  sizes: CakeSize[];
}

export interface CartItem {
  cartItemId: string;
  product: CakeProduct;
  selectedSize: CakeSize;
  selectedFlavor: string;
  customMessage: string;
  quantity: number;
  unitPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  occasion: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface CustomOrderRequest {
  occasion: string;
  guestCount: string;
  cakeType: string;
  preferredFlavor: string;
  eventDate: string;
  deliveryTime: string;
  customMessage: string;
  specialInstructions: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
}
