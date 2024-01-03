import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard(props) {
  return (
    <div className="relative bg-lightGray rounded flex flex-col items-center pt-32 px-24 hover:scale-110 duration-300">
      <Image
        className="absolute bottom-2"
        src={props.image}
        alt="category image"
        width={300}
        height={300}
        objectFit="cover"
        objectPosition="center"
      />
      <div className="uppercase">
        {props.category}
      </div>
      <Link
        className="uppercase"
        href={props.href}
      >
        shop
        <span>
          <Image
            className="inline-block w-4 h-4"
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right icon"
            width={24}
            height={24}
          />
        </span>
      </Link>
    </div>
  )
}
