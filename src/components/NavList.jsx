import Link from 'next/link'

export default function NavList() {
  return (
    <ul className="flex gap-10 uppercase">
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/headphones">headphones</Link>
      </li>
      <li>
        <Link href="/speakers">speakers</Link>
      </li>
      <li>
        <Link href="/earphones">earphones</Link>
      </li>
    </ul>
  )
}
