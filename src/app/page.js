import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="products">
        <ProductCard
          name="Headphones"
          description="some headphones"
          price="100"
        />

      </div>
      <Footer />
    </main>
  )
}
