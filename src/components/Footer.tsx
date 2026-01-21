import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Spinning Saw Blades */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <Image
          src="/saw blade.png"
          alt=""
          width={200}
          height={200}
          className="animate-[spinSlow_15s_linear_infinite]"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none">
        <Image
          src="/saw blade.png"
          alt=""
          width={180}
          height={180}
          className="animate-[spinSlow_12s_linear_infinite_reverse]"
        />
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block">
              <Image
                src="/logo.png"
                alt="Sali Products Kenya"
                width={140}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm mb-4">
              Quality tools and machinery for Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-blue-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blue-400" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-blue-400" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-blue-400" />
                <span>info@saliproducts.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Sali Products Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
