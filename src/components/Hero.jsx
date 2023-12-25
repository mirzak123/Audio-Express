import Image from 'next/image'

export default function Hero(props) {
  return (
    <section className="relative text-white z-0">
      <Image
        src={props.backgroundImage}
        alt="product image"
        width={1920}
        height={1080}
        objectFit="cover"
        objectPosition="center"
      />
      <div className="container absolute top-0 bottom-0 flex justify-start items-center max-w-lg">
        <div className="bg-transparent z-10">
          <div className="uppercase tracking-{10px} font-normal">{props.overline}</div>
          <h1 className="text-5xl font-bold">{props.name}</h1>
          <p className="text-2xl">{props.description}</p>
        </div>
      </div>
    </section>
  )
}
