"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={48} className="text-yellow-300" />
            <h1 className="text-6xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Have questions about our products or services? Get in touch with us and
            we&apos;ll be happy to help you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
                placeholder="+254 700 000 000"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Subject *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-200 to-blue-200 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-200 hover:to-blue-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-200 p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">Give us a call</p>
              </div>
            </div>
            <a href="tel:+254700000000" className="text-2xl font-bold text-blue-200 hover:text-blue-200 transition">
              +254 700 000 000
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-200 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">Send us an email</p>
              </div>
            </div>
            <a href="mailto:info@saliproducts.co.ke" className="text-2xl font-bold text-blue-200 hover:text-blue-200 transition break-all">
              info@saliproducts.co.ke
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 p-3 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Visit our office</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-700">Nairobi, Kenya</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-200" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="flex justify-between">
                <span className="font-semibold">Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Sunday:</span>
                <span className="text-blue-200">Closed</span>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
