import CompanyLogo from './CompanyLogo'

export default function Navbar () {
  return (
    <nav className="flex justify-around py-6">
      <CompanyLogo />
      <ul class="flex gap-10">
        <li>home</li>
        <li>products</li>
        <li>contact</li>
      </ul>
      <div>card</div>
    </nav>
  )
}
