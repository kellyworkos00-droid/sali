import { NextResponse } from "next/server";

// GET single order (for bylon admin)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // In production, fetch from database
    // For now, return mock data or from localStorage
    return NextResponse.json({
      success: true,
      data: {
        id,
        orderNumber: `SP${Date.now().toString().slice(-8)}`,
        status: 'pending',
        // ... other order details
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

// PUT update order status (for bylon admin)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates = await request.json();

    // In production, update database
    return NextResponse.json({
      success: true,
      message: "Order updated successfully",
      data: { id, ...updates, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update order" },
      { status: 500 }
    );
  }
}
