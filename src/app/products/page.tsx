import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import Link from "next/link";
import { Package, Wrench, Cog, Box } from "lucide-react";

export const metadata: Metadata = {
  title: "Products - Sali Products Kenya",
  description: "Browse our extensive catalog of tools, machines, and industrial supplies.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allProducts = getProducts();
  const products = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Package size={48} className="text-yellow-300" />
            <div>
              <h1 className="text-5xl font-bold">Our Products</h1>
              <p className="text-red-100 text-lg mt-2">Discover quality tools and machines for every need</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className={`px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 ${
                !category
                  ? "bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-lg shadow-blue-300/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-400 border-2 border-gray-200"
              }`}
            >
              <Package size={18} />
              All Products
            </Link>
            <Link
              href="/products?category=tools"
              className={`px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 ${
                category === "tools"
                  ? "bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-lg shadow-blue-300/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-400 border-2 border-gray-200"
              }`}
            >
              <Wrench size={18} />
              Tools
            </Link>
            <Link
              href="/products?category=machines"
              className={`px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 ${
                category === "machines"
                  ? "bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-lg shadow-blue-300/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-400 border-2 border-gray-200"
              }`}
            >
              <Cog size={18} />
              Machines
            </Link>
            <Link
              href="/products?category=supplies"
              className={`px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 ${
                category === "supplies"
                  ? "bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-lg shadow-blue-300/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-400 border-2 border-gray-200"
              }`}
            >
              <Box size={18} />
              Supplies
            </Link>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-blue-400">{products.length}</span> {category ? `${category}` : 'products'} found
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-[fadeIn_0.5s_ease-in]"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <Package size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-xl font-semibold">No products found in this category.</p>
            <Link href="/products" className="text-blue-400 hover:underline mt-4 inline-block">
              View all products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
