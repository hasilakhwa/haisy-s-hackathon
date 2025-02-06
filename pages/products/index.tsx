
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Product } from '../../types/marketplace'

const ProductsPage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <Layout title="Products | Marketplace">
        <div className="text-center">Loading products...</div>
      </Layout>
    )
  }

  return (
    <Layout title="Products | Marketplace">
      <h1 className="text-3xl font-bold mb-8">Available Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            {product.imageUrl && (
              <div className="mb-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
              </div>
            )}
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProductsPage
