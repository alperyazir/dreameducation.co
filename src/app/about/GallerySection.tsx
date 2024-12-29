'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function GallerySection() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState<string[]>([])

  useEffect(() => {
    // Fetch gallery images when component mounts
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.images) {
          setGalleryImages(data.images)
        }
      })
      .catch(error => console.error('Failed to fetch gallery images:', error))
  }, [])

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  if (galleryImages.length === 0) {
    return null
  }

  return (
    <div className="relative isolate bg-gradient-to-b from-white via-brand-purple/10 to-white py-24 sm:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-brand-purple/20 [mask-image:radial-gradient(64rem_24rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="gallery-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="-1"
            >
              <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-purple sm:text-4xl">
            {t('about.gallery.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('about.gallery.description')}
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <Image
              src={`/images/gallery/${galleryImages[currentImageIndex]}`}
              alt="Gallery photo"
              fill
              priority
              className="object-contain"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <svg className="h-5 w-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <svg className="h-5 w-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 