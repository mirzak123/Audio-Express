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
      <div className="container mx-auto mt-44 mb-32">
        <div className="flex justify-around">
          <CategoryCard
            category="headphones"
            image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            href="/headphones"
          />
          <CategoryCard
            category="speakers"
            image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            href="/speakers"
          />
          <CategoryCard
            category="earphones"
            image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            href="/earphones"
          />
        </div>
      </div>
    </main>
  )
}
