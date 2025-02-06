
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

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          © 2025 Marketplace. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
