import Image from 'next/image'
import CompanyLogo from './CompanyLogo'
import NavList from './NavList'

export default function Footer() {
  return (
    <footer className="bg-richBlack text-white">
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
          <div>Copyright 2021. All Rights Reserved</div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook icon"
                  width={24}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="twitter icon"
                  width={24}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram icon"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
