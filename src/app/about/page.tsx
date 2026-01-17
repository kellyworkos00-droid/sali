import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sali Products Kenya",
  description: "Learn about Sali Products Kenya, your trusted supplier of tools, machines, and industrial supplies.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">About Sali Products Kenya</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sali Products Kenya has been serving the Kenyan market for over a decade, providing
            high-quality tools, machines, and industrial supplies to businesses and individuals
            across the country. Our commitment to excellence and customer satisfaction has made
            us a trusted name in the industry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the importance of having reliable equipment and tools for your projects,
            whether you&apos;re a professional contractor, a manufacturing facility, or a DIY enthusiast.
            That&apos;s why we source only the best products from reputable manufacturers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-600 mb-3">10+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-600 mb-3">5000+</h3>
            <p className="text-gray-700">Products Available</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-600 mb-3">1000+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide Kenyan businesses and individuals with access to world-class tools,
            machines, and supplies at competitive prices, backed by exceptional customer service
            and technical support. We aim to be the go-to supplier for all industrial and
            construction needs in Kenya.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Wide selection of genuine, high-quality products</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Competitive pricing and flexible payment options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Fast and reliable delivery across Kenya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Expert technical support and product advice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Warranty and after-sales service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Bulk order discounts for businesses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
