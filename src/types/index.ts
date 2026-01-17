export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  featured?: boolean;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  county: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Payment {
  method: string; // 'mpesa' | 'card' | 'cash'
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  amount: number;
  mpesaPhone?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customer: Customer;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  payment: Payment;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface InventoryUpdate {
  productId: number;
  quantity: number;
  type: 'add' | 'remove' | 'set';
  reason?: string;
}
