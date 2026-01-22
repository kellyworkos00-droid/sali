import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/AddToCartButton";
import WishlistButton from "@/components/WishlistButton";
import ProductCard from "@/components/ProductCard";
import { Phone, Truck, Shield, Package, CheckCircle, Star, Award } from "lucide-react";
import RecentlyViewedTracker from "@/components/RecentlyViewedTracker";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Get related products from same category
  const allProducts = getProducts();
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pattern-topography relative">
      <RecentlyViewedTracker product={product} />
      <div className="absolute inset-0 bg-white/80"></div>
      {/* Enhanced Breadcrumb */}
      <div className="bg-white border-b shadow-sm relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-brand-500 font-medium transition">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-brand-500 font-medium transition">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-600 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        {/* Main Product Section */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Product Image - Larger and Enhanced */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Wishlist Button */}
                <div className="absolute top-6 left-6 z-10">
                  <WishlistButton product={product} />
                </div>
                {/* Enhanced Stock Badge */}
                {product.stock > 0 ? (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl backdrop-blur-sm border border-white/20 flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl backdrop-blur-sm border border-white/20">
                    Out of Stock
                  </div>
                )}
                
                {/* Featured Badge if applicable */}
                {product.featured && (
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl backdrop-blur-sm border border-white/20 flex items-center gap-2">
                    <Star size={18} fill="currentColor" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
                  <Shield className="text-brand-500 mx-auto mb-2" size={24} />
                  <p className="text-xs font-semibold text-gray-700">Quality Guaranteed</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
                  <Truck className="text-brand-500 mx-auto mb-2" size={24} />
                  <p className="text-xs font-semibold text-gray-700">Fast Delivery</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
                  <Award className="text-brand-500 mx-auto mb-2" size={24} />
                  <p className="text-xs font-semibold text-gray-700">Certified Products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info - Enhanced */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-24">
              {/* Category Badge */}
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-700 px-5 py-2 rounded-full text-sm font-bold capitalize mb-4 border border-brand-200">
                <Package size={16} />
                {product.category}
              </span>
              
              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900 leading-tight">{product.name}</h1>
              
              {/* Price Section */}
              <div className="mb-8 pb-8 border-b-2 border-gray-100">
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 font-black">
                    {formatPrice(product.price)}
                  </p>
                </div>
                {product.stock > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="font-bold text-sm">{product.stock} units available</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-brand-500 to-brand-600 rounded-full"></div>
                  Product Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>
              </div>

              {/* Add to Cart */}
              <div className="mb-6">
                <AddToCartButton product={product} />
              </div>

              {/* Contact Card */}
              <div className="p-6 bg-gradient-to-br from-brand-50 via-orange-50 to-yellow-50 rounded-2xl border-2 border-brand-200 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-900 flex items-center gap-2">
                  <Phone size={20} className="text-brand-600" />
                  Need Assistance?
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Our team is ready to help with bulk orders, technical specs, custom requirements, or any product questions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:from-brand-600 hover:to-brand-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact Sales Team
                  <Phone size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t-2 border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">You May Also Like</h2>
                <p className="text-gray-600">Similar products in the {product.category} category</p>
              </div>
              <Link 
                href={`/products?category=${product.category}`}
                className="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-2 transition group"
              >
                View All
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
