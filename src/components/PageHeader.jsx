export default function PageHeader(props) {
  return (
    <header className="bg-richBlack pt-20 pb-20">
      <h1 className="uppercase text-white text-4xl font-bold mb-4 text-center">
        {props.title}
      </h1>
    </header>
  )
}
