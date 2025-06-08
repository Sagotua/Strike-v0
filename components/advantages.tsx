import { Shield, Weight, Award, Users } from "lucide-react"

const advantages = [
  {
    icon: Weight,
    title: "Weight",
    description: "Only 2.8 kg",
  },
  {
    icon: Shield,
    title: "Ballistic Resistance",
    description: "Withstands armor-piercing B-32 bullets",
  },
  {
    icon: Award,
    title: "Certification",
    description: "DSTU certified",
  },
  {
    icon: Users,
    title: "Ergonomics",
    description: "3D anatomical shape",
  },
]

export default function Advantages() {
  return (
    <section className="py-20 px-4 bg-[#1a1d14]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Key Advantages</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg bg-[#12150c] border border-gray-700">
                <div className="mx-auto w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
