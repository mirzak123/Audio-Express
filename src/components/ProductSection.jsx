import Image from 'next/image'
import SeeProductButton from './SeeProductButton'

export default function ProductSection(props) {
  const isRightOrientation = props.orientation === 'right'
  
  return(
    <section className={`flex flex-col md:flex-row md:gap-16 items-center ${isRightOrientation ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:flex-1">
        <Image
          className="rounded"
          src={props.image}
          alt={props.title}
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="md:flex-1 px-4">
        <div className="uppercase text-darkOrange tracking-widest font-normal mb-4">
          {props.overline && props.overline}
        </div>
        <h2 className="text-5xl font-bold mb-4">
          {props.title}
        </h2>
        <p className="font-normal">{props.description}</p>
        <SeeProductButton href={`/products/${props.id}`} />
      </div>
    </section>
  )
}
