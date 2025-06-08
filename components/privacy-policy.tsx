export default function PrivacyPolicy() {
  return (
    <section className="py-20 px-4 bg-[#12150c]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Privacy Policy</h2>

        <div className="bg-[#1a1d14] p-8 rounded-lg border border-gray-700">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              We respect your privacy and are committed to protecting your personal information. All information
              collected through our order form is used solely for processing and fulfilling your order.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Information We Collect:</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Name and contact information for order processing</li>
              <li>• Delivery address for shipping purposes</li>
              <li>• Payment information (processed securely)</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">How We Use Your Information:</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Processing and fulfilling your orders</li>
              <li>• Communicating about your order status</li>
              <li>• Coordinating delivery with Nova Poshta</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              <strong>We never share your personal information with third parties</strong> except as necessary for order
              fulfillment (delivery service). Your data is stored securely and is never used for marketing purposes
              without your explicit consent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
