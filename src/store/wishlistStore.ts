import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/products";

interface WishlistItem extends Product {}

interface WishlistStore {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToWishlist: (product) => {
        const items = get().items;
        const exists = items.some((item) => item.id === product.id);
        
        if (!exists) {
          set({ items: [...items, product] });
        }
      },
      
      removeFromWishlist: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },
      
      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
