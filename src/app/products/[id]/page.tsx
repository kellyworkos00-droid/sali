import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-red-600 font-bold mb-6">
            {formatPrice(product.price)}
          </p>

          {product.stock > 0 ? (
            <p className="text-green-600 mb-4">✓ In Stock ({product.stock} available)</p>
          ) : (
            <p className="text-red-600 mb-4">Out of Stock</p>
          )}

          <div className="border-t border-b py-6 mb-6">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <span className="inline-block bg-gray-200 px-4 py-2 rounded-full text-sm capitalize">
              {product.category}
            </span>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Contact us for bulk orders, technical specifications, or any questions about this product.
            </p>
            <a
              href="/contact"
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
