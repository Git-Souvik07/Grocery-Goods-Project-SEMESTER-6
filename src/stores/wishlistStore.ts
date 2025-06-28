import { create } from 'zustand'
import { WishlistItem } from '../types'

interface WishlistState {
  items: WishlistItem[]
  setItems: (items: WishlistItem[]) => void
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  clearWishlist: () => void
  isInWishlist: (productId: string) => boolean
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ 
    items: state.items.filter(item => item.id !== id) 
  })),
  clearWishlist: () => set({ items: [] }),
  isInWishlist: (productId) => {
    const { items } = get()
    return items.some(item => item.product_id === productId)
  },
}))