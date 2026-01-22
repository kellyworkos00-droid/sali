import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface RecentlyViewedState {
  items: Product[];
  addProduct: (product: Product) => void;
  clearHistory: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      items: [],
      addProduct: (product) =>
        set((state) => {
          // Remove if already exists
          const filtered = state.items.filter((p) => p.id !== product.id);
          // Add to beginning and keep only last 8 items
          return { items: [product, ...filtered].slice(0, 8) };
        }),
      clearHistory: () => set({ items: [] }),
    }),
    {
      name: "recently-viewed-storage",
    }
  )
);
