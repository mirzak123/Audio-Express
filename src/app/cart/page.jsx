'use client'

import React, { useState, useEffect } from 'react'
import { getCartItems } from '@/utils/helpers'
import { deleteFromCart } from '@/utils/api'
import { AnimatePresence } from 'framer-motion'
import FinishOrderButton from '@/components/FinishOrderButton'
import FinishOrderModal from '@/components/FinishOrderModal'

export default function CartPage () {
  const [cart, setCart] = useState([])
  const [showFinishOrderModal, setShowFinishOrderModal] = useState(false)

  useEffect(() => {
    const getCartItems = async () => {
      const response = await fetch('/api/cart')
      const cartItems = await response.json()
      setCart(cartItems)
    }

    getCartItems()
  }, [])

  async function deleteProduct(id) {
    setCart(prevCart => prevCart.filter(product => {
    return product.productid != id
    }))
    await deleteFromCart(id)
  }

  function showModal() {
    setShowFinishOrderModal(true)
  }

  function closeModal() {
    setShowFinishOrderModal(false)
  }

  return (
    <div className="bg-lightGray md:py-28">
      <div className="container max-w-2xl mx-auto bg-white rounded md:py-6 px-8 shadow shadow-lightGray">
        <div className="uppercase tracking-wide text-2xl mb-8">Summary</div>
        <div className="flex flex-col gap-6">
          <AnimatePresence>
          {getCartItems(cart, deleteProduct)}
          </AnimatePresence>
        </div>
        { cart.length > 0 ?
          <>
            <FinishOrderButton showModal={showModal} />
          </>
          :
          <div className="text-center">
            Your cart is empty
          </div>
        }
        <AnimatePresence>
        { showFinishOrderModal &&
          <FinishOrderModal closeModal={closeModal} />
        }
        </ AnimatePresence>
      </div>
    </div>
  )
}
