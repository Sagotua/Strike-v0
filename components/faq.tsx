"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Does it really withstand bullets?",
    answer:
      "Yes, our ceramic armor plates are DSTU certified and tested to withstand B-32 armor-piercing bullets. Each plate comes with an official ballistic certificate confirming its protection level.",
  },
  {
    question: "Can I order with cash on delivery?",
    answer:
      "We offer cash on delivery (COD) through Nova Poshta. You can also pay by card if preferred. Payment is only required upon receiving your order.",
  },
  {
    question: "What is the weight?",
    answer:
      "Each ceramic armor plate weighs only 2.8 kg, making it significantly lighter than traditional steel plates while maintaining superior protection levels.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-[#12150c]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1a1d14] rounded-lg border border-gray-700">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#22251a] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
