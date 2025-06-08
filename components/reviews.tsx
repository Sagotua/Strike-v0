import { Star } from "lucide-react"

const reviews = [
  {
    name: "Serhii",
    city: "Kharkiv",
    text: "Ordered for my unit — delivery was fast, and the quality exceeded expectations.",
    rating: 5,
  },
  {
    name: "Oleksandr",
    city: "Kyiv",
    text: "Excellent protection level. The 3D shape fits perfectly and doesn't restrict movement.",
    rating: 5,
  },
  {
    name: "Viktor",
    city: "Dnipro",
    text: "Lightweight yet reliable. The ballistic certificate gives confidence in the product.",
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-[#12150c]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#1a1d14] p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
              <div className="text-sm">
                <span className="font-bold text-white">{review.name}</span>
                <span className="text-gray-400">, {review.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
