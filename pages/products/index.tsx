
import { NextPage } from 'next'
import Layout from '../../components/Layout'

const ProductsPage: NextPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, seller: 'Seller A' },
    { id: 2, name: 'Product 2', price: 149.99, seller: 'Seller B' },
    { id: 3, name: 'Product 3', price: 199.99, seller: 'Seller C' },
  ]

  return (
    <Layout title="Products | Marketplace">
      <h1 className="text-3xl font-bold mb-8">Available Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Seller: {product.seller}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProductsPage
