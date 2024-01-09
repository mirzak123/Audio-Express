export default async function handler(req, res) {
  // Fetch the users' cart information from the database
  try {
    const cart = await sql`SELECT * FROM cart WHERE userId = 1`;

    res.status(200).json(cart);
  } catch {
    console.error(`Error while getting cart for user 1`);
    res.status(500).json({ error: 'Internal server error' });
  }
}
