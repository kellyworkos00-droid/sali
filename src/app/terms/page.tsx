import { Metadata } from "next";
import { FileText, Shield, Package, CreditCard, Truck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - Sali Products Kenya",
  description: "Terms and conditions for shopping at Sali Products Kenya",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <FileText size={48} className="text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
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
              Welcome to Sali Products Kenya. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our website, you agree to be bound by these terms. Please read them carefully.
            </p>
          </section>

          {/* General Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <FileText className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. General Terms</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>1.1</strong> By placing an order through our website, you warrant that you are legally capable 
                of entering into binding contracts and are at least 18 years old.
              </p>
              <p>
                <strong>1.2</strong> We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p>
                <strong>1.3</strong> All information provided by you must be accurate, current, and complete.
              </p>
            </div>
          </section>

          {/* Products & Pricing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Package className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Products & Pricing</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>2.1</strong> All prices are in Kenyan Shillings (KES) and include applicable taxes unless 
                otherwise stated.
              </p>
              <p>
                <strong>2.2</strong> We reserve the right to change prices at any time without prior notice.
              </p>
              <p>
                <strong>2.3</strong> Product images are for illustration purposes. Actual products may vary slightly.
              </p>
              <p>
                <strong>2.4</strong> We make every effort to display colors and specifications accurately but cannot 
                guarantee that your device displays them correctly.
              </p>
              <p>
                <strong>2.5</strong> All products are subject to availability. We reserve the right to limit quantities 
                or discontinue products.
              </p>
            </div>
          </section>

          {/* Orders & Payment */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <CreditCard className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Orders & Payment</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>3.1</strong> All orders are subject to acceptance and availability.
              </p>
              <p>
                <strong>3.2</strong> We reserve the right to refuse or cancel any order for any reason.
              </p>
              <p>
                <strong>3.3</strong> Payment methods accepted: M-Pesa, Credit/Debit Cards, and Cash on Delivery.
              </p>
              <p>
                <strong>3.4</strong> For M-Pesa payments, you will receive a prompt on your phone to complete payment.
              </p>
              <p>
                <strong>3.5</strong> For Cash on Delivery, payment must be made in full upon receipt of goods.
              </p>
              <p>
                <strong>3.6</strong> A valid order confirmation will be sent to your email once payment is confirmed.
              </p>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Truck className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Shipping & Delivery</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>4.1</strong> We currently ship within Kenya only.
              </p>
              <p>
                <strong>4.2</strong> Shipping costs are calculated at checkout and vary by location.
              </p>
              <p>
                <strong>4.3</strong> Delivery times are estimates and not guaranteed. We are not liable for delays 
                caused by circumstances beyond our control.
              </p>
              <p>
                <strong>4.4</strong> You must provide accurate delivery information. We are not responsible for 
                failed deliveries due to incorrect addresses.
              </p>
              <p>
                <strong>4.5</strong> Risk of loss and title for products pass to you upon delivery.
              </p>
            </div>
          </section>

          {/* Returns & Refunds */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Shield className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Returns & Refunds</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>5.1</strong> Defective products may be returned within 7 days of delivery.
              </p>
              <p>
                <strong>5.2</strong> Products must be in original condition with all packaging and accessories.
              </p>
              <p>
                <strong>5.3</strong> Contact us immediately upon receiving damaged or incorrect products.
              </p>
              <p>
                <strong>5.4</strong> Refunds will be processed within 14 business days after approval.
              </p>
              <p>
                <strong>5.5</strong> Shipping costs are non-refundable unless the return is due to our error.
              </p>
            </div>
          </section>

          {/* Warranty */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Shield className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Warranty</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>6.1</strong> Products are covered by manufacturer warranties where applicable.
              </p>
              <p>
                <strong>6.2</strong> Warranty claims must be directed to the manufacturer.
              </p>
              <p>
                <strong>6.3</strong> We provide assistance in warranty claims but are not liable for manufacturer 
                warranty fulfillment.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <AlertCircle className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">7. Limitation of Liability</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>7.1</strong> We are not liable for any indirect, incidental, or consequential damages.
              </p>
              <p>
                <strong>7.2</strong> Our total liability shall not exceed the amount paid for the product(s) in question.
              </p>
              <p>
                <strong>7.3</strong> We are not responsible for delays or failures due to circumstances beyond our control.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <Shield className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">8. Privacy & Data Protection</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>8.1</strong> We collect and process personal data in accordance with Kenyan data protection laws.
              </p>
              <p>
                <strong>8.2</strong> Your information is used only for order processing and service delivery.
              </p>
              <p>
                <strong>8.3</strong> We do not sell or share your personal information with third parties except as 
                necessary to fulfill orders.
              </p>
              <p>
                <strong>8.4</strong> Location data collected during checkout is used solely for delivery purposes.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <FileText className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">9. Intellectual Property</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>9.1</strong> All content on this website is the property of Sali Products Kenya.
              </p>
              <p>
                <strong>9.2</strong> You may not reproduce, distribute, or use any content without written permission.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <FileText className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">10. Governing Law</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>10.1</strong> These terms are governed by the laws of the Republic of Kenya.
              </p>
              <p>
                <strong>10.2</strong> Any disputes shall be resolved in the courts of Kenya.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <AlertCircle className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">11. Changes to Terms</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed ml-12">
              <p>
                <strong>11.1</strong> We reserve the right to modify these terms at any time.
              </p>
              <p>
                <strong>11.2</strong> Changes are effective immediately upon posting to the website.
              </p>
              <p>
                <strong>11.3</strong> Continued use of the website after changes constitutes acceptance of new terms.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-brand-50 rounded-xl p-6 border-l-4 border-brand-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> info@saliproducts.co.ke</p>
              <p><strong>Phone:</strong> +254 700 000 000</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
