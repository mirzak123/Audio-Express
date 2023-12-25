import CategoryCard from '../components/CategoryCard'
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
      <div className="container mx-auto my-32">
        <div className="flex justify-around">
          <CategoryCard
            category="headphones"
            image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          />
          <CategoryCard
            category="speakers"
            image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          <CategoryCard
            category="earphones"
            image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
        </div>
      </div>
    </main>
  )
}
