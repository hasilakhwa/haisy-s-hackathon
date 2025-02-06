
import { Product } from '../types/marketplace'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`border rounded-lg p-4 shadow-md transition-transform duration-200 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.imageUrl && (
        <div className="mb-4 overflow-hidden rounded">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-200"
          />
        </div>
      )}
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Category: {product.category}</span>
        <span className="text-lg font-bold text-green-600">${product.price}</span>
      </div>
      <button 
        className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        onClick={() => alert('Added to cart!')}
      >
        Add to Cart
      </button>
    </div>
  )
}
