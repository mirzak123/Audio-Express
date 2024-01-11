import { NextResponse } from 'next/server'
import  { sql } from '@vercel/postgres'

export async function POST(request) {
  const data = await request.json();

  try{
    const { userId, totalAmount, products } = data;

    // create a new order and get the orderId
    const { rows } = await sql`WITH new_order AS (
      INSERT INTO orders (userId, totalAmount, status)
      VALUES (${userId}, ${totalAmount}, 'Pending')
      RETURNING orderId
      )

      SELECT orderId FROM new_order;`

    const orderId = rows[0].orderid;

    // create new order items
    for (let product of products) {
      await sql`INSERT INTO order_items (orderId, productId, quantity, price)
      VALUES (${orderId}, ${product.productid}, ${product.quantity}, ${product.price});`
    }
    return NextResponse.json(data)
  } catch (e) {
    console.error(e);
    return new Response(e, { success: false })
  }
}
