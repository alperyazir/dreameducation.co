import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery')
    const files = fs.readdirSync(galleryPath)
    
    // Filter for image files only
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    )

    return NextResponse.json({ images: imageFiles })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read gallery images' }, { status: 500 })
  }
} 