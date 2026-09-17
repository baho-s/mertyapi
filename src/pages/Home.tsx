import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { About } from './About';
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

  if (currentCategory === 'hakkimizda') {
    return <About onBack={handleBackHome} />;
  }

  const currentCategoryData = currentCategory
    ? categories.find((cat) => cat.slug === currentCategory)
    : null;

  const currentProducts = currentCategory
    ? productsByCategory[currentCategory]
    : [];
  const allProducts = Object.values(productsByCategory).flat();

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = normalizedSearchQuery
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearchQuery)
      )
    : currentProducts;
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
          {filteredCategories.length > 0 && (
            <CategoryGrid categories={filteredCategories} onCategoryClick={handleCategoryClick} />
          )}
          {normalizedSearchQuery && filteredProducts.length > 0 && (
            <section className="mt-12 border-t border-line pt-8" aria-labelledby="search-results-title">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Tüm kategorilerde</p>
                  <h2 id="search-results-title" className="font-[Georgia,serif] text-2xl text-ink sm:text-3xl">
                    Ürün sonuçları
                  </h2>
                </div>
                <span className="text-xs text-muted">{filteredProducts.length} sonuç</span>
              </div>
              <ProductGrid products={filteredProducts} />
            </section>
          )}
          {normalizedSearchQuery && filteredCategories.length === 0 && filteredProducts.length === 0 && (
            <p className="py-12 text-center text-sm text-muted">
              “{searchQuery}” için sonuç bulunamadı.
            </p>
          )}
        </section>
      )}

      {/* Kategori Detay Sayfaları */}
      {currentCategory && currentCategoryData && (
        <section id="category-detail" className="animate-fadeIn">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-line pb-6">
            <button
              onClick={handleBackHome}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold uppercase tracking-wider no-underline hover:text-[#c9964a] transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Tüm Kategoriler
            </button>
            <h2 className="max-w-[48%] text-right text-sm font-bold uppercase leading-tight tracking-[0.16em] text-ink sm:max-w-none sm:text-lg sm:tracking-widest">
              {currentCategoryData.name}
            </h2>
          </div>

          {normalizedSearchQuery && filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : !normalizedSearchQuery ? (
            <ProductGrid products={currentProducts} />
          ) : (
            <p className="py-12 text-center text-sm text-muted">
              “{searchQuery}” için ürün bulunamadı.
            </p>
          )}
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
