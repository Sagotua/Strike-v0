import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, city, cityRef, warehouse, paymentMethod } = body

    // Validate required fields
    if (!name || !phone || !city || !cityRef || !warehouse || !paymentMethod) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate phone format
    const phoneRegex = /^\+38[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone format. Must start with +38 and contain 10 digits" },
        { status: 400 },
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send SMS confirmation

    console.log("New order received:", {
      name,
      phone,
      city,
      cityRef,
      warehouse,
      paymentMethod,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Order submitted successfully",
        orderId: `SF-${Date.now()}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
