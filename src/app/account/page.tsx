"use client";

import { useState } from "react";
import { User, Package, MapPin, Settings, LogOut, Edit2 } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data - in a real app, this would come from authentication
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+254 700 000 000",
    address: "123 Industrial Area, Nairobi",
  };

  // Mock orders data
  const orders = [
    {
      id: "ORD-001",
      date: "2026-01-15",
      status: "Delivered",
      total: 15500,
      items: 3,
    },
    {
      id: "ORD-002",
      date: "2026-01-10",
      status: "In Transit",
      total: 12000,
      items: 2,
    },
    {
      id: "ORD-003",
      date: "2025-12-28",
      status: "Delivered",
      total: 8500,
      items: 1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "profile"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              <User size={20} />
              <span className="font-semibold">Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "orders"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              <Package size={20} />
              <span className="font-semibold">Orders</span>
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "addresses"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              <MapPin size={20} />
              <span className="font-semibold">Addresses</span>
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "settings"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              <Settings size={20} />
              <span className="font-semibold">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition">
              <LogOut size={20} />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Profile Information</h2>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Edit2 size={18} />
                  Edit
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      First Name
                    </label>
                    <p className="text-lg">{user.firstName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Last Name
                    </label>
                    <p className="text-lg">{user.lastName}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-lg">{user.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <p className="text-lg">{user.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Address
                  </label>
                  <p className="text-lg">{user.address}</p>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{order.id}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(order.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        {order.items} {order.items === 1 ? "item" : "items"}
                      </span>
                      <span className="font-bold text-lg text-red-600">
                        KES {order.total.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                        View Details
                      </button>
                      <button className="flex-1 border-2 border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition font-semibold">
                        Track Order
                      </button>
                    </div>
                  </div>
                ))}

                {orders.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="mx-auto text-gray-400 mb-4" size={64} />
                    <h3 className="text-xl font-bold mb-2">No Orders Yet</h3>
                    <p className="text-gray-600 mb-6">
                      Start shopping to see your orders here
                    </p>
                    <Link
                      href="/products"
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-block"
                    >
                      Browse Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                  Add New Address
                </button>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-red-600 rounded-lg p-4 bg-red-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Default
                      </span>
                      <h3 className="font-bold text-lg mt-2">Home</h3>
                    </div>
                    <button className="text-red-600 hover:text-red-700">
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">{user.address}</p>
                  <p className="text-gray-700">Nairobi, Kenya</p>
                  <p className="text-gray-700 mt-2">{user.phone}</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">Office</h3>
                    <button className="text-red-600 hover:text-red-700">
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">456 Business Park, Westlands</p>
                  <p className="text-gray-700">Nairobi, Kenya</p>
                  <p className="text-gray-700 mt-2">{user.phone}</p>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

              <div className="space-y-6">
                <div className="border-b pb-6">
                  <h3 className="font-bold text-lg mb-3">Change Password</h3>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                    Update Password
                  </button>
                </div>

                <div className="border-b pb-6">
                  <h3 className="font-bold text-lg mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-red-600"
                      />
                      <span>Order updates and tracking</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-red-600"
                      />
                      <span>New products and promotions</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-red-600" />
                      <span>Weekly newsletter</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-600">Danger Zone</h3>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition font-semibold">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
