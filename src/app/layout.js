import { Manrope } from 'next/font/google'
import '../styles/globals.css'

export const metadata = {
  title: 'AudioExpressPro',
  description: 'Generated by create next app',
}

const manrope = Manrope({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
