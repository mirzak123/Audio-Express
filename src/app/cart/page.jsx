'use client'

import React, { useState, useEffect } from 'react'
import { getCartItems } from '@/utils/helpers'

export default function CartPage () {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getCartItems = async () => {
      const response = await fetch('/api/cart')
      const cartItems = await response.json()
      setCart(cartItems)
    }

    getCartItems()
  }, [])

  return (
    <div className="bg-lightGray md:py-24">
      <div className="container max-w-2xl mx-auto bg-white rounded md:py-6 px-8">
        <div className="uppercase tracking-wide text-2xl mb-8">Summary</div>
        <div className="flex flex-col gap-6">
          {getCartItems(cart)}
        </div>
      </div>
    </div>
  )
}
