"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Package, Truck, Mail, Phone, Clock, ShoppingBag, Home, ArrowRight } from "lucide-react";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ORD-" + Math.random().toString(36).substring(7).toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.1) 40px, rgba(255,255,255,.1) 80px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6 animate-[scaleIn_0.6s_ease-out]">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="text-green-500" size={56} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 animate-[slideUp_0.8s_ease-out]">Order Confirmed!</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Order Number Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="text-white" size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Order Number</p>
                <p className="text-3xl font-black text-blue-600">{orderId}</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 font-semibold mb-1">Order Date</p>
              <p className="text-lg font-bold text-gray-900">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What's Next Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">What&apos;s Next?</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email Confirmation</p>
                  <p className="text-sm text-gray-600">You&apos;ll receive an order confirmation email with all the details shortly</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Package className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Order Processing</p>
                  <p className="text-sm text-gray-600">We&apos;ll prepare your order and notify you once it&apos;s ready</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Truck className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Shipment Updates</p>
                  <p className="text-sm text-gray-600">Track your order status and get delivery updates via email and SMS</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Estimated Delivery */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Estimated Delivery</h3>
              </div>
              <p className="text-4xl font-black text-purple-600 mb-2">3-5 Days</p>
              <p className="text-gray-600">Standard shipping to your location</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-900">Need Help?</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Contact our customer service team for any questions about your order
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Support
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Continue Shopping</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <ShoppingBag size={24} />
              Browse Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-3 bg-white border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Home size={24} />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-black text-gray-900 mb-3">Thank You for Choosing Sali Products!</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            We appreciate your business and look forward to serving you again. Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
