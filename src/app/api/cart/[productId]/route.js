import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function DELETE(request, context) {
  const { params } = context
  const { productId } = params

  try{
    await sql`DELETE FROM cart WHERE productId = ${productId}`
    return NextResponse.json({ success: true, message: `Deleted product with id: ${productId}` })
  } catch (e) {
    console.error(e);
  }
  return NextResponse.json({ success: false, message: `Unable to delete product with id: ${productId}` })
}
