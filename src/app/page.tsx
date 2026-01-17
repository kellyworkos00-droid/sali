import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Package, Truck, Shield, Award, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default function Home() {
  const products = getProducts();
  const topSellingProducts = products.filter(p => p.featured).slice(0, 6);
  const topFinds = products.slice(0, 8);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[700px] flex items-center">
        {/* Background Image with Zoom Animation */}
        <div className="absolute inset-0 scale-105 animate-[zoom_20s_ease-in-out_infinite]">
          <Image
            src="/herro.jpeg"
            alt="Sali Products - Tools and Machinery"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-[slide_30s_linear_infinite]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.05) 40px, rgba(255,255,255,.05) 80px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 animate-[fadeIn_1s_ease-in]">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:animate-[bounce3d_1s_ease-in-out_infinite] transform-3d hover-lift-3d">
                <Shield className="text-yellow-400" size={20} />
                <span className="text-sm font-medium">Trusted Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm font-medium">10+ Years</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="text-yellow-400" size={20} />
                <span className="text-sm font-medium">5000+ Products</span>
              </div>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-[slideUp_1s_ease-out]">
              <span className="block mb-2">Quality Tools &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-yellow-300">
                Machines for Every Job
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed animate-[slideUp_1s_ease-out_0.2s_both]">
              Sali Products Kenya is your trusted supplier of <span className="text-yellow-300 font-semibold">premium tools</span>, <span className="text-yellow-300 font-semibold">machines</span>, and <span className="text-yellow-300 font-semibold">industrial supplies</span> across Kenya.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-[slideUp_1s_ease-out_0.4s_both]">
              <Link
                href="/products"
                className="group relative bg-blue-200 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-200 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-200/50 overflow-hidden perspective-container transform-3d hover-lift-3d"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Shop Now</span>
                <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
              <Link
                href="/contact"
                className="group bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-[fadeIn_1s_ease-in_0.6s_both]">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">5000+</div>
                <div className="text-sm md:text-base text-gray-300">Products</div>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">10+</div>
                <div className="text-sm md:text-base text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">1000+</div>
                <div className="text-sm md:text-base text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="blur">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <Wrench className="text-blue-200" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Products</h3>
                <p className="text-gray-700">
                  We source only the best tools and machines from trusted manufacturers worldwide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <Package className="text-blue-200" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Wide Selection</h3>
                <p className="text-gray-700">
                  Browse thousands of products across multiple categories for all your needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <Truck className="text-blue-200" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-700">
                  Quick and reliable delivery service across Kenya to get your orders to you fast.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={200}>
            <div className="flex justify-center gap-8 flex-wrap">
            <Link
              href="/products?category=tools"
              className="group flex flex-col items-center perspective-container"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3 transform-3d hover:animate-[tilt3d_2s_ease-in-out_infinite]">
                <Wrench size={42} className="animate-[float3d_3s_ease-in-out_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-200 transition">Hand Tools</span>
            </Link>
            <Link
              href="/products?category=machines"
              className="group flex flex-col items-center perspective-container"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3 transform-3d hover:animate-[pulse3d_1.5s_ease-in-out_infinite]">
                <Package size={42} className="animate-[rotate3d_4s_linear_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-200 transition">Machines</span>
            </Link>
            <Link
              href="/products?category=supplies"
              className="group flex flex-col items-center perspective-container"
            >
              <div className="w-24 h-24 bg-white border-4 border-blue-200 rounded-2xl flex items-center justify-center text-blue-300 shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:bg-blue-50 mb-3 transform-3d hover:animate-[bounce3d_1s_ease-in-out_infinite]">
                <Truck size={42} className="animate-[pulse3d_2s_ease-in-out_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-200 transition">Supplies</span>
            </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Selling Products</h2>
              <Link href="/products" className="text-blue-200 hover:text-blue-300 font-semibold flex items-center gap-1">
                View All <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
            {topSellingProducts.map((product, index) => (
              <ScrollReveal key={product.id} animation="fade-up" delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Your Top Finds */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your Top Finds</h2>
                <p className="text-gray-600">Handpicked products just for you</p>
              </div>
              <Link href="/products" className="text-blue-200 hover:text-blue-300 font-semibold flex items-center gap-1">
                See More <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {topFinds.map((product, index) => (
              <ScrollReveal key={product.id} animation="scale" delay={index * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
