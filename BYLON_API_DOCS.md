# Bylon Admin Integration API Documentation

This documentation outlines the API endpoints available for the **Bylon** admin app to manage Sali Products Kenya ecommerce platform.

## Base URL
```
https://your-sali-products-domain.com/api
```

## Authentication
Currently, no authentication is required. In production, implement API keys or JWT tokens for security.

---

## Products API

### Get All Products
```http
GET /api/products
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Power Drill",
      "price": 12500,
      "image": "/products/drill.jpg",
      "category": "tools",
      "description": "Professional cordless drill with multiple speed settings",
      "stock": 45,
      "featured": true
    }
  ],
  "count": 8
}
```

### Get Single Product
```http
GET /api/products/:id
```

### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "New Product",
  "price": 15000,
  "category": "tools",
  "description": "Product description",
  "stock": 20,
  "image": "/products/image.jpg",
  "featured": false
}
```

### Update Product
```http
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 16000,
  "stock": 30
}
```

### Delete Product
```http
DELETE /api/products/:id
```

---

## Orders API

### Get All Orders
```http
GET /api/orders
GET /api/orders?status=pending
GET /api/orders?customerId=CUST-123
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "ORD-1234567890",
      "orderNumber": "SP12345678",
      "customerId": "CUST-1234567890",
      "customer": {
        "id": "CUST-1234567890",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "phone": "+254 700 000 000",
        "createdAt": "2026-01-17T10:30:00Z"
      },
      "items": [
        {
          "productId": 1,
          "productName": "Power Drill",
          "quantity": 2,
          "price": 12500,
          "total": 25000
        }
      ],
      "shippingAddress": {
        "street": "123 Main Street",
        "city": "Nairobi",
        "county": "Nairobi",
        "postalCode": "00100",
        "country": "Kenya",
        "latitude": -1.2921,
        "longitude": 36.8219
      },
      "payment": {
        "method": "mpesa",
        "status": "pending",
        "amount": 25500,
        "mpesaPhone": "+254 700 000 000"
      },
      "subtotal": 25000,
      "tax": 0,
      "shipping": 500,
      "total": 25500,
      "status": "pending",
      "createdAt": "2026-01-17T10:30:00Z",
      "updatedAt": "2026-01-17T10:30:00Z"
    }
  ],
  "count": 1
}
```

### Get Single Order
```http
GET /api/orders/:id
```

### Update Order Status
```http
PUT /api/orders/:id
Content-Type: application/json

{
  "status": "processing"
}
```

**Order Status Values:**
- `pending` - Order placed, awaiting processing
- `processing` - Order being prepared
- `shipped` - Order dispatched for delivery
- `delivered` - Order delivered to customer
- `cancelled` - Order cancelled

---

## Customers API

### Get All Customers
```http
GET /api/customers
GET /api/customers?search=john
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "CUST-1234567890",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+254 700 000 000",
      "createdAt": "2026-01-17T10:30:00Z"
    }
  ],
  "count": 1
}
```

### Create Customer
```http
POST /api/customers
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+254 700 000 001"
}
```

---

## Inventory API

### Get Inventory Levels
```http
GET /api/inventory
```

### Update Inventory
```http
POST /api/inventory
Content-Type: application/json

{
  "productId": 1,
  "quantity": 10,
  "type": "add",
  "reason": "Restocked from supplier"
}
```

**Inventory Update Types:**
- `add` - Add to existing stock
- `remove` - Remove from stock
- `set` - Set absolute stock level

---

## Payments API

### Get All Payments
```http
GET /api/payments
GET /api/payments?status=completed
GET /api/payments?orderId=ORD-123
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "orderId": "ORD-1234567890",
      "transactionId": "TXN-1234567890",
      "method": "mpesa",
      "status": "completed",
      "amount": 25500,
      "mpesaPhone": "+254 700 000 000",
      "processedAt": "2026-01-17T10:35:00Z"
    }
  ],
  "count": 1
}
```

### Process Payment
```http
POST /api/payments
Content-Type: application/json

{
  "orderId": "ORD-1234567890",
  "amount": 25500,
  "method": "mpesa",
  "mpesaPhone": "+254 700 000 000"
}
```

**Payment Methods:**
- `mpesa` - M-Pesa mobile money
- `card` - Credit/Debit card
- `cod` - Cash on delivery

**Payment Status:**
- `pending` - Payment initiated
- `completed` - Payment successful
- `failed` - Payment failed

---

## Customer Location Data

When customers place orders, their location is automatically captured (with permission) and included in the `shippingAddress` object:

```json
{
  "shippingAddress": {
    "street": "123 Main Street",
    "city": "Nairobi",
    "county": "Nairobi",
    "postalCode": "00100",
    "country": "Kenya",
    "latitude": -1.2921,
    "longitude": 36.8219
  }
}
```

**Use Cases for Location Data:**
- Display orders on a map in bylon admin
- Calculate accurate delivery routes
- Analyze customer distribution
- Optimize delivery logistics

---

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message description"
}
```

**HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request (missing/invalid data)
- `404` - Not Found
- `500` - Server Error

---

## Integration Notes

1. **Data Storage**: Currently uses localStorage (client-side). For production, implement a proper database (PostgreSQL recommended).

2. **Authentication**: Add API keys or JWT tokens before production deployment.

3. **CORS**: Configure CORS headers to allow bylon app domain access.

4. **Webhooks**: Consider implementing webhooks to notify bylon when orders are placed.

5. **Rate Limiting**: Implement rate limiting for API security.

6. **Real-time Updates**: Consider WebSocket connection for live order updates.

---

## Next Steps

To complete the integration:

1. Share bylon app URL/domain for CORS configuration
2. Provide API keys for authentication
3. Set up database connection
4. Configure webhook endpoints in bylon
5. Test all endpoints with bylon app
