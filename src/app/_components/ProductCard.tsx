'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type ProductCardProps = {
  image: string
  hoverImage: string
  slug: string
  alt?: string
}

export default function ProductCard({ image, hoverImage, slug, alt = '' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/produtos/${slug}`}>
      <div
        className="transition-transform duration-300 ease-in-out transform hover:scale-110
        w-full h-full relative cursor-pointer overflow-hidden shadow-md aspect-[4/5]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? hoverImage : image}
          alt={alt}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
        />
      </div>
    </Link>
  )
}
