import Link from 'next/link'

export default function Logo() {

  return (
    <div className="logo cursor-pointer">
      <Link
        href="/"
        className="tracking-wide text-xl"
      >
        Audio<span className="text-darkOrange font-bold">Express</span>
      </Link>
    </div>
  )
}
