"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import { Heart } from "lucide-react";
import { Product } from "@/lib/products";
import toast from "react-hot-toast";

export default function WishlistButton({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const handleToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-all ${
        inWishlist
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
      } shadow-md hover:scale-110`}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        size={20}
        className={inWishlist ? "fill-current" : ""}
      />
    </button>
  );
}
