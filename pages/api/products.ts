
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../types/marketplace'

// Mock data - replace with actual database
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Product | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(products)
  } else if (req.method === 'POST') {
    // Add product validation and creation logic here
    res.status(201).json({ message: 'Product created' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
