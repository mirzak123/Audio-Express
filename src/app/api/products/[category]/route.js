import { NextResponse } from 'next/server'
import  { sql } from '@vercel/postgres'

export async function GET(request, context) {
  const { params } = context
  const { category } = params

  const { rows } = await sql`SELECT * FROM products WHERE category = ${category}`

  return NextResponse.json(rows)
}
