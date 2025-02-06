
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../types/marketplace'
import { ApiError, handleApiError } from '../../utils/errorHandler'

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    description: 'High-quality wireless headphones',
    price: 199.99,
    sellerId: 'seller1',
    category: 'Electronics',
    imageUrl: '/images/headphones.jpg'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch',
    price: 299.99,
    sellerId: 'seller2',
    category: 'Electronics',
    imageUrl: '/images/watch.jpg'
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
        const { name, description, price, category, sellerId } = req.body;
        
        if (!name || !price || !sellerId) {
          throw new ApiError(400, 'Missing required fields');
        }
        
        const newProduct: Product = {
          id: Date.now().toString(),
          name,
          description,
          price: Number(price),
          sellerId,
          category,
          imageUrl: req.body.imageUrl
        };
        
        products.push(newProduct);
        return res.status(201).json(newProduct);

      default:
        throw new ApiError(405, 'Method not allowed');
    }
  } catch (error) {
    const { statusCode, message } = handleApiError(error);
    res.status(statusCode).json({ error: message });
  }
}
