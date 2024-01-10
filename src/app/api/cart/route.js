import { NextResponse } from 'next/server'
import  { sql } from '@vercel/postgres'

export async function GET() {
  const { rows } = await sql`SELECT (productId, quantity) FROM cart`


  return NextResponse.json(rows)
}
