import ProductSection from "@/components/ProductSection";
import CartItem from "@/components/CartItem";

export function getProductSections(products) {
  let orientation = "right";
  const productsList = products.map((product, index) => {
    if (orientation === "right") {
      orientation = "left";
    } else {
      orientation = "right";
    }

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

export function getCartItems(cart, deleteProduct) {
  const cartItems = cart.map((item) => {
    return (
      <CartItem
        key={item.productid}
        id={item.productid}
        name={item.name}
        price={item.price}
        image={`/assets/${item.imageurl}/desktop/image-product.jpg`}
        quantity={item.quantity}
        deleteProduct={deleteProduct}
      />
    )
  })

  return cartItems;
}
