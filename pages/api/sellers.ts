
import type { NextApiRequest, NextApiResponse } from 'next'
import { Seller } from '../../types/marketplace'

const sellers: Seller[] = [
  {
    id: 'seller1',
    name: 'Tech Store',
    email: 'tech@store.com',
    rating: 4.5,
    productCount: 25
  },
  {
    id: 'seller2',
    name: 'Electronics Hub',
    email: 'hub@electronics.com',
    rating: 4.8,
    productCount: 42
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Seller[] | Seller | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(sellers)
  } else if (req.method === 'POST') {
    // Add seller validation and creation logic here
    res.status(201).json({ message: 'Seller created' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
