export default function FinishOrderButton(props) {
  return (
    <div
      className="cursor-pointer"
    >
      <button
        className="bg-darkOrange each text-white font-semibold py-4 px-12
        uppercase w-full mt-10 hover:bg-peach transition duration-200"
        onClick={props.showModal}
      >
        Finish Order
      </button>
    </div>
  )
}
