import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FinishOrderModal(props) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
    >
      <motion.div
        key="item-added-popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-around items-center gap-32 bg-white w-5/12 h-32 p-4 rounded shadow-lg mb-8 border border-peach"
      >
        <Image 
          className="object-cover w-20 h-20"
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="checkmark"
          width={100}
          height={100}
        />
        <div className="text-gray-800 mb-2 text-xl">
          Your order has been completed!<br />
          Thank you for shopping with us.
        </div>
        <button
          className="text-3xl text-richBlack hover:text-peach transition duration-150"
          onClick={props.closeModal}
        >
          &times;
        </button>
      </motion.div>
    </div>
)
}
