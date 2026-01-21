"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Building2, CheckCircle, Headphones } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We&apos;ll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "general" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.1) 40px, rgba(255,255,255,.1) 80px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6 animate-[fadeInDown_0.8s_ease-out]">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <MessageCircle size={36} className="text-cyan-300" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-[slideUp_0.8s_ease-out]">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Have questions about our products or services? Our expert team is here to help you find the perfect solution for your needs.
          </p>
          
          {/* Quick Contact Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 animate-[fadeIn_1s_ease-in_0.4s_both]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-300 mb-2">&lt;24h</div>
              <div className="text-sm text-blue-200">Response Time</div>
            </div>
            <div className="text-center border-l border-r border-white/20">
              <div className="text-3xl md:text-4xl font-black text-cyan-300 mb-2">100%</div>
              <div className="text-sm text-blue-200">Support Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-300 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Send us a Message
              </h2>
              <p className="text-gray-600 text-lg">Fill out the form below and we&apos;ll respond as soon as possible</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">Inquiry Type *</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: "general" })}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      formData.inquiryType === "general"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    General
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: "sales" })}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      formData.inquiryType === "sales"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Sales
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: "support" })}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      formData.inquiryType === "support"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Support
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">Your Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium resize-none"
                  placeholder="Tell us more about your inquiry... Include details about products you're interested in or any specific requirements."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-5 rounded-2xl font-black text-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="group-hover:translate-x-1 transition-transform" size={22} />
                    Send Message
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                We typically respond within 24 hours during business days
              </p>
            </form>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              <a href="tel:+254700000000" className="text-2xl md:text-3xl font-black text-blue-600 hover:text-blue-700 transition block">
                +254 700 000 000
              </a>
              <p className="text-sm text-gray-600 mt-3">Available for urgent inquiries and bulk orders</p>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl shadow-xl p-8 border-2 border-cyan-200 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">24/7 support</p>
                </div>
              </div>
              <a href="mailto:info@saliproducts.co.ke" className="text-xl md:text-2xl font-black text-cyan-600 hover:text-cyan-700 transition block break-all">
                info@saliproducts.co.ke
              </a>
              <p className="text-sm text-gray-600 mt-3">We respond within 24 hours</p>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 border-2 border-green-200 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">Main Office</p>
                </div>
              </div>
              <p className="text-xl font-black text-gray-800 mb-2">Nairobi, Kenya</p>
              <p className="text-sm text-gray-600">Open Monday to Saturday</p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-bold">Monday - Friday</span>
                  <span className="text-blue-600 font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-bold">Saturday</span>
                  <span className="text-blue-600 font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Sunday</span>
                  <span className="text-red-500 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl shadow-xl p-8 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Headphones className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-black text-gray-900">24/7 Customer Support</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our dedicated support team is always ready to assist you with product information, technical questions, and order tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
