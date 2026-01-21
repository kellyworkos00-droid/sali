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
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 scale-110">
          <Image
            src="/herro.jpeg"
            alt="Sali Products - Tools and Machinery"
            fill
            className="object-cover animate-[slowZoom_30s_ease-in-out_infinite]"
            priority
          />
        </div>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-blue-900/85 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Animated Mesh Pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0 animate-[slide_40s_linear_infinite]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px), repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 100px)'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-[float_6s_ease-in-out_infinite] opacity-40"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-[float_8s_ease-in-out_infinite] opacity-30"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-[float_7s_ease-in-out_infinite] opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Trust Badges - Enhanced */}
            <div className="flex flex-wrap gap-3 mb-8 animate-[fadeInDown_0.8s_ease-out]">
              <div className="group flex items-center gap-2 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300">
                <Shield className="text-yellow-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm md:text-base font-semibold">ISO Certified</span>
              </div>
              <div className="group flex items-center gap-2 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300">
                <Award className="text-yellow-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm md:text-base font-semibold">10+ Years</span>
              </div>
              <div className="group flex items-center gap-2 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300">
                <Star className="text-yellow-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm md:text-base font-semibold">5000+ Products</span>
              </div>
            </div>

            {/* Main Heading - Dramatically Enhanced */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-6 animate-[slideUp_0.8s_ease-out]">
              <span className="block mb-3 drop-shadow-2xl">Premium Tools &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 drop-shadow-lg animate-[shimmer_3s_ease-in-out_infinite]">
                Machines for Pros
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed mb-8 max-w-3xl animate-[slideUp_0.8s_ease-out_0.2s_both] drop-shadow-md">
              Kenya&apos;s leading supplier of <span className="text-yellow-300 font-bold">industrial-grade tools</span>, <span className="text-yellow-300 font-bold">heavy machinery</span>, and <span className="text-yellow-300 font-bold">professional equipment</span>. Trusted by contractors, businesses, and DIY enthusiasts nationwide.
            </p>
            
            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-[slideUp_0.8s_ease-out_0.4s_both]">
              <Link
                href="/products"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10">Explore Products</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              <Link
                href="/contact"
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 shadow-xl hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10">Get Quote</span>
              </Link>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/20 animate-[fadeIn_1s_ease-in_0.6s_both]">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">5000+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold">Products Available</div>
              </div>
              <div className="text-center border-l border-r border-white/30 group cursor-pointer">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold">Years in Business</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="blur">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Why Choose Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-md text-center border-t-4 border-brand-500 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3">
                  <Wrench className="text-brand-500" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Quality Products</h3>
                <p className="text-gray-600 text-sm">
                  We source only the best tools and machines from trusted manufacturers worldwide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-md text-center border-t-4 border-brand-500 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3">
                  <Package className="text-brand-500" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Wide Selection</h3>
                <p className="text-gray-600 text-sm">
                  Browse thousands of products across multiple categories for all your needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-md text-center border-t-4 border-brand-500 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3">
                  <Truck className="text-brand-500" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
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
              <div className="w-24 h-24 bg-gradient-to-br from-brand-200 to-brand-300 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3 transform-3d hover:animate-[tilt3d_2s_ease-in-out_infinite]">
                <Wrench size={42} className="animate-[float3d_3s_ease-in-out_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-200 transition">Hand Tools</span>
            </Link>
            <Link
              href="/products?category=machines"
              className="group flex flex-col items-center perspective-container"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-brand-200 to-brand-300 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3 transform-3d hover:animate-[pulse3d_1.5s_ease-in-out_infinite]">
                <Package size={42} className="animate-[rotate3d_4s_linear_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-200 transition">Machines</span>
            </Link>
            <Link
              href="/products?category=supplies"
              className="group flex flex-col items-center perspective-container"
            >
              <div className="w-24 h-24 bg-white border-4 border-brand-200 rounded-2xl flex items-center justify-center text-brand-300 shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:bg-blue-50 mb-3 transform-3d hover:animate-[bounce3d_1s_ease-in-out_infinite]">
                <Truck size={42} className="animate-[pulse3d_2s_ease-in-out_infinite]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-200 transition">Supplies</span>
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
              <Link href="/products" className="text-brand-200 hover:text-brand-300 font-semibold flex items-center gap-1">
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
              <Link href="/products" className="text-brand-200 hover:text-brand-300 font-semibold flex items-center gap-1">
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
