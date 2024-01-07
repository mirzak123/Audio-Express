import PageHeader from '@/components/PageHeader';
import ProductSection from '@/components/ProductSection';

export default function Earphones() {
  return (
    <div>
      <PageHeader title="Earphones" />
      <div className="container mx-auto flex flex-col gap-28 my-28">
        <ProductSection
          overline="new product"
          title="YX1 WIRELESS EARPHONES"
          image="/assets/product-yx1-earphones/desktop/image-product.jpg"
          description="Tailor your listening experience with bespoke dynamic drivers
            from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
            sound even in noisy environments with its active noise cancellation feature."
          orientation="left"
        />
      </div>
    </div>
  );
}
