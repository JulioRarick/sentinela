import { NextResponse } from 'next/server'

import data from './sentinela-data.json'

export async function GET() {
  return NextResponse.json(data.data.records)
}
