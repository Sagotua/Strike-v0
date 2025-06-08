import { Truck, Shield } from "lucide-react"

export default function DeliveryGuarantee() {
  return (
    <section className="py-20 px-4 bg-[#1a1d14]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Delivery & Guarantee</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <Truck className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">Fast Delivery</h3>
            <div className="text-gray-300 space-y-2">
              <p>
                <strong>Nova Poshta delivery</strong>
              </p>
              <p>1–2 days across Ukraine</p>
              <p>Cash on delivery or card payment</p>
              <p>Free shipping on orders over 10,000 UAH</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">Quality Guarantee</h3>
            <div className="text-gray-300 space-y-2">
              <p>
                <strong>DSTU Certified</strong>
              </p>
              <p>Official ballistic certificate included</p>
              <p>Free replacement for manufacturing defects</p>
              <p>30-day quality guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
