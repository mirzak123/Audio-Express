import { addToCart } from '@/utils/api'

export default function AddToCartButton(props) {
  return (
    <div
      className="bg-darkOrange text-white text-sm flex items-center
        justify-around font-normal w-32 h-10 uppercase cursor-pointer
        hover:shadow-peach hover:shadow-md transition duration-200"
      onClick={() => addToCart(props.productId, props.quantity)}
    >
      add to cart
    </div>
  )
}
