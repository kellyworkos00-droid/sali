# Sali Products Kenya - Ecommerce Website

A modern, full-featured ecommerce website built with Next.js 14 for Sali Products Kenya - a leading supplier of tools, machines, and industrial supplies in Kenya.

## Features

- 🛍️ **Product Catalog** - Browse extensive selection of tools, machines, and supplies
- 🛒 **Shopping Cart** - Add products to cart with quantity management
- 💳 **Checkout Process** - Streamlined checkout for easy ordering
- 📱 **Mobile Responsive** - Fully optimized for all devices
- 🎨 **Modern UI** - Clean design with Tailwind CSS
- 🔍 **Product Search** - Find products quickly
- 📂 **Category Filtering** - Browse by tools, machines, or supplies
- 💰 **KES Currency** - Prices displayed in Kenyan Shillings
- 📧 **Contact Forms** - Easy customer inquiries
- 🔐 **User Authentication** - Secure account management (ready for implementation)
- 👨‍💼 **Admin Dashboard** - Product management (ready for implementation)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Image Optimization:** Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sali/
├── src/
│   ├── app/              # App Router pages
│   │   ├── products/     # Product listing and details
│   │   ├── cart/         # Shopping cart
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   └── ...
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── lib/             # Utility functions and data
│   │   ├── products.ts  # Product data and functions
│   │   └── utils.ts     # Helper functions
│   └── store/           # State management
│       └── cartStore.ts # Shopping cart state
├── public/              # Static assets
└── ...config files
```

## Features to Implement

### Authentication
- User registration and login
- Password reset functionality
- User profile management
- Order history

### Admin Dashboard
- Product CRUD operations
- Order management
- User management
- Analytics and reports

### Database Integration
- Set up Prisma with PostgreSQL
- Product database
- User accounts
- Order tracking

### Payment Integration
- M-Pesa integration for Kenyan payments
- Credit/Debit card processing
- Order confirmation emails

### Enhanced Features
- Product reviews and ratings
- Wishlist functionality
- Advanced search with filters
- Related products suggestions
- Email newsletters

## Environment Variables

Create a `.env.local` file:

```env
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Payment (M-Pesa, etc.)
MPESA_CONSUMER_KEY="your-key"
MPESA_CONSUMER_SECRET="your-secret"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

This is a proprietary project for Sali Products Kenya.

## License

© 2026 Sali Products Kenya. All rights reserved.

## Support

For support, email info@saliproducts.co.ke or call +254 700 000 000.
