import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

// GET all products
export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json({
      success: true,
      data: products,
      count: products.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST new product (for bylon admin)
export async function POST(request: Request) {
  try {
    const product = await request.json();
    
    // Validate required fields
    if (!product.name || !product.price || !product.category) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, this would save to database
    // For now, return success
    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      data: { ...product, id: Date.now() },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}
