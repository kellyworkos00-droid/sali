"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail, CreditCard, Shield, CheckCircle } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-12 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-3">Secure Checkout</h1>
            <p className="text-lg text-brand-50">Complete your order in just a few simple steps</p>
            {/* Progress Indicator */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center font-bold">1</div>
                <span className="text-sm font-semibold">Cart</span>
              </div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center font-bold">2</div>
                <span className="text-sm font-semibold">Checkout</span>
              </div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <span className="text-sm font-semibold opacity-70">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-sm text-gray-600">We'll use this to reach you about your order</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                    />
                  </div>
                </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Shipping Address</h2>
                  <p className="text-sm text-gray-600">Where should we deliver your order?</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                    placeholder="123 Main Street, Building Name"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="Nairobi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      County <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.county}
                      onChange={(e) =>
                        setFormData({ ...formData, county: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="Nairobi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-all font-medium"
                      placeholder="00100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg">
                  <CreditCard className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                  <p className="text-sm text-gray-600">Choose your preferred payment option</p>
                </div>
              </div>
              <div className="space-y-4">
                <label className="group relative flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-brand-50 hover:border-brand-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={formData.paymentMethod === "mpesa"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="mt-1 w-5 h-5 text-brand-500 focus:ring-brand-500 focus:ring-2"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">M</div>
                      <div className="font-bold text-lg text-gray-900">M-Pesa</div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Pay securely with M-Pesa mobile money - Most popular in Kenya
                    </div>
                  </div>
                  {formData.paymentMethod === "mpesa" && (
                    <div className="absolute top-5 right-5 w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                  )}
                </label>
                
                {formData.paymentMethod === "mpesa" && (
                  <div className="ml-2 p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                    <label className="block text-sm font-bold mb-3 text-gray-700">
                      M-Pesa Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      value={formData.mpesaPhone}
                      onChange={(e) =>
                        setFormData({ ...formData, mpesaPhone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all font-medium"
                    />
                    <p className="text-xs text-gray-600 mt-2 flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-600 mt-0.5" />
                      You'll receive an M-Pesa prompt on this number to complete payment
                    </p>
                  </div>
                )}

                <label className="group relative flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-brand-50 hover:border-brand-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="mt-1 w-5 h-5 text-brand-500 focus:ring-brand-500 focus:ring-2"
                  />
                  <div>
                    <div className="font-bold text-lg text-gray-900 mb-1">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">
                      Visa, Mastercard, and other major cards accepted
                    </div>
                  </div>
                  {formData.paymentMethod === "card" && (
                    <div className="absolute top-5 right-5 w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                  )}
                </label>
                
                <label className="group relative flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-brand-50 hover:border-brand-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                    className="mt-1 w-5 h-5 text-brand-500 focus:ring-brand-500 focus:ring-2"
                  />
                  <div>
                    <div className="font-bold text-lg text-gray-900 mb-1">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">
                      Pay with cash when your order is delivered to your doorstep
                    </div>
                  </div>
                  {formData.paymentMethod === "cod" && (
                    <div className="absolute top-5 right-5 w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                  )}
                </label>
              </div>
              
              {location && (
                <div className="mt-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-green-700 font-bold">
                        <CheckCircle size={16} />
                        <span>Location Captured</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        Your delivery location has been recorded for accurate shipping
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-black mb-6 text-gray-900 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-brand-500 to-brand-600 rounded-full"></div>
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto custom-scrollbar pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                    <div className="relative w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">Quantity: <span className="font-bold text-brand-600">{item.quantity}</span></p>
                      <p className="text-brand-600 font-black text-base">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-4 border-t-2 border-gray-100 pt-6 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Delivery Fee</span>
                  <span className="font-bold">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-black border-t-2 border-gray-200 pt-4">
                  <span className="text-gray-900">Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-brand-500 rounded border-gray-300 focus:ring-brand-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" target="_blank" className="text-brand-600 hover:text-brand-700 font-bold underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="text-brand-600 hover:text-brand-700 font-bold underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:from-brand-600 hover:to-brand-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing Order...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Place Order - {formatPrice(total)}
                  </>
                )}
              </button>

              {/* Back to Cart Link */}
              <Link
                href="/cart"
                className="block w-full text-center mt-4 text-brand-600 hover:text-brand-700 transition font-bold text-sm py-3"
              >
                ← Back to Cart
              </Link>
              
              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <Shield className="text-green-500" size={20} />
                  <span className="text-xs font-medium">Secure SSL Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}
