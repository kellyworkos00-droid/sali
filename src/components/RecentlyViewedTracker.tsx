"use client";

import { useEffect } from "react";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { Product } from "@/lib/products";

interface RecentlyViewedTrackerProps {
  product: Product;
}

export default function RecentlyViewedTracker({ product }: RecentlyViewedTrackerProps) {
  const addProduct = useRecentlyViewedStore((state) => state.addProduct);

  useEffect(() => {
    addProduct(product);
  }, [product, addProduct]);

  return null;
}
