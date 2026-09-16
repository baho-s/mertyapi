export interface Product {
  id: number;
  name: string;
  image: string;
}

export interface ProductsByCategory {
  [key: string]: Product[];
}
