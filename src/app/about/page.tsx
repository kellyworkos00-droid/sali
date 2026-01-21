"use client";

import { Award, Target, Users, Zap, Shield, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Spinning Saw Blade */}
      <div className="absolute top-40 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Image
          src="/saw blade.png"
          alt=""
          width={250}
          height={250}
          className="animate-[spinSlow_20s_linear_infinite]"
        />
      </div>
      <div className="absolute bottom-40 left-10 opacity-5 pointer-events-none hidden lg:block">
        <Image
          src="/saw blade.png"
          alt=""
          width={220}
          height={220}
          className="animate-[spinSlow_18s_linear_infinite_reverse]"
        />
      </div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-200 to-brand-200 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-[fadeIn_1s_ease-in]">About Sali Products Kenya</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto animate-[fadeIn_1s_ease-in_0.2s_both]">
            Your trusted partner in quality tools and machinery for over a decade
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <ScrollReveal animation="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-brand-200">
              <div className="flex items-center gap-3 mb-6">
              <Award className="text-brand-200" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Sali Products Kenya has been serving the Kenyan market for over a decade, providing
              high-quality tools, machines, and industrial supplies to businesses and individuals
              across the country. Our commitment to excellence and customer satisfaction has made
              us a trusted name in the industry.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We understand the importance of having reliable equipment and tools for your projects,
              whether you&apos;re a professional contractor, a manufacturing facility, or a DIY enthusiast.
              That&apos;s why we source only the best products from reputable manufacturers worldwide.
            </p>
          </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-red-200 perspective-container transform-3d hover-lift-3d hover:animate-[float3d_3s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-5xl font-bold text-brand-200">10+</h3>
                <TrendingUp className="text-brand-200" size={40} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Years of Experience</p>
            </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-brand-200 perspective-container transform-3d hover-tilt-3d hover:animate-[pulse3d_2s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-5xl font-bold text-brand-200">5000+</h3>
                <Zap className="text-brand-200" size={40} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Products Available</p>
            </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-200 perspective-container transform-3d hover-lift-3d hover:animate-[bounce3d_2.5s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-5xl font-bold text-green-600">1000+</h3>
                <Users className="text-green-600" size={40} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Happy Customers</p>
            </div>
            </ScrollReveal>
          </div>

          {/* Mission Section */}
          <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-brand-200 to-brand-200 rounded-2xl shadow-xl p-10 mb-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Target size={32} />
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-red-50 leading-relaxed text-lg">
              To provide Kenyan businesses and individuals with access to world-class tools,
              machines, and supplies at competitive prices, backed by exceptional customer service
              and technical support. We aim to be the go-to supplier for all industrial and
              construction needs in Kenya.
            </p>
          </div>
          </ScrollReveal>

          {/* Why Choose Us Section */}
          <ScrollReveal animation="fade-left">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-red-600" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50 transition-colors">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Genuine Products</h3>
                  <p className="text-gray-600">Wide selection of genuine, high-quality products from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Zap className="text-brand-200" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600">Competitive prices with fast delivery throughout Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Expert Support</h3>
                  <p className="text-gray-600">Knowledgeable staff ready to help with expert advice and support</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-yellow-50 transition-colors">
                <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                  <Award className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Warranty Service</h3>
                  <p className="text-gray-600">Comprehensive warranty and after-sales service for peace of mind</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
