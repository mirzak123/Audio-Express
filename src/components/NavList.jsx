import Link from 'next/link'

export default function NavList() {
  return (
    <ul className="flex gap-10 uppercase">
      <li>
        <Link className="hover:text-peach transition duration-200" href="/">home</Link>
      </li>
      <li>
        <Link className="hover:text-peach transition duration-200" href="/headphones">headphones</Link>
      </li>
      <li>
        <Link className="hover:text-peach transition duration-200" href="/speakers">speakers</Link>
      </li>
      <li>
        <Link className="hover:text-peach transition duration-200" href="/earphones">earphones</Link>
      </li>
    </ul>
  )
}
