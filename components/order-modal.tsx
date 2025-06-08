"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface OrderModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function OrderModal({ isOpen = false, onClose }: OrderModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [cities, setCities] = useState<Array<{ ref: string; description: string }>>([])
  const [warehouses, setWarehouses] = useState<Array<{ ref: string; description: string; number: string }>>([])
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [isLoadingWarehouses, setIsLoadingWarehouses] = useState(false)
  const [selectedCityRef, setSelectedCityRef] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    cityRef: "",
    warehouse: "",
    paymentMethod: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  const fetchCities = async (searchTerm: string) => {
    if (searchTerm.length < 2) return

    setIsLoadingCities(true)
    try {
      const response = await fetch("/api/nova-poshta/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityName: searchTerm }),
      })
      const data = await response.json()
      setCities(data.data || [])
    } catch (error) {
      console.error("Error fetching cities:", error)
    } finally {
      setIsLoadingCities(false)
    }
  }

  const fetchWarehouses = async (cityRef: string) => {
    if (!cityRef) return

    setIsLoadingWarehouses(true)
    try {
      const response = await fetch("/api/nova-poshta/warehouses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityRef }),
      })
      const data = await response.json()
      setWarehouses(data.data || [])
    } catch (error) {
      console.error("Error fetching warehouses:", error)
    } finally {
      setIsLoadingWarehouses(false)
    }
  }

  useEffect(() => {
    if (selectedCityRef && formData.city) {
      fetchWarehouses(selectedCityRef)
    }
  }, [selectedCityRef])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          cityRef: selectedCityRef,
        }),
      })

      if (response.ok) {
        alert("Order submitted successfully! We will contact you shortly.")
        setFormData({ name: "", phone: "", city: "", cityRef: "", warehouse: "", paymentMethod: "" })
        setSelectedCityRef("")
        setCities([])
        setWarehouses([])
        handleClose()
      } else {
        alert("Error submitting order. Please try again.")
      }
    } catch (error) {
      alert("Error submitting order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
    if (onClose) onClose()
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (!value.startsWith("+38")) {
      value = "+38" + value.replace(/^\+?38?/, "")
    }
    setFormData({ ...formData, phone: value })
  }

  if (!isModalOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 id="modal-title" className="text-2xl font-bold text-black">
            Order Armor Plates
          </h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 p-1" aria-label="Close modal">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-black">
              Name + Surname *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-black"
              required
              aria-required="true"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-black">
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              pattern="\+38[0-9]{10}"
              className="text-black"
              required
              aria-required="true"
              placeholder="+380XXXXXXXXX"
            />
          </div>

          <div>
            <Label htmlFor="city" className="text-black">
              City *
            </Label>
            <div className="relative">
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value })
                  fetchCities(e.target.value)
                }}
                className="text-black"
                required
                aria-required="true"
                placeholder="Start typing city name..."
              />
              {isLoadingCities && (
                <div className="absolute right-3 top-3">
                  <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-black rounded-full"></div>
                </div>
              )}
              {cities.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto">
                  {cities.map((city) => (
                    <button
                      key={city.ref}
                      type="button"
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 text-black"
                      onClick={() => {
                        setFormData({ ...formData, city: city.description, warehouse: "" })
                        setSelectedCityRef(city.ref)
                        setCities([])
                        fetchWarehouses(city.ref)
                      }}
                    >
                      {city.description}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="warehouse" className="text-black">
              Nova Poshta Warehouse *
            </Label>
            <Select
              value={formData.warehouse}
              onValueChange={(value) => setFormData({ ...formData, warehouse: value })}
              required
              disabled={!selectedCityRef || isLoadingWarehouses}
            >
              <SelectTrigger className="text-black">
                <SelectValue
                  placeholder={
                    !selectedCityRef
                      ? "Select city first"
                      : isLoadingWarehouses
                        ? "Loading warehouses..."
                        : "Select Warehouse"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {warehouses.map((warehouse) => (
                  <SelectItem key={warehouse.ref} value={warehouse.ref}>
                    Warehouse #{warehouse.number}: {warehouse.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="payment" className="text-black">
              Payment Method *
            </Label>
            <Select
              value={formData.paymentMethod}
              onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
              required
            >
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select Payment Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cod">Cash on Delivery</SelectItem>
                <SelectItem value="card">Card Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </Button>
        </form>

        <div id="formMessage" className="sr-only" aria-live="polite" aria-atomic="true"></div>
      </div>
    </div>
  )
}
