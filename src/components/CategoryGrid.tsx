import React from 'react';
import { CategoryCard } from './CategoryCard';

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (slug: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategoryClick }) => {
  return (
    <section aria-label="Mobilya kategorileri" className="w-full">
      <div className="category-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
        ))}
      </div>
    </section>
  );
};
