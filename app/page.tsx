import type { Metadata } from "next"
import Hero from "@/components/hero"
import Advantages from "@/components/advantages"
import Reviews from "@/components/reviews"
import ProductDetails from "@/components/product-details"
import FAQ from "@/components/faq"
import DeliveryGuarantee from "@/components/delivery-guarantee"
import PrivacyPolicy from "@/components/privacy-policy"
import OrderModal from "@/components/order-modal"
import GoogleAnalytics from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Strike Face Ceramic Armor Plates — Class 6 | Certified Protection",
  description:
    "Certified ceramic armor plates Class 6. Withstands B-32 armor-piercing bullets. Weight only 2.8kg. DSTU certified with ballistic certificate. Fast delivery across Ukraine.",
  keywords:
    "ceramic armor plates, ballistic protection, class 6 armor, B-32 resistant, DSTU certified, military equipment, body armor, Ukraine",
  openGraph: {
    title: "Strike Face Ceramic Armor Plates — Class 6",
    description: "Certified ceramic armor plates. Withstands B-32 bullets. Only 2.8kg weight.",
    type: "website",
    locale: "en_US",
    siteName: "Strike Face Armor",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Strike Face Ceramic Armor Plates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strike Face Ceramic Armor Plates — Class 6",
    description: "Certified ceramic armor plates. Withstands B-32 bullets. Only 2.8kg weight.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Strike Face Ceramic Armor Plates Class 6",
  description:
    "Certified ceramic armor plates that withstand B-32 armor-piercing bullets. Weight only 2.8kg with DSTU certification.",
  brand: {
    "@type": "Brand",
    name: "Strike Face",
  },
  offers: {
    "@type": "Offer",
    price: "11500",
    priceCurrency: "UAH",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Strike Face Armor",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Weight",
      value: "2.8 kg",
    },
    {
      "@type": "PropertyValue",
      name: "Protection Level",
      value: "Class 6",
    },
    {
      "@type": "PropertyValue",
      name: "Material",
      value: "Silicon carbide + UHMWPE",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <GoogleAnalytics />
      <main className="min-h-screen bg-[#12150c] text-white">
        <Hero />
        <Advantages />
        <Reviews />
        <ProductDetails />
        <FAQ />
        <DeliveryGuarantee />
        <PrivacyPolicy />
        <OrderModal />
      </main>
    </>
  )
}
