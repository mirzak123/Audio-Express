export default async function handler(req, res) {
  // Extract product information from the request body
  const { productId, quantity } = req.body;

  // Add the product to the cart in the database
  try {
    await sql`
      INSERT INTO cart (userId, productId, quantity)
      VALUES (1, ${productId}, ${quantity})
    `;
  } catch {
    console.error(`Error while adding product ${productId} to cart`);
    res.status(500).json({ error: 'Internal server error' });
  }

  res.status(200).json({ message: 'Product added to the cart successfully' });
}
