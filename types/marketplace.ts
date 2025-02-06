
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sellerId: string;
  category: string;
  imageUrl?: string;
}

export interface Seller {
  id: string;
  name: string;
  email: string;
  rating: number;
  productCount: number;
}
