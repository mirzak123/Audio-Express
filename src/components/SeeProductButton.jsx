import Link from 'next/link'

export default function SeeProductButton(props) {
  return (
    <Link
      href={props.href}
      className="uppercase inline-block bg-darkOrange text-white font-bold text-md text-center px-10 py-4 mt-8"
    >
      See Product
    </Link>
  )
}
