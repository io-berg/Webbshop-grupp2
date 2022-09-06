export const hello = 1;

export interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  longDescription: string;
  amountInStock: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  stars: number;
  title: string;
  body: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export type ProductCreate = Omit<Product, "id" | "reviews">;
