import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <div
      className="inline-block font-normal cursor-pointer py-8 hover:text-darkOrange transition duration-200"
      onClick={() => router.back()}
    >
      Go Back
    </div>
  )
}
