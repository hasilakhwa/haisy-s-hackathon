import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Marketplace">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Marketplace</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">For Buyers</h2>
            <p>Discover unique products from verified sellers</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">For Sellers</h2>
            <p>Reach customers worldwide with your products</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Secure Platform</h2>
            <p>Safe and reliable marketplace transactions</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;