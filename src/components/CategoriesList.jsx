import CategoryCard from './CategoryCard'

export default function CategoriesList() {
  return (
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
  )
}
