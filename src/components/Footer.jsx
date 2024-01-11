import Link from 'next/link'
import Image from 'next/image'
import CompanyLogo from './CompanyLogo'
import NavList from './NavList'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-richBlack text-white"
    >
      <div className="container mx-auto py-10">
        <div className="flex justify-between">
          <CompanyLogo />
          <NavList />
        </div>
        <div className="font-normal leading-6 my-10 w-1/2">
          AudioExpress is an all in one stop to fulfill your audio needs. We&apos;re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </div>

        <div className="flex justify-between">
          <div>Copyright 2024. All Rights Reserved</div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="cursor-pointer"
                  href="https://bs-ba.facebook.com/people/Nejra-Mujezinovic/pfbid025venJzAmA9Q6CPY6YbzF1ydihV1hwLrNrVNnkvcJkBGDBFmuM4VzxPT65jbEzyxgl/"
                >
                  <Image
                    src="/assets/shared/desktop/icon-facebook.svg"
                    alt="facebook icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  href="https://twitter.com/"
                >
                  <Image
                    src="/assets/shared/desktop/icon-twitter.svg"
                    alt="twitter icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  href="https://www.instagram.com/neejjraa"
                >
                  <Image
                    src="/assets/shared/desktop/icon-instagram.svg"
                    alt="instagram icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
