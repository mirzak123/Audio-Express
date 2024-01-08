'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Logo() {
  const isHome = usePathname() === '/'

  return (
    <div className="logo cursor-pointer">
      <Link
        href={isHome ? '#navbar' : '/'}
        scroll={isHome}
        className="tracking-wide text-xl"
      >
        Audio<span className="text-darkOrange font-bold">Express</span>
      </Link>
    </div>
  )
}
