import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../types/marketplace'
import { ApiError, handleApiError } from '../../utils/errorHandler'

const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    description: 'Latest model smartphone with advanced features',
    price: 699.99,
    category: 'Electronics',
    sellerId: 'seller1',
    imageUrl: '/images/smartphone.jpg'
  },
  {
    id: '2',
    name: 'Laptop',
    description: 'Powerful laptop for work and gaming',
    price: 1299.99,
    category: 'Electronics',
    sellerId: 'seller2',
    imageUrl: '/images/laptop.jpg'
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET':
        const { category, minPrice, maxPrice } = req.query;
        let filteredProducts = [...products];

        if (category) {
          filteredProducts = filteredProducts.filter(p => p.category === category);
        }

        if (minPrice) {
          filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice));
        }

        if (maxPrice) {
          filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice));
        }

        return res.status(200).json(filteredProducts);

      case 'POST':
        const newProduct = req.body;
        products.push(newProduct);
        return res.status(201).json(newProduct);

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    handleApiError(error as ApiError, res);
  }
}