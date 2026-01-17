import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

// GET single product
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = getProductById(id);
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// PUT update product (for bylon admin)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates = await request.json();

    // In production, this would update database
    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      data: { id, ...updates },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE product (for bylon admin)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // In production, this would delete from database
    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
