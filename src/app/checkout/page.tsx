"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    postalCode: "",
    paymentMethod: "mpesa",
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 500 : 0; // KES 500 flat shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products before checking out!</p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real app, you would send this to your backend API
    console.log("Order Data:", {
      customer: formData,
      items,
      total,
    });

    toast.success("Order placed successfully!");
    clearCart();
    setIsProcessing(false);
    router.push("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customer Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="text-blue-600" size={24} />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    First Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Last Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} />
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Street Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      City <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      County <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.county}
                      onChange={(e) =>
                        setFormData({ ...formData, county: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="text-blue-600" size={24} />
                Payment Method
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-red-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={formData.paymentMethod === "mpesa"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-semibold">M-Pesa</div>
                    <div className="text-sm text-gray-600">
                      Pay securely with M-Pesa mobile money
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-red-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">
                      Visa, Mastercard accepted
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-red-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">
                      Pay when you receive your order
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-blue-600 font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-3">
                  <span>Total</span>
                  <span className="text-blue-600">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </button>

              <Link
                href="/cart"
                className="block w-full text-center mt-4 text-blue-600 hover:text-blue-700 transition"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
