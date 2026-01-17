import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import Link from "next/link";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/products"
          className={`px-6 py-2 rounded-lg transition font-semibold ${
            !category
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
          }`}
        >
          All Products
        </Link>
        <Link
          href="/products?category=tools"
          className={`px-6 py-2 rounded-lg transition font-semibold ${
            category === "tools"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
          }`}
        >
          Tools
        </Link>
        <Link
          href="/products?category=machines"
          className={`px-6 py-2 rounded-lg transition font-semibold ${
            category === "machines"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
          }`}
        >
          Machines
        </Link>
        <Link
          href="/products?category=supplies"
          className={`px-6 py-2 rounded-lg transition font-semibold ${
            category === "supplies"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
          }`}
        >
          Supplies
        </Link>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
