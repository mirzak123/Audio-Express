import CompanyLogo from './CompanyLogo'
import NavList from './NavList'
import ShoppingCart from './ShoppingCart'

export default function Navbar () {
  return (
    <nav
      className="bg-richBlack text-white flex justify-around py-6 z-10"
    >
      <CompanyLogo />
      <NavList />
      <ShoppingCart />
    </nav>
  )
}
