"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#12150c] via-[#1a1d14] to-[#12150c]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ceramic Armor Plates
                <span className="block text-yellow-400">— Class 6</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Certified in Ukraine. Comes with a ballistic certificate.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Order Now
            </Button>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Strike Face Ceramic Armor Plate"
                width={400}
                height={500}
                className="mx-auto rounded-lg shadow-2xl"
              />
              <Badge className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-bold">
                2 plates — 11,500 UAH
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Order Armor Plates</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name + Surname"
                className="w-full p-3 border rounded-lg text-black"
                required
              />
              <input
                type="tel"
                placeholder="Phone (+38...)"
                pattern="\+38[0-9]{10}"
                className="w-full p-3 border rounded-lg text-black"
                required
              />
              <input type="text" placeholder="City" className="w-full p-3 border rounded-lg text-black" required />
              <select className="w-full p-3 border rounded-lg text-black" required>
                <option value="">Select Warehouse</option>
                <option value="1">Warehouse #1</option>
                <option value="2">Warehouse #2</option>
              </select>
              <select className="w-full p-3 border rounded-lg text-black" required>
                <option value="">Payment Method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Card Payment</option>
              </select>
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Submit Order
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
