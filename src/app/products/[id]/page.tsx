import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/AddToCartButton";
import { Phone } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-500">Products</Link>
            <span>/</span>
            <span className="text-brand-500 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Product Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border-2 border-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {/* Stock Badge */}
            {product.stock > 0 ? (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                In Stock
              </div>
            ) : (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Out of Stock
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-semibold capitalize mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{product.name}</h1>
            </div>
            
            <div className="mb-6 pb-6 border-b">
              <div className="flex items-baseline gap-3">
                <p className="text-4xl text-brand-600 font-bold">
                  {formatPrice(product.price)}
                </p>
              </div>
              {product.stock > 0 && (
                <p className="text-green-600 font-medium mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {product.stock} units available
                </p>
              )}
            </div>

            <div className="mb-6 pb-6 border-b">
              <h2 className="text-xl font-bold mb-3 text-gray-900">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <AddToCartButton product={product} />

            <div className="mt-6 p-5 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl border-l-4 border-brand-500">
              <h3 className="font-bold mb-2 text-brand-900 flex items-center gap-2">
                <Phone size={18} />
                Need Help?
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Contact us for bulk orders, technical specifications, or any questions about this product.
              </p>
              <Link
                href="/contact"
                className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1 transition"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
