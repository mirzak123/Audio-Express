import CompanyLogo from './CompanyLogo'
import NavList from './NavList'
import ShoppingCartButton from './ShoppingCartButton'

export default function Navbar () {
  return (
    <nav
      id="navbar"
      className="bg-richBlack"
    >
      <div className="container text-white flex justify-around py-6 mx-auto z-10">
        <CompanyLogo />
        <NavList />
        <ShoppingCartButton />
      </div>
    </nav>
  )
}
