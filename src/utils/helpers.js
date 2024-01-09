import ProductSection from "@/components/ProductSection";

export function getProductSections(products) {
  let orientation = "right";
  const productsList = products.map((product, index) => {
    if (orientation === "right") {
      orientation = "left";
    } else {
      orientation = "right";
    }
    console.log(product.productid)

    return (
      <ProductSection
        key={product.productid}
        orientation={orientation}
        overline={index === 0 ? "new product" : ""}
        title={product.name}
        image={`/assets/${product.imageurl}/desktop/image-product.jpg`}
        description={product.description}
        id={product.productid}
      />
    )
  })

  return productsList;
}
