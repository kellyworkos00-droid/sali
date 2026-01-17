import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block">
              <Image
                src="/logo.png"
                alt="Sali Products Kenya"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for quality tools, machines, and industrial supplies in Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-200 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-200 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-200 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-brand-300 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-300 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-300 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-300 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=tools" className="hover:text-brand-300 transition">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link href="/products?category=power-tools" className="hover:text-brand-300 transition">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link href="/products?category=machines" className="hover:text-brand-300 transition">
                  Machines
                </Link>
              </li>
              <li>
                <Link href="/products?category=supplies" className="hover:text-brand-300 transition">
                  Industrial Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@saliproducts.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Sali Products Kenya. All rights reserved.</p>
          <Link href="/admin" className="text-gray-700 hover:text-gray-600 text-xs mt-2 inline-block">
            •
          </Link>
        </div>
      </div>
    </footer>
  );
}
