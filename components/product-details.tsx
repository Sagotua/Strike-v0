import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "Withstands 3 B-32 hits (SVD)",
  "Weight: 2.8 kg",
  "Size: 250×300×25 mm",
  "3D ergonomic shape",
  "Material: Silicon carbide + UHMWPE",
  "Certificate included",
]

export default function ProductDetails() {
  return (
    <section className="py-20 px-4 bg-[#1a1d14]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">About Product</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Ceramic Armor Plate Details"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
