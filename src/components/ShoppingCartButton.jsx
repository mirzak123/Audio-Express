import Link from 'next/link'
import Image from 'next/image'

export default function ShoppingCartButton() {
  return (
    <Link
      className="cursor-pointer"
      href="/cart"
    >
      <Image
        className="hover:scale-110 transition duration-200"
        src="/assets/shared/desktop/icon-cart.svg"
        alt="shopping cart icon"
        width={24}
        height={24}
      />
    </Link>
  )
}
