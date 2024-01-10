import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request) {
  const data = await request.json();

  try{
    const productId = data.productId;
    const quantity = data.quantity;
    await sql`INSERT INTO cart (userId, productId, quantity) VALUES (1, ${productId}, ${quantity})`;
    return NextResponse.json(data)
  } catch (e) {
    console.error(e);
  }
}
