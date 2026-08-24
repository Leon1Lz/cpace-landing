import { NextResponse } from "next/server"
import { articlesData } from "@/data/articles"

export async function GET() {
  return NextResponse.json(articlesData)
}
