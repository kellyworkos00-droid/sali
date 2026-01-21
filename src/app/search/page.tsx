import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import Link from "next/link";
import { Search as SearchIcon, Package, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Search Products - Sali Products Kenya",
  description: "Search our extensive catalog of tools, machines, and industrial supplies.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const searchQuery = q?.toLowerCase() || "";
  const allProducts = getProducts();
  
  const products = searchQuery
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.category.toLowerCase().includes(searchQuery)
      )
    : allProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <SearchIcon size={40} className="text-yellow-300" />
            <h1 className="text-4xl font-bold">Search Products</h1>
          </div>
          {searchQuery && (
            <p className="text-brand-100 text-lg">
              {products.length} result{products.length !== 1 ? "s" : ""} found for &quot;{q}&quot;
            </p>
          )}
          {!searchQuery && (
            <p className="text-brand-100 text-lg">
              Enter a search term to find products
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <form method="get" className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="q"
              defaultValue={searchQuery}
              placeholder="Search for tools, machines, supplies..."
              className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-300 focus:border-brand-500 focus:outline-none text-lg"
              autoFocus
            />
            {searchQuery && (
              <Link
                href="/search"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </Link>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white py-3 rounded-xl font-semibold hover:from-brand-600 hover:to-brand-700 transition shadow-lg"
          >
            Search
          </button>
        </form>

        {/* Results */}
        {searchQuery ? (
          products.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                <p className="text-gray-600">{products.length} product{products.length !== 1 ? "s" : ""}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg">
              <Package className="mx-auto text-gray-300 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms</p>
              <Link
                href="/products"
                className="inline-block bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-brand-600 hover:to-brand-700 transition shadow-lg"
              >
                Browse All Products
              </Link>
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <SearchIcon className="mx-auto text-brand-300 mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Search</h3>
            <p className="text-gray-600 mb-8">Enter keywords to find the tools and machines you need</p>
            
            {/* Quick Suggestions */}
            <div className="max-w-lg mx-auto">
              <p className="text-sm text-gray-500 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  href="/search?q=drill"
                  className="px-4 py-2 bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 rounded-full text-sm transition"
                >
                  Drill
                </Link>
                <Link
                  href="/search?q=saw"
                  className="px-4 py-2 bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 rounded-full text-sm transition"
                >
                  Saw
                </Link>
                <Link
                  href="/search?q=grinder"
                  className="px-4 py-2 bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 rounded-full text-sm transition"
                >
                  Grinder
                </Link>
                <Link
                  href="/search?q=tools"
                  className="px-4 py-2 bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 rounded-full text-sm transition"
                >
                  Tools
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
