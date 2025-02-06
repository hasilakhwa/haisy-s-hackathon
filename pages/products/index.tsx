
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
      <h1 className="text-3xl font-bold mb-8">Available Products</h1>
      
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
