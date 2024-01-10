import { addToCart } from '@/utils/api'

export default function AddToCartButton(props) {
  const addToCartHelper = async () => {
    try {
      await addToCart(props.productId, props.quantity)
      props.showPopup()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="bg-darkOrange text-white text-sm flex items-center
        justify-around font-normal w-32 h-10 uppercase cursor-pointer
        hover:bg-peach transition duration-200"
      onClick={addToCartHelper}
    >
      add to cart
    </div>
  )
}
