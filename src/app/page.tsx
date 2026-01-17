import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Package, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <Image
          src="/herro.jpeg"
          alt="Sali Products - Tools and Machinery"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Quality Tools & Machines for Every Job
            </h1>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
              Sali Products Kenya is your trusted supplier of premium tools, machines, and industrial supplies across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-xl"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-600">
              <div className="flex justify-center mb-4">
                <Wrench className="text-red-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Products</h3>
              <p className="text-gray-700">
                We source only the best tools and machines from trusted manufacturers worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-600">
              <div className="flex justify-center mb-4">
                <Package className="text-red-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Wide Selection</h3>
              <p className="text-gray-700">
                Browse thousands of products across multiple categories for all your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-600">
              <div className="flex justify-center mb-4">
                <Truck className="text-red-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-700">
                Quick and reliable delivery service across Kenya to get your orders to you fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/products?category=tools"
              className="group relative h-64 bg-gradient-to-br from-red-500 to-red-700 rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <Wrench size={64} className="mb-4" />
                <h3 className="text-2xl font-bold">Hand Tools</h3>
              </div>
            </Link>
            <Link
              href="/products?category=machines"
              className="group relative h-64 bg-gradient-to-br from-red-600 to-red-800 rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <Package size={64} className="mb-4" />
                <h3 className="text-2xl font-bold">Machines</h3>
              </div>
            </Link>
            <Link
              href="/products?category=supplies"
              className="group relative h-64 bg-white border-4 border-red-600 rounded-lg overflow-hidden hover:shadow-xl transition hover:bg-red-50"
            >
              <div className="relative h-full flex flex-col items-center justify-center text-red-700">
                <Truck size={64} className="mb-4" />
                <h3 className="text-2xl font-bold">Supplies</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
