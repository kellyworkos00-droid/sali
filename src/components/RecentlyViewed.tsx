"use client";

import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import ProductCard from "./ProductCard";
import { Clock } from "lucide-react";

export default function RecentlyViewed() {
  const items = useRecentlyViewedStore((state) => state.items);

  if (items.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Clock size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recently Viewed</h2>
              <p className="text-gray-600">Products you&apos;ve recently checked out</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
