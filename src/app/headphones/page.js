import CategoriesList from "@/components/CategoriesList";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";

export default function Headphones() {
  return (
    <div>
      <PageHeader title="Headphones" />
      <div className="container mx-auto flex flex-col gap-28 my-28">
        <ProductSection
          overline="new product"
          title="XX99 MARK II HEADPHONES"
          image="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the balanced depth
            and precision of studio-quality sound."
          orientation="left"
        />
        <ProductSection
          title="XX99 MARK I HEADPHONES"
          image="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          description="As the gold standard for headphones, the classic XX99 Mark I
            offers detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go."
          orientation="right"
        />
        <ProductSection
          title="XX59 HEADPHONES"
          image="/assets/product-xx59-headphones/desktop/image-product.jpg"
          description="Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile wireless
            headset is a brilliant companion at home or on the move."
          orientation="left"
        />
        <CategoriesList />
      </div>
    </div>
  );
}
