import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
  onOpen: () => void;
}

export const ProductCard: React.FC<ProductProps> = ({ product, onOpen }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-[#e8e0d5] active:scale-95">
        <button
          type="button"
          onClick={onOpen}
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
  );
};
