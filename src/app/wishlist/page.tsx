"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    removeFromWishlist(item.id);
    toast.success("Moved to cart!");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-12 max-w-md mx-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-red-500" size={48} />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Save your favorite products for later!</p>
          <Link
            href="/products"
            className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-brand-600 hover:to-brand-700 transition inline-block shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Heart size={40} className="text-yellow-300 fill-current" />
            <h1 className="text-4xl md:text-5xl font-bold">My Wishlist</h1>
          </div>
          <p className="text-brand-100 text-lg">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
          <button
            onClick={clearWishlist}
            className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
              <Link href={`/products/${item.id}`} className="block relative h-64 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(item.id);
                    toast.success("Removed from wishlist");
                  }}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>
              </Link>

              <div className="p-4">
                <Link href={`/products/${item.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-brand-600 transition line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <p className="text-brand-600 font-bold text-xl">{formatPrice(item.price)}</p>
                  {item.stock > 0 ? (
                    <span className="text-green-600 text-sm font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock === 0}
                  className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white py-3 rounded-lg font-semibold hover:from-brand-600 hover:to-brand-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingCart size={18} />
                  {item.stock > 0 ? "Move to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block bg-white text-brand-600 border-2 border-brand-600 px-8 py-3 rounded-xl font-semibold hover:bg-brand-50 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
