export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured?: boolean;
}

// Mock products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Hammer Set',
    description: 'High-quality hammer set with ergonomic grip. Perfect for construction and carpentry work.',
    price: 2500,
    category: 'tools',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=500',
    stock: 50,
    featured: true,
  },
  {
    id: '2',
    name: 'Electric Drill Machine',
    description: 'Powerful 850W electric drill with variable speed control and multiple drill bits.',
    price: 12000,
    category: 'machines',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500',
    stock: 25,
    featured: true,
  },
  {
    id: '3',
    name: 'Safety Gloves Pack',
    description: 'Industrial grade safety gloves. Pack of 10 pairs for maximum hand protection.',
    price: 1500,
    category: 'supplies',
    image: 'https://images.unsplash.com/photo-1584008356808-ebab9dad4fe8?w=500',
    stock: 100,
  },
  {
    id: '4',
    name: 'Circular Saw',
    description: '1800W circular saw with laser guide for precise cutting of wood and metal.',
    price: 18500,
    category: 'machines',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500',
    stock: 15,
    featured: true,
  },
  {
    id: '5',
    name: 'Screwdriver Set',
    description: 'Complete 24-piece screwdriver set with magnetic tips and comfortable handles.',
    price: 3200,
    category: 'tools',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    stock: 60,
  },
  {
    id: '6',
    name: 'Welding Machine',
    description: 'Professional 200A welding machine suitable for industrial and home use.',
    price: 35000,
    category: 'machines',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500',
    stock: 10,
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
