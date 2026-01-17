import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Sali Products Kenya",
  description: "Browse our extensive catalog of tools, machines, and industrial supplies.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allProducts = getProducts();
  const products = searchParams.category
    ? allProducts.filter((p) => p.category === searchParams.category)
    : allProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="/products"
          className={`px-6 py-2 rounded-lg transition ${
            !searchParams.category
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All Products
        </a>
        <a
          href="/products?category=tools"
          className={`px-6 py-2 rounded-lg transition ${
            searchParams.category === "tools"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tools
        </a>
        <a
          href="/products?category=machines"
          className={`px-6 py-2 rounded-lg transition ${
            searchParams.category === "machines"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Machines
        </a>
        <a
          href="/products?category=supplies"
          className={`px-6 py-2 rounded-lg transition ${
            searchParams.category === "supplies"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Supplies
        </a>
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
