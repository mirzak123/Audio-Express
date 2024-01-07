import CategoriesList from '../components/CategoriesList'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="">
      <Hero
        name="Sound Master M50"
        description="Experience natural, lifelike audio and exceptional
          build quality made for the passionate music enthusiast."
        overline="New release"
        backgroundImage="/assets/home/desktop/image-hero.jpg"
      />
      <CategoriesList />
    </main>
  )
}
