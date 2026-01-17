import { Metadata } from "next";
import { Shield, Eye, Lock, Database, UserCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Sali Products Kenya",
  description: "Privacy policy and data protection information for Sali Products Kenya",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={48} className="text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-brand-100 text-lg">
            Last Updated: January 17, 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              At Sali Products Kenya, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data in compliance with 
              Kenyan data protection laws.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Database className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>1.1 Personal Information:</strong> When you place an order, we collect:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Delivery address</li>
                <li>Payment information</li>
              </ul>
              <p className="mt-3">
                <strong>1.2 Location Data:</strong> With your permission, we collect GPS coordinates during 
                checkout to ensure accurate delivery.
              </p>
              <p>
                <strong>1.3 Browsing Data:</strong> We automatically collect technical information including 
                IP address, browser type, and pages visited.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Eye className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>2.1</strong> To process and fulfill your orders
              </p>
              <p>
                <strong>2.2</strong> To communicate order status and updates
              </p>
              <p>
                <strong>2.3</strong> To arrange delivery and calculate shipping routes
              </p>
              <p>
                <strong>2.4</strong> To process payments securely
              </p>
              <p>
                <strong>2.5</strong> To provide customer support
              </p>
              <p>
                <strong>2.6</strong> To improve our website and services
              </p>
              <p>
                <strong>2.7</strong> To send marketing communications (with your consent)
              </p>
            </div>
          </section>

          {/* Location Data */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <MapPin className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Location Data Usage</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>3.1</strong> Location data is collected only with your explicit permission during checkout.
              </p>
              <p>
                <strong>3.2</strong> We use location data to:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Calculate accurate delivery routes</li>
                <li>Estimate delivery times</li>
                <li>Optimize logistics operations</li>
                <li>Verify delivery addresses</li>
              </ul>
              <p className="mt-3">
                <strong>3.3</strong> Location data is shared only with our delivery partners for fulfillment purposes.
              </p>
              <p>
                <strong>3.4</strong> You can decline location permission; delivery will proceed using your provided address.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <UserCheck className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing & Disclosure</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>4.1</strong> We share your information only with:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Delivery partners (for order fulfillment)</li>
                <li>Payment processors (for transaction processing)</li>
                <li>Bylon admin system (for order management)</li>
              </ul>
              <p className="mt-3">
                <strong>4.2</strong> We do not sell, rent, or trade your personal information to third parties.
              </p>
              <p>
                <strong>4.3</strong> We may disclose information if required by law or to protect our rights.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Lock className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>5.1</strong> We implement industry-standard security measures to protect your data.
              </p>
              <p>
                <strong>5.2</strong> Payment information is encrypted and processed through secure payment gateways.
              </p>
              <p>
                <strong>5.3</strong> We regularly review and update our security practices.
              </p>
              <p>
                <strong>5.4</strong> However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Shield className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>You have the right to:</p>
              <p>
                <strong>6.1</strong> Access your personal data we hold
              </p>
              <p>
                <strong>6.2</strong> Request correction of inaccurate data
              </p>
              <p>
                <strong>6.3</strong> Request deletion of your data
              </p>
              <p>
                <strong>6.4</strong> Opt-out of marketing communications
              </p>
              <p>
                <strong>6.5</strong> Withdraw consent for location data collection
              </p>
              <p>
                <strong>6.6</strong> Request data portability
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Database className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">7. Cookies & Tracking</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>7.1</strong> We use cookies to improve your browsing experience and remember your preferences.
              </p>
              <p>
                <strong>7.2</strong> Essential cookies are necessary for the website to function properly.
              </p>
              <p>
                <strong>7.3</strong> You can disable cookies through your browser settings, but this may affect functionality.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Database className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">8. Data Retention</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>8.1</strong> We retain your personal data for as long as necessary to fulfill orders and 
                comply with legal obligations.
              </p>
              <p>
                <strong>8.2</strong> Order information is retained for 7 years for tax and legal purposes.
              </p>
              <p>
                <strong>8.3</strong> Marketing data is retained until you unsubscribe or request deletion.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Shield className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">9. Children's Privacy</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>9.1</strong> Our services are not directed to children under 18.
              </p>
              <p>
                <strong>9.2</strong> We do not knowingly collect information from children.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Eye className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">10. Changes to This Policy</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>10.1</strong> We may update this policy from time to time.
              </p>
              <p>
                <strong>10.2</strong> Changes will be posted on this page with an updated date.
              </p>
              <p>
                <strong>10.3</strong> Continued use after changes indicates acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-brand-50 rounded-xl p-6 border-l-4 border-brand-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
            <p className="text-gray-700 mb-4">
              For privacy-related questions or to exercise your rights:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@saliproducts.co.ke</p>
              <p><strong>Phone:</strong> +254 700 000 000</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
