import { NextResponse } from 'next/server'
import  { sql } from '@vercel/postgres'

export async function GET() {
  const { rows } = await
    sql`SELECT products.productId, products.name, cart.quantity, products.price, products.imageUrl
        FROM cart
        JOIN products ON cart.productId = products.productId`

  return NextResponse.json(rows)
}

export async function POST(request) {
  const data = await request.json();

  try{
    const productId = data.productId;
    const quantity = data.quantity;
    await sql`INSERT INTO cart (userId, productId, quantity)
      VALUES (1, ${productId}, ${quantity})
      ON CONFLICT (userId, productId) DO UPDATE
      SET quantity = cart.quantity + EXCLUDED.quantity`
    return NextResponse.json(data)
  } catch (e) {
    console.error(e);
  }
}
