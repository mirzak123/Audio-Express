import Image from 'next/image'

export default function ShoppingCart() {
  return (
    <div>
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        alt="shopping cart icon"
        width={24}
        height={24}
      />
    </div>
  )
}
