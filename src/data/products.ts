import { getCategoryImages } from './imageCatalog';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductsByCategory {
  [key: string]: Product[];
}

const categoryNames: Record<string, string> = {
  'mutfak-dolabi': 'Mutfak Dolabı',
  'ahsap-merdiven': 'Ahşap Merdiven',
  'ahsap-masa': 'Ahşap Masa',
  kamelya: 'Kamelya',
  fortmanto: 'Fortmanto',
  gardolap: 'Gardolap',
  'banyo-dolabi': 'Banyo Dolabı',
  kapi: 'Kapı',
};

const generateProducts = (categoryId: string): Product[] => {
  const categoryName = categoryNames[categoryId];
  return getCategoryImages(categoryId).map((image, index) => ({
    id: index + 1,
    name: image.name ?? `${categoryName} ${String(image.index).padStart(2, '0')}`,
    image: image.url,
  }));
};

export const productsByCategory: ProductsByCategory = {
  'mutfak-dolabi': generateProducts('mutfak-dolabi'),
  'ahsap-merdiven': generateProducts('ahsap-merdiven'),
  'ahsap-masa': generateProducts('ahsap-masa'),
  kamelya: generateProducts('kamelya'),
  fortmanto: generateProducts('fortmanto'),
  gardolap: generateProducts('gardolap'),
  'banyo-dolabi': generateProducts('banyo-dolabi'),
  kapi: generateProducts('kapi'),
};
