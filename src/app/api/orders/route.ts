import { NextResponse } from "next/server";
import { Order } from "@/types";

// GET all orders (for bylon admin)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const customerId = searchParams.get("customerId");

    // In production, fetch from database with filters
    // For now, get from localStorage (client-side) or return empty
    const orders = getOrdersFromStorage();
    
    let filteredOrders = orders;
    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }
    if (customerId) {
      filteredOrders = filteredOrders.filter(order => order.customerId === customerId);
    }

    return NextResponse.json({
      success: true,
      data: filteredOrders,
      count: filteredOrders.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// POST new order (from checkout)
export async function POST(request: Request) {
  try {
    const orderData = await request.json();
    
    // Validate required fields
    if (!orderData.customer || !orderData.items || !orderData.shippingAddress) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create order
    const order: Order = {
      id: generateOrderId(),
      orderNumber: generateOrderNumber(),
      customerId: orderData.customer.id || generateCustomerId(),
      customer: orderData.customer,
      items: orderData.items,
      shippingAddress: orderData.shippingAddress,
      payment: orderData.payment,
      subtotal: orderData.subtotal,
      tax: orderData.tax || 0,
      shipping: orderData.shipping || 0,
      total: orderData.total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Save order (in production, save to database)
    saveOrderToStorage(order);

    return NextResponse.json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}

// Helper functions
function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function generateOrderNumber(): string {
  return `SP${Date.now().toString().slice(-8)}`;
}

function generateCustomerId(): string {
  return `CUST-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getOrdersFromStorage(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  } catch {
    return [];
  }
}

function saveOrderToStorage(order: Order): void {
  if (typeof window === 'undefined') return;
  try {
    const orders = getOrdersFromStorage();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  } catch (error) {
    console.error('Failed to save order:', error);
  }
}
