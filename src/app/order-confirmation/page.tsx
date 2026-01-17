import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-600" size={80} />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your order. We&apos;ve received your order and will process it shortly.
        </p>

        <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-3 text-green-800">What&apos;s Next?</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>You&apos;ll receive an order confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>We&apos;ll notify you when your order ships</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Track your order status in your account</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="bg-white border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Contact our customer service team for any questions about your order
          </p>
          <Link
            href="/contact"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
