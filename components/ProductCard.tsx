
import { Product } from '../types/marketplace'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
        isHovered ? 'transform scale-105 shadow-xl' : ''
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
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => alert('Added to cart!')}
      >
        Add to Cart
      </button>
    </div>
  )
}
