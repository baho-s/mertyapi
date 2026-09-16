import { getCategoryImages } from './imageCatalog';

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'mutfak-dolabi',
    name: 'Mutfak Dolabı',
    slug: 'mutfak-dolabi',
    image: getCategoryImages('mutfak-dolabi')[0]?.url ?? '',
  },
  {
    id: 'ahsap-merdiven',
    name: 'Ahşap Merdiven',
    slug: 'ahsap-merdiven',
    image: getCategoryImages('ahsap-merdiven')[0]?.url ?? '',
  },
  {
    id: 'ahsap-masa',
    name: 'Ahşap Masa',
    slug: 'ahsap-masa',
    image: getCategoryImages('ahsap-masa')[0]?.url ?? '',
  },
  {
    id: 'kamelya',
    name: 'Kamelya',
    slug: 'kamelya',
    image: getCategoryImages('kamelya')[0]?.url ?? '',
  },
  {
    id: 'fortmanto',
    name: 'Fortmanto',
    slug: 'fortmanto',
    image: getCategoryImages('fortmanto')[0]?.url ?? '',
  },
  {
    id: 'gardolap',
    name: 'Gardolap',
    slug: 'gardolap',
    image: getCategoryImages('gardolap')[0]?.url ?? '',
  },
  {
    id: 'banyo-dolabi',
    name: 'Banyo Dolabı',
    slug: 'banyo-dolabi',
    image: getCategoryImages('banyo-dolabi')[0]?.url ?? '',
  },
  {
    id: 'kapi',
    name: 'Kapı',
    slug: 'kapi',
    image: getCategoryImages('kapi')[0]?.url ?? '',
  },
];
