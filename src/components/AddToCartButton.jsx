import { addToCart } from '@/utils/api'

export default function AddToCartButton(props) {
  return (
    <div
      className="bg-darkOrange text-white text-sm flex items-center
        justify-around font-normal w-32 h-10 uppercase cursor-pointer
        hover:bg-peach transition duration-200"
      onClick={() => {
        try {
          addToCart(props.productId, props.quantity)
          props.showPopup()
        } catch (error) {
          console.log(error)
        }
      }}
    >
      add to cart
    </div>
  )
}
