'use client'

import React, { useState, useEffect } from 'react'
import { getCartItems } from '@/utils/helpers'
import { deleteFromCart, addNewOrder } from '@/utils/api'
import { AnimatePresence } from 'framer-motion'
import FinishOrderButton from '@/components/FinishOrderButton'
import FinishOrderModal from '@/components/FinishOrderModal'

export default function CartPage () {
  const [cart, setCart] = useState([])
  const [showFinishOrderModal, setShowFinishOrderModal] = useState(false)
  const shippingPrice = 50
  const itemsPrice = Number(cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2))
  const totalPrice = itemsPrice + shippingPrice

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

  async function finalizeOrder() {
    showModal()
    await addNewOrder(1, totalPrice, cart)
    for (const product of cart) {
      await deleteProduct(product.productid)
    }
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
            <FinishOrderButton finalizeOrder={finalizeOrder} />
            <div className="flex justify-between mt-8">
              <div className="text-xl font-normal opacity-50 uppercase">Total</div>
              <div className="text-xl font-bold">$ {itemsPrice}</div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="text-xl font-normal opacity-50 uppercase">Shipping</div>
              <div className="text-xl font-bold">$ {shippingPrice}</div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="text-xl font-normal opacity-50">Total</div>
              <div className="text-xl font-bold">$ {totalPrice}</div>
            </div>
          </>
          :
          <div className="text-center uppercase">
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
