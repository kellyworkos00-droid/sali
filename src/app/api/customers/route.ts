import { NextResponse } from "next/server";

// GET all customers (for bylon admin)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    // In production, fetch from database
    return NextResponse.json({
      success: true,
      data: [],
      count: 0,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}

// POST new customer
export async function POST(request: Request) {
  try {
    const customer = await request.json();
    
    if (!customer.email || !customer.firstName || !customer.lastName) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Customer created successfully",
      data: {
        ...customer,
        id: `CUST-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create customer" },
      { status: 500 }
    );
  }
}
