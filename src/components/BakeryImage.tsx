import React, { useState } from 'react';

// Fallback high-resolution patisserie imagery from reliable Unsplash CDN
export const FALLBACK_IMAGES: Record<string, string> = {
  hero: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
  birthday: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
  chocolate: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
  wedding: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=80',
  cupcakes: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=80',
  anniversary: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
  custom: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80',
  default: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
};

interface BakeryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: keyof typeof FALLBACK_IMAGES;
}

export const BakeryImage: React.FC<BakeryImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'default',
  loading = 'lazy',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      const fallbackUrl = FALLBACK_IMAGES[fallbackType] || FALLBACK_IMAGES.default;
      setCurrentSrc(fallbackUrl);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#F3ECE2] ${className}`}>
      {/* Subtle skeleton shimmer before load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3ECE2] via-[#E8DFD3] to-[#F3ECE2] animate-pulse" />
      )}

      <img
        src={currentSrc}
        alt={alt || 'The Cake Wala artisanal cake'}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
