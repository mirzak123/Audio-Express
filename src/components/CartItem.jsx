import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CartItem(props) {
  return (
    <motion.div
      key={props.id}
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      exit={{ x: 1500 }}
      className="flex items-center gap-4"
    >
      <Image
        className="w-20 h-20 rounded-lg"
        src={props.image}
        alt={props.name}
        width={100}
        height={100}
      />
      <div>
        <div>{props.name}</div>
        <div className="opacity-50">$ {props.price}</div>
      </div>
      <div className="ml-auto opacity-50">&times;{props.quantity}</div>
      <button
        className="text-3xl text-richBlack hover:text-peach transition duration-150"
        onClick={() => {
          console.log(props.id)
        props.deleteProduct(props.id)}}
      >&times;</button>
    </motion.div>
  )
}
