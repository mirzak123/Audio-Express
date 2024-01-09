const { sql } = require('@vercel/postgres');

export default async function handler (req, res) {
  const { category } = req.query;

  // Fetch products from the database based on the category
  try {
    const products = await sql`SELECT * FROM products WHERE category = ${category}`;

    res.status(200).json(products);
  } catch(error) {
    console.error(`Error while getting products `, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
