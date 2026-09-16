import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsImageOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isImageOpen]);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-[#e8e0d5] active:scale-95">
        <button
          type="button"
          onClick={() => setIsImageOpen(true)}
          className="block w-full overflow-hidden bg-gray-100 aspect-[4/3] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b58a5b]"
          aria-label={`${product.name} görselini büyüt`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover filter saturate-95 contrast-100 transition-all duration-500 group-hover:scale-110 group-hover:saturate-100"
          />
        </button>
        <div className="px-4 py-3 bg-[#f9f6f1]">
          <span className="block text-sm font-semibold text-ink tracking-tight line-clamp-2">{product.name}</span>
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} büyük görsel`}
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Büyük görseli kapat"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
