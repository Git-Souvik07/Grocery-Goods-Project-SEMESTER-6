import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Eye, ShoppingCart, Plus, Minus } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Product } from '../types'
import { useAuthStore } from '../stores/authStore'
import { useCartStore } from '../stores/cartStore'
import { useWishlistStore } from '../stores/wishlistStore'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuthStore()
  const { addItem: addToCart } = useCartStore()
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore()
  const queryClient = useQueryClient()

  const addToCartMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('User not authenticated')

      // Check if item already exists in cart
      const { data: existingItem } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single()

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from('cart')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id)

        if (error) throw error
      } else {
        // Insert new item
        const { data, error } = await supabase
          .from('cart')
          .insert({
            user_id: user.id,
            product_id: product.id,
            quantity,
          })
          .select('*, product:products(*)')
          .single()

        if (error) throw error
        addToCart(data as any)
      }
    },
    onSuccess: () => {
      toast.success('Added to cart!')
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to add to cart')
    },
  })

  const addToWishlistMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('User not authenticated')

      const { data, error } = await supabase
        .from('wishlist')
        .insert({
          user_id: user.id,
          product_id: product.id,
        })
        .select('*, product:products(*)')
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      addToWishlist(data as any)
      toast.success('Added to wishlist!')
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to add to wishlist')
    },
  })

  const handleAddToCart = () => {
    addToCartMutation.mutate()
  }

  const handleAddToWishlist = () => {
    if (isInWishlist(product.id)) {
      toast.error('Already in wishlist!')
      return
    }
    addToWishlistMutation.mutate()
  }

  return (
    <div className="product-card card-hover">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          ₹{product.price}
        </div>
        <Link
          to={`/product/${product.id}`}
          className="absolute top-2 right-2 bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.details}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded-lg min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleAddToWishlist}
          disabled={addToWishlistMutation.isPending || isInWishlist(product.id)}
          className="w-full btn-secondary flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
          <span>{isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}</span>
        </button>
        
        <button
          onClick={handleAddToCart}
          disabled={addToCartMutation.isPending}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{addToCartMutation.isPending ? 'Adding...' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  )
}