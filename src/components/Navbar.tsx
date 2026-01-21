"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Search, User, Heart, Home as HomeIcon, Package, Info, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { items } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearch(false);
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Top Header with Logo */}
      <header className="md:hidden fixed top-2 left-2 right-2 z-50 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Sali Products Kenya"
              width={140}
              height={70}
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-lg transition-all ${
                showSearch
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 active:bg-gray-100"
              }`}
            >
              <Search size={20} />
            </button>
            
            <Link 
              href="/account" 
              className="p-2 rounded-lg text-gray-700 active:bg-gray-100 transition-all"
            >
              <User size={20} />
            </Link>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="px-4 pb-3 pt-2 border-t border-gray-100 animate-[slideUp_0.3s_ease-out]">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
                autoFocus
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg font-bold active:scale-95 transition-all shadow-lg"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3" 
          : "bg-white/90 backdrop-blur-md shadow-lg py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Sali Products Kenya"
                width={180}
                height={90}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-12 w-auto" : "h-14 w-auto"
                } group-hover:scale-105`}
                priority
              />
            </Link>

            {/* Center Navigation */}
            <div className="flex items-center gap-2">
              <Link 
                href="/" 
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                  isActive("/")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                  isActive("/products") || pathname?.startsWith("/products/")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                  isActive("/about")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                  isActive("/contact")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2.5 rounded-xl transition-all ${
                  showSearch
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Search size={20} />
              </button>
              
              <Link 
                href="/wishlist" 
                className={`relative p-2.5 rounded-xl transition-all ${
                  isActive("/wishlist")
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg ring-2 ring-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              
              <Link 
                href="/account" 
                className={`p-2.5 rounded-xl transition-all ${
                  isActive("/account")
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <User size={20} />
              </Link>
              
              <Link 
                href="/cart" 
                className={`relative p-2.5 rounded-xl transition-all ${
                  isActive("/cart") || isActive("/checkout")
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg ring-2 ring-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mt-4 animate-[slideUp_0.3s_ease-out]">
              <form onSubmit={handleSearch} className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for tools, machines, supplies..."
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium shadow-lg"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation - Floating Bottom Bar */}
      <nav className="md:hidden fixed bottom-2 left-2 right-2 z-50 bg-white/98 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          <Link 
            href="/" 
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
              isActive("/")
                ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-gray-600 active:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <HomeIcon size={20} className={isActive("/") ? "mb-1" : "mb-0.5"} />
            <span className="text-xs font-bold">Home</span>
          </Link>
          
          <Link 
            href="/products" 
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
              isActive("/products") || pathname?.startsWith("/products/")
                ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-gray-600 active:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Package size={20} className={isActive("/products") ? "mb-1" : "mb-0.5"} />
            <span className="text-xs font-bold">Products</span>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
              isMenuOpen
                ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
                : "text-gray-600 active:bg-gray-100"
            }`}
          >
            {isMenuOpen ? <X size={20} className="mb-1" /> : <Menu size={20} className="mb-0.5" />}
            <span className="text-xs font-bold">Menu</span>
          </button>
          
          <Link 
            href="/wishlist" 
            className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
              isActive("/wishlist")
                ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg"
                : "text-gray-600 active:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Heart size={20} className={isActive("/wishlist") ? "mb-1" : "mb-0.5"} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-2 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold shadow-md ring-2 ring-white">
                {wishlistCount}
              </span>
            )}
            <span className="text-xs font-bold">Wishlist</span>
          </Link>
          
          <Link 
            href="/cart" 
            className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
              isActive("/cart") || isActive("/checkout")
                ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-gray-600 active:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart size={20} className={isActive("/cart") ? "mb-1" : "mb-0.5"} />
            {cartItemsCount > 0 && (
              <span className="absolute top-1 right-2 bg-blue-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold shadow-md ring-2 ring-white">
                {cartItemsCount}
              </span>
            )}
            <span className="text-xs font-bold">Cart</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute bottom-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 animate-[slideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Section */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
                />
              </div>
            </form>

            {/* Menu Links */}
            <div className="space-y-2">
              <Link
                href="/about"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  isActive("/about")
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={20} />
                About Us
              </Link>
              
              <Link
                href="/contact"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  isActive("/contact")
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} />
                Contact Us
              </Link>
              
              <Link
                href="/account"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  isActive("/account")
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                My Account
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for desktop */}
      <div className="hidden md:block h-20"></div>
      
      {/* Spacer for mobile - top header + bottom nav */}
      <div className="md:hidden h-20"></div>
      <div className="md:hidden h-24"></div>
    </>
  );
}
