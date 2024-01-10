import Image from 'next/image'

export default function CartItem(props) {
  return (
    <div className="flex items-center gap-4">
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
    </div>
  )
}
