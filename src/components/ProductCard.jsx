export default function ProductCard (props) {
  return (
    <div>
      <h2>{ props.name }</h2>
      <p>{ props.description }</p>
      <p>${ props.price }</p>
      <button>add to cart</button>
    </div>
  )
}
