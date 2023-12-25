import Image from 'next/image'

export default function CategoryCard(props) {
  return (
    <div className="relative bg-lightGray rounded">
      <Image
        className=""
        src={props.image}
        alt="category image"
        width={300}
        height={300}
        objectFit="cover"
        objectPosition="center"
      />
      <div className="text-center uppercase">
        {props.category}
      </div>
      <div className="text-center uppercase">
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
      </div>
    </div>
  )
}
