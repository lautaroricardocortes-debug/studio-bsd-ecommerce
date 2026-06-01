export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  price: number;
  priceLabel: string;
  deliveryTime: string;
  badge: string;
  category: string;
  icon: string;
  popular: boolean;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  iva: number;
  subtotal: number;
}

export interface Testimonial {
  name: string;
  company: string;
  city: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
