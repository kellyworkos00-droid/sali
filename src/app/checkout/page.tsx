"use client";

import { useState, useEffect } from "react";
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
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

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
    mpesaPhone: "",
  });

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Location access denied:", error);
        }
      );
    }
  }, []);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 500 : 0; // KES 500 flat shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-12 max-w-md mx-4">
          <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="text-brand-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products before checking out!</p>
          <Link
            href="/products"
            className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-brand-600 hover:to-brand-700 transition inline-block shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Prepare order data for bylon admin
      const orderData = {
        customer: {
          id: `CUST-${Date.now()}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          createdAt: new Date().toISOString(),
        },
        items: items.map((item) => ({
          productId: item.id,
          productName: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        shippingAddress: {
          street: formData.address,
          city: formData.city,
          county: formData.county,
          postalCode: formData.postalCode,
          country: "Kenya",
          latitude: location?.latitude,
          longitude: location?.longitude,
        },
        payment: {
          method: formData.paymentMethod,
          status: "pending" as const,
          amount: total,
          mpesaPhone: formData.mpesaPhone || formData.phone,
        },
        subtotal,
        tax: 0,
        shipping,
        total,
      };

      // Send order to API (which bylon can access)
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Order placed successfully!");
        clearCart();
        router.push(`/order-confirmation?orderId=${result.data.orderNumber}`);
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
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
                <Mail className="text-brand-200" size={24} />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    First Name <span className="text-brand-200">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Last Name <span className="text-brand-200">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-brand-200">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-brand-200">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-brand-200" size={24} />
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Street Address <span className="text-brand-200">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      City <span className="text-brand-200">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      County <span className="text-brand-200">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.county}
                      onChange={(e) =>
                        setFormData({ ...formData, county: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
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
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="text-brand-200" size={24} />
                Payment Method
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-brand-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={formData.paymentMethod === "mpesa"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-brand-500"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">M-Pesa</div>
                    <div className="text-sm text-gray-600">
                      Pay securely with M-Pesa mobile money
                    </div>
                  </div>
                </label>
                
                {formData.paymentMethod === "mpesa" && (
                  <div className="ml-7 p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-semibold mb-2">
                      M-Pesa Phone Number <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      value={formData.mpesaPhone}
                      onChange={(e) =>
                        setFormData({ ...formData, mpesaPhone: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                )}

                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-brand-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-brand-500"
                  />
                  <div>
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">
                      Visa, Mastercard accepted
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-brand-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="w-4 h-4 text-brand-500"
                  />
                  <div>
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">
                      Pay when you receive your order
                    </div>
                  </div>
                </label>
              </div>
              
              {location && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                  <div className="flex items-center gap-2 text-green-700">
                    <MapPin size={16} />
                    <span className="font-semibold">Location Captured</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">
                    Your delivery location has been recorded for accurate shipping
                  </p>
                </div>
              )}
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
                      <p className="text-brand-200 font-semibold">
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
                  <span className="text-brand-200">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-brand-500 rounded"
                  />
                  <span className="text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" target="_blank" className="text-brand-500 hover:text-brand-600 font-semibold underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="text-brand-500 hover:text-brand-600 font-semibold underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-brand-600 hover:to-brand-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>
              </div>

              <Link
                href="/cart"
                className="block w-full text-center mt-4 text-brand-500 hover:text-brand-600 transition font-semibold"
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
