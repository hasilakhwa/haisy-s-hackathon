
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../types/marketplace'
import { ApiError, handleApiError } from '../../utils/errorHandler'
import { mockProducts } from '../../utils/testUtils'

const products = mockProducts;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET':
        const { minPrice, maxPrice } = req.query;
        const categoryFilter = req.query.category as string;
        let filteredProducts = [...products];
        
        if (categoryFilter) {
          filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
        }
        
        if (minPrice) {
          filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice));
        }
        
        if (maxPrice) {
          filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice));
        }
        
        return res.status(200).json(filteredProducts);

      case 'POST':
        const product = req.body as Product;
        if (!product.name || !product.price) {
          throw new ApiError(400, 'Missing required fields');
        }
        const newProduct = {
          ...product,
          id: `prod-${Date.now()}`
        };
        products.push(newProduct);
        return res.status(201).json(newProduct);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        throw new ApiError(405, `Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    const { statusCode, message } = handleApiError(error);
    return res.status(statusCode).json({ message });
  }
}
