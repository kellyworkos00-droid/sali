"use client";

import { useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/lib/products";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (product.stock === 0) {
      toast.error("Product is out of stock");
      return;
    }

    // Add to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });

    // Trigger animation
    setIsAnimating(true);
    
    // Create flying image element
    if (buttonRef.current) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      
      const flyingImg = document.createElement("div");
      flyingImg.style.position = "fixed";
      flyingImg.style.left = `${rect.left}px`;
      flyingImg.style.top = `${rect.top}px`;
      flyingImg.style.width = "40px";
      flyingImg.style.height = "40px";
      flyingImg.style.zIndex = "9999";
      flyingImg.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      flyingImg.style.pointerEvents = "none";
      flyingImg.innerHTML = `<div class="bg-blue-500 rounded-full p-2 shadow-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>`;
      
      document.body.appendChild(flyingImg);

      // Animate to cart position (top right on desktop, bottom on mobile)
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        flyingImg.style.left = isMobile ? "50%" : "calc(100% - 100px)";
        flyingImg.style.top = isMobile ? "calc(100% - 80px)" : "30px";
        flyingImg.style.opacity = "0";
        flyingImg.style.transform = "scale(0.3)";
      }, 10);

      // Remove element after animation
      setTimeout(() => {
        document.body.removeChild(flyingImg);
        setIsAnimating(false);
      }, 850);
    }

    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <label className="font-semibold">Quantity:</label>
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100 transition"
          >
            -
          </button>
          <span className="px-6 py-2 border-x">{quantity}</span>
          <button
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            className="px-4 py-2 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>

      <button
        ref={buttonRef}
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className={`bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed ${
          isAnimating ? "scale-95" : ""
        }`}
      >
        <ShoppingCart size={20} className={isAnimating ? "animate-bounce" : ""} />
        Add to Cart
      </button>
    </div>
  );
}
