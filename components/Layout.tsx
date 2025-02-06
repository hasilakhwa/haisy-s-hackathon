
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'Marketplace' }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A modern marketplace platform" />
      </Head>
      
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Marketplace
          </Link>
          <div className="space-x-4">
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link href="/sellers" className="hover:text-gray-300">
              Sellers
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Marketplace</h3>
            <p className="text-blue-100">Your one-stop shop for unique products from around the world.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-blue-100 hover:text-white">Products</Link></li>
              <li><Link href="/sellers" className="text-blue-100 hover:text-white">Sellers</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="text-blue-100 hover:text-white">FAQ</Link></li>
              <li><Link href="/terms" className="text-blue-100 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-blue-100 mb-4">Stay updated with our latest offers</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg w-full text-gray-800" />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8 pt-8 border-t border-blue-700">
          <p className="text-blue-100">© 2025 Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
