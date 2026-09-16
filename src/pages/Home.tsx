import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductGrid } from '../components/ProductGrid';
import { categories } from '../data/categories';
import { productsByCategory } from '../data/products';

interface HomeProps {
  searchQuery: string;
}

export const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  // Hash tabanlı routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentCategory(hash || null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCategoryClick = (slug: string) => {
    window.location.hash = slug;
  };

  const handleBackHome = () => {
    window.location.hash = '';
  };

  const currentCategoryData = currentCategory
    ? categories.find((cat) => cat.slug === currentCategory)
    : null;

  const currentProducts = currentCategory
    ? productsByCategory[currentCategory]
    : [];

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredCategories = normalizedSearchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(normalizedSearchQuery)
      )
    : categories;

  return (
    <>
      {/* Ana Kategori Grid - Sadece hiçbir kategori seçilmediğinde göster */}
      {!currentCategory && (
        <section id="anasayfa">
          <CategoryGrid categories={filteredCategories} onCategoryClick={handleCategoryClick} />
        </section>
      )}

      {/* Kategori Detay Sayfaları */}
      {currentCategory && currentCategoryData && (
        <section id="category-detail" className="animate-fadeIn">
          <div className="mb-8 flex items-center justify-between pb-6 border-b border-line">
            <button
              onClick={handleBackHome}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold uppercase tracking-wider no-underline hover:text-[#c9964a] transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Tüm Kategoriler
            </button>
            <h2 className="text-lg font-bold uppercase tracking-widest text-ink\">
              {currentCategoryData.name}
            </h2>
          </div>

          <ProductGrid products={currentProducts} />
        </section>
      )}

      {/* Placeholder Sayfalar (Hakkımızda, Fiyatlar, vb.) */}
      {currentCategory && !currentCategoryData && (
        <section id="placeholder-page">
          <button
            onClick={handleBackHome}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gold uppercase tracking-wider no-underline mb-4 hover:text-[#c9964a] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Ana Sayfaya Dön
          </button>
          <h1 className="text-xl font-bold mb-4">
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1).replace('-', ' ')}
          </h1>
          <p className="text-muted">Bu sayfa yakında hazırlanacaktır.</p>
        </section>
      )}
    </>
  );
};
