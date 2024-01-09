export default function QuantitySelector(props) {
  function incrementQuantity() {
    props.setQuantity(prevQuantity => prevQuantity + 1)
  }

  function decrementQuantity() {
    props.setQuantity(prevQuantity => {
      if (prevQuantity === 1)
        return prevQuantity
      else
        return prevQuantity - 1
    })
  }

  return (
    <div className="bg-lightGray flex items-center justify-around font-normal w-32 h-10">
      <div className="cursor-pointer select-none" onClick={decrementQuantity}>-</div>
      <div className="font-bold">{props.quantity}</div>
      <div className="cursor-pointer select-none" onClick={incrementQuantity}>+</div>
    </div>
  )
}
