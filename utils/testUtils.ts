
import { Product } from '../types/marketplace'

export const mockProducts: Product[] = [
  {
    id: 'test1',
    name: 'Test Product 1',
    description: 'Test Description 1',
    price: 99.99,
    sellerId: 'seller1',
    category: 'Test',
    imageUrl: '/test1.jpg'
  },
  {
    id: 'test2',
    name: 'Test Product 2',
    description: 'Test Description 2',
    price: 199.99,
    sellerId: 'seller2',
    category: 'Test',
    imageUrl: '/test2.jpg'
  }
]

export const createMockProduct = (overrides?: Partial<Product>): Product => ({
  id: 'test-' + Date.now(),
  name: 'Mock Product',
  description: 'Mock Description',
  price: 99.99,
  sellerId: 'mock-seller',
  category: 'Mock',
  imageUrl: '/mock.jpg',
  ...overrides
})
