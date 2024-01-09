import { NextResponse } from 'next/server'
import  { sql } from '@vercel/postgres'

export async function GET(request, context) {
  const { params } = context
  const { productId } = params

  const { rows } = await sql`SELECT * FROM products WHERE productId = ${productId}`

  return NextResponse.json(rows[0])
}
