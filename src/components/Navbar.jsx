import CompanyLogo from './CompanyLogo'
import ShoppingCart from './ShoppingCart'

export default function Navbar () {
  return (
    <nav
      className="bg-richBlack text-white flex justify-around py-6 z-10"
    >
      <CompanyLogo />
      <ul className="flex gap-10 uppercase">
        <li>home</li>
        <li>headphones</li>
        <li>speakers</li>
        <li>earphones</li>
      </ul>
      <ShoppingCart />
    </nav>
  )
}
