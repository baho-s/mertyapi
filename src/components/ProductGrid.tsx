import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProduct = selectedIndex === null ? null : products[selectedIndex];

  const closeModal = () => setSelectedIndex(null);
  const showPrevious = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex - 1 + products.length) % products.length
    );
  };
  const showNext = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % products.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, products.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpen={() => setSelectedIndex(products.indexOf(product))}
        />
      ))}
      </div>

      {selectedProduct && (
        <ProductLightbox
          product={selectedProduct}
          onClose={closeModal}
          onPrevious={showPrevious}
          onNext={showNext}
          hasMultipleProducts={products.length > 1}
        />
      )}
    </>
  );
};

interface ProductLightboxProps {
  product: Product;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasMultipleProducts: boolean;
}

const ProductLightbox: React.FC<ProductLightboxProps> = ({
  product,
  onClose,
  onPrevious,
  onNext,
  hasMultipleProducts,
}) => {
  const touchStartX = React.useRef<number | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} büyük görsel`}
      onClick={onClose}
      onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || !hasMultipleProducts) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 45) (distance > 0 ? onPrevious : onNext)();
        touchStartX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:right-4 sm:top-4"
        aria-label="Büyük görseli kapat"
      >
        <X className="h-5 w-5" />
      </button>
      {hasMultipleProducts && (
        <>
          <button type="button" onClick={(event) => { event.stopPropagation(); onPrevious(); }} className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white sm:left-4" aria-label="Önceki görsel">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" onClick={(event) => { event.stopPropagation(); onNext(); }} className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white sm:right-4" aria-label="Sonraki görsel">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="product-lightbox-image max-h-[calc(100dvh-5rem)] max-w-[calc(100vw-2rem)] select-none touch-pan-y sm:max-h-[calc(100dvh-6rem)] sm:max-w-[calc(100vw-4rem)]"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};
