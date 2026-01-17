import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/lib/products";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block perspective-container">
      <div className="bg-white rounded-lg md:rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 transform-3d hover-tilt-3d">
        <div className="relative h-32 sm:h-40 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <div className="bg-white text-gray-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <Eye size={20} />
            </div>
            <div className="bg-blue-400 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
              <ShoppingCart size={20} />
            </div>
          </div>
          {/* Stock Badge */}
          <div className="absolute top-3 right-3">
            {product.stock > 0 ? (
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                In Stock
              </span>
            ) : (
              <span className="bg-blue-300 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Out of Stock
              </span>
            )}
          </div>
        </div>
        <div className="p-2 sm:p-3 md:p-5">
          <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1 md:mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-2 md:mb-4 line-clamp-1 md:line-clamp-2 leading-relaxed hidden sm:block">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2 md:pt-3 border-t border-gray-100">
            <span className="text-blue-400 font-bold text-sm sm:text-lg md:text-2xl">
              {formatPrice(product.price)}
            </span>
            <span className="text-[9px] sm:text-xs text-gray-500 bg-gray-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
