import Link from 'next/link'
import Image from 'next/image'

export default function ShoppingCart() {
  return (
    <Link
      className="cursor-pointer"
      href="/cart"
    >
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        alt="shopping cart icon"
        width={24}
        height={24}
      />
    </Link>
  )
}
