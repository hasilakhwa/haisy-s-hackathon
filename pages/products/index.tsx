import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import ProductFilters from '../../components/ProductFilters'
import { Product } from '../../types/marketplace'

const ProductsPage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    if (!category) {
      setFilteredProducts(products)
      return
    }
    const filtered = products.filter(product => product.category === category)
    setFilteredProducts(filtered)
  }

  const handlePriceSort = (direction: 'asc' | 'desc') => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (direction === 'asc') {
        return a.price - b.price
      }
      return b.price - a.price
    })
    setFilteredProducts(sorted)
  }

  if (loading) {
    return (
      <Layout title="Products | Marketplace">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Products | Marketplace">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Discover Amazing Products</h1>
          <p className="text-gray-600 text-lg">Browse through our curated collection of unique items</p>
        </div>
      </div>

      <ProductFilters
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onPriceSort={handlePriceSort}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No products found matching your criteria
        </div>
      )}
    </Layout>
  )
}

export default ProductsPage