export interface CatalogImage {
  index: number;
  url: string;
}

const imageModules = import.meta.glob<string>('../assets/image/**/*.jpeg', {
  eager: true,
  import: 'default',
  query: '?url',
});

const imageCatalog: Record<string, CatalogImage[]> = {};

Object.entries(imageModules).forEach(([path, url]) => {
  const match = path.match(/\.\.\/assets\/image\/([^/]+)\/[^/]+-(\d+)\.jpeg$/);

  if (!match) return;

  const [, categoryId, imageIndex] = match;
  imageCatalog[categoryId] ??= [];
  imageCatalog[categoryId].push({ index: Number(imageIndex), url });
});

Object.values(imageCatalog).forEach((images) => {
  images.sort((first, second) => first.index - second.index);
});

export const getCategoryImages = (categoryId: string): CatalogImage[] =>
  imageCatalog[categoryId] ?? [];