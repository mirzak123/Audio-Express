import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ItemAddedPopup(props) {
  return (
    <div
      className="fixed inset-0 flex items-end justify-center"
    >
      <motion.div
        key="item-added-popup"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        className="flex justify-around items-center gap-32 bg-white w-5/12 h-32 p-4 rounded shadow-lg mb-8 border border-peach"
      >
        <Image 
          className="object-cover w-20 h-20"
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="checkmark"
          width={100}
          height={100}
        />
        <div className="text-gray-800 mb-2 text-xl">Item added to cart</div>
        <button
          className="text-3xl text-richBlack hover:text-peach transition duration-150"
          onClick={props.closePopup}
        >
          &times;
        </button>
      </motion.div>
    </div>
  )
}
