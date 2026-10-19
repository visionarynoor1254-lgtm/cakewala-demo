import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { PopularCakes } from './components/PopularCakes';
import { ProductModal } from './components/ProductModal';
import { CustomOrderSection } from './components/CustomOrderSection';
import { OurStorySection } from './components/OurStorySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PRODUCTS } from './data/bakeryData';
import { CakeProduct, CakeCategory, CakeSize, CartItem } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>('All');
  const [selectedProduct, setSelectedProduct] = useState<CakeProduct | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add configured cake to cart
  const handleAddToCart = (
    product: CakeProduct,
    size: CakeSize,
    customMessage: string,
    quantity: number
  ) => {
    const cartItemId = `${product.id}-${size.label}-${customMessage.trim()}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          selectedSize: size,
          selectedFlavor: product.spongeFlavor,
          customMessage: customMessage.trim(),
          quantity,
          unitPrice: size.price,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Category card click scrolls smoothly down to cakes catalog and filters it
  const handleCategorySelect = (category: CakeCategory) => {
    setActiveCategory(category);
    const element = document.getElementById('cakes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F3EB] text-[#4B3028] flex flex-col font-sans selection:bg-[#E8B3B5]/40 selection:text-[#4B3028]">
      {/* Slim Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => handleNavigate('cakes')}
          onCustomClick={() => handleNavigate('custom-orders')}
        />

        {/* Shop by Category: Find Your Perfect Cake */}
        <CategorySection onSelectCategory={handleCategorySelect} />

        {/* Popular Cakes Catalog */}
        <PopularCakes
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => setSelectedProduct(p)}
        />

        {/* Our Story / Artisanal Bakery Philosophy */}
        <OurStorySection onExploreCakes={() => handleNavigate('cakes')} />

        {/* Bespoke Custom Orders & WhatsApp Enquiry Form */}
        <CustomOrderSection />

        {/* Celebration Visual Gallery */}
        <GallerySection />

        {/* Testimonials: Sweet Words */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Quick View & Customization Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
