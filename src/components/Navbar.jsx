import CompanyLogo from './CompanyLogo'
import NavList from './NavList'
import ShoppingCart from './ShoppingCart'

export default function Navbar () {
  return (
    <nav
      id="navbar"
      className="bg-richBlack"
    >
      <div className="container text-white flex justify-around py-6 mx-auto z-10">
        <CompanyLogo />
        <NavList />
        <ShoppingCart />
      </div>
    </nav>
  )
}
