import CategoriesList from "@/components/CategoriesList";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";

export default function Speakers() {
  return (
    <div>
      <PageHeader title="Speakers" />
      <div className="container mx-auto flex flex-col gap-28 my-28">
        <ProductSection
          overline="new product"
          title="ZX9 SPEAKER"
          image="/assets/product-zx9-speaker/desktop/image-product.jpg"
          description="Upgrade your sound system with the all new ZX9 active speaker.
          It’s a bookshelf speaker system that offers truly wireless connectivity -- creating
          new possibilities for more pleasing and practical audio setups."
          orientation="left"
          id="zx9"
        />
        <ProductSection
          title="ZX7 SPEAKER"
          image="/assets/product-zx7-speaker/desktop/image-product.jpg"
          description="Stream high quality sound wirelessly with minimal loss.
          The ZX7 bookshelf speaker uses high-end audiophile components that
          represents the top of the line powered speakers for home or studio use."
          orientation="right"
          id="zx7"
        />
        <CategoriesList />
      </div>
    </div>
  );
}
