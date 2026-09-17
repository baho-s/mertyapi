export interface CatalogImage {
  index: number;
  url: string;
  name?: string;
}

const imageModules = import.meta.glob<string>('../assets/image/**/*.jpeg', {
  eager: true,
  import: 'default',
  query: '?url',
});

const nameFiles = import.meta.glob<string>('../assets/image/**/*.txt', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const normalizeImageKey = (key: string): string =>
  key.replace(/(\d+)$/, (_, index: string) => String(Number(index)));

const namesByCategory: Record<string, Map<string, string>> = {};

Object.entries(nameFiles).forEach(([path, content]) => {
  const match = path.match(/\.\.\/assets\/image\/([^/]+)\/[^/]+\.txt$/);

  if (!match) return;

  const [, categoryId] = match;
  const names = new Map<string, string>();

  content.split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex < 0) return;

    const key = line.slice(0, separatorIndex).trim();
    const name = line.slice(separatorIndex + 1).trim();
    if (key && name) names.set(normalizeImageKey(key), name);
  });

  namesByCategory[categoryId] = names;
});

const imageCatalog: Record<string, CatalogImage[]> = {};

Object.entries(imageModules).forEach(([path, url]) => {
  const match = path.match(/\.\.\/assets\/image\/([^/]+)\/([^/]+)\.jpeg$/);

  if (!match) return;

  const [, categoryId, imageFileName] = match;
  const imageKey = imageFileName.replace(/\.jpeg$/, '');
  const imageIndex = imageKey.match(/(\d+)$/)?.[1];
  if (!imageIndex) return;

  imageCatalog[categoryId] ??= [];
  imageCatalog[categoryId].push({
    index: Number(imageIndex),
    name: namesByCategory[categoryId]?.get(normalizeImageKey(imageKey)),
    url,
  });
});

Object.values(imageCatalog).forEach((images) => {
  images.sort((first, second) => first.index - second.index);
});

export const getCategoryImages = (categoryId: string): CatalogImage[] =>
  imageCatalog[categoryId] ?? [];