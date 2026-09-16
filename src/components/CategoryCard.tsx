import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    slug: string;
    image: string;
  };
  onClick: (slug: string) => void;
}

export const CategoryCard: React.FC<CategoryProps> = ({ category, onClick }) => {
  return (
    <button
      onClick={() => onClick(category.slug)}
      className="category-card group overflow-hidden border border-[#d9d0c2] bg-[#f5f0e7] text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a5b]"
      type="button"
    >
      <div className="category-card__media overflow-hidden bg-[#ddd1bf]">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="category-card__footer flex items-center justify-between gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3">
        <span className="category-card__title text-sm font-semibold tracking-[0.02em] text-[#201b16] sm:text-[15px]">
          {category.name}
        </span>
        <span className="category-card__icon flex h-5 w-5 items-center justify-center border border-[#d4c0a4] bg-transparent text-[#201b16] sm:h-6 sm:w-6">
          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </span>
      </div>
    </button>
  );
};
