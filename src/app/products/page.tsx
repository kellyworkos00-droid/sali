import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import Link from "next/link";
import { Package, Wrench, Cog, Box, Filter, SlidersHorizontal, Grid3x3, List } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Enhanced */}
      <div className="relative bg-gradient-to-r from-brand-500 to-brand-700 text-white py-20 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.1) 40px, rgba(255,255,255,.1) 80px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-[fadeIn_0.6s_ease-in]">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <Package size={56} className="text-yellow-300" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">Our Products</h1>
                <p className="text-brand-100 text-lg md:text-xl">Discover quality tools and machines for every need</p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-300">{allProducts.length}+</p>
                <p className="text-sm text-brand-100">Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-300">3</p>
                <p className="text-sm text-brand-100">Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-300">100%</p>
                <p className="text-sm text-brand-100">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Filter Section - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-brand-500">
          <div className="flex items-center gap-3 mb-6">
            <SlidersHorizontal className="text-brand-500" size={24} />
            <h3 className="text-xl font-bold text-gray-800">Filter Products</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            <Link
              href="/products"
              className={`px-4 md:px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-sm md:text-base ${
                !category
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105 border-2 border-brand-600"
                  : "bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border-2 border-gray-200 hover:border-brand-300"
              }`}
            >
              <Package size={18} />
              <span>All</span>
            </Link>
            <Link
              href="/products?category=tools"
              className={`px-4 md:px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-sm md:text-base ${
                category === "tools"
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105 border-2 border-brand-600"
                  : "bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border-2 border-gray-200 hover:border-brand-300"
              }`}
            >
              <Wrench size={18} />
              <span>Tools</span>
            </Link>
            <Link
              href="/products?category=machines"
              className={`px-4 md:px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-sm md:text-base ${
                category === "machines"
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105 border-2 border-brand-600"
                  : "bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border-2 border-gray-200 hover:border-brand-300"
              }`}
            >
              <Cog size={18} />
              <span>Machines</span>
            </Link>
            <Link
              href="/products?category=supplies"
              className={`px-4 md:px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-sm md:text-base ${
                category === "supplies"
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105 border-2 border-brand-600"
                  : "bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border-2 border-gray-200 hover:border-brand-300"
              }`}
            >
              <Box size={18} />
              <span>Supplies</span>
            </Link>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-2">
            <Filter className="text-brand-500" size={20} />
            <p className="text-gray-700 font-medium">
              <span className="font-bold text-brand-600 text-lg">{products.length}</span> 
              <span className="text-gray-600 ml-2">{category ? `${category}` : 'products'} found</span>
            </p>
          </div>
          {category && (
            <Link 
              href="/products" 
              className="text-brand-500 hover:text-brand-600 font-semibold text-sm flex items-center gap-1 transition"
            >
              Clear Filter
            </Link>
          )}
        </div>

        {/* Products Grid - Enhanced */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
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
            <p className="text-gray-600 text-xl font-semibold mb-2">No products found in this category.</p>
            <p className="text-gray-500 mb-6">Try browsing all products or select a different category</p>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-xl hover:bg-brand-600 transition font-semibold"
            >
              <Package size={20} />
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
