export interface User {
  id: string
  email: string
  name: string
  user_type: 'user' | 'admin'
  image_url?: string | null
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  category: string
  details: string
  price: number
  image_url: string
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  quantity: number
  product: Product
  created_at: string
  updated_at: string
}

export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  product: Product
  created_at: string
}

export interface Order {
  id: string
  user_id: string
  name: string
  email: string
  phone: string
  address: string
  payment_method: string
  total_amount: number
  status: 'pending' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string
  order_items: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  product: Product
  created_at: string
}

export interface Message {
  id: string
  user_id: string
  name: string
  email: string
  phone: string
  message: string
  created_at: string
}

export interface Category {
  id: string
  name: string
  image: string
  description: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh, juicy, and seasonal fruits'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh, organic vegetables for healthy meals'
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Aromatic spices to elevate your cooking'
  },
  {
    id: 'grains',
    name: 'Grains',
    image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium-quality grains for nutritious meals'
  },
  {
    id: 'dairy',
    name: 'Dairy',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Farm-fresh dairy products'
  },
  {
    id: 'bakery items',
    name: 'Bakery Items',
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Freshly baked delights'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Crispy and delicious snacks'
  },
  {
    id: 'oils',
    name: 'Oils',
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Pure, healthy cooking oils'
  }
]