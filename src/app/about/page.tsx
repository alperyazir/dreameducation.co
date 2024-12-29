'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import GallerySection from './GallerySection'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Pre-calculate degree markers to avoid hydration mismatch
const degreeMarkers = Array.from({ length: 72 }, (_, i) => {
  const angle = (i * 5) * Math.PI / 180
  const length = i % 2 === 0 ? 10 : 5
  const x1 = Math.sin(angle) * 90
  const y1 = -Math.cos(angle) * 90
  const x2 = Math.sin(angle) * (90 - length)
  const y2 = -Math.cos(angle) * (90 - length)
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`
}).join('')

export default function About() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">
              {t('about.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <motion.div 
              className="lg:pr-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-base leading-7 text-gray-600">
                {t('about.intro')}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('about.vision')}
              </p>
            </motion.div>

            {/* Mission Illustration */}
            <motion.div 
              className="relative -mt-8 lg:-mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-blue/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  {isClient && (
                    <svg className="h-full w-full" viewBox="0 0 400 300" fill="none">
                      {/* Background Circle */}
                      <circle cx="200" cy="150" r="120" fill="white" filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" />
                      
                      {/* Compass Rose */}
                      <g transform="translate(200 150)">
                        {/* Main Directions */}
                        <path d="M0,-100 L15,-30 L-15,-30 Z" fill="#3FB5BF" />
                        <path d="M0,100 L-15,30 L15,30 Z" fill="#570026" />
                        <path d="M100,0 L30,-15 L30,15 Z" fill="#F65843" />
                        <path d="M-100,0 L-30,15 L-30,-15 Z" fill="#F7D11E" />
                        
                        {/* Inner Circle */}
                        <circle r="25" fill="white" stroke="#570026" strokeWidth="2" />
                        <circle r="23" fill="none" stroke="#3FB5BF" strokeWidth="1" strokeDasharray="4 4" />
                        
                        {/* Direction Labels */}
                        <text x="0" y="-80" textAnchor="middle" fill="#3FB5BF" fontSize="16" fontWeight="bold">N</text>
                        <text x="0" y="85" textAnchor="middle" fill="#570026" fontSize="16" fontWeight="bold">S</text>
                        <text x="85" y="0" textAnchor="middle" fill="#F65843" fontSize="16" fontWeight="bold" dominantBaseline="middle">E</text>
                        <text x="-85" y="0" textAnchor="middle" fill="#F7D11E" fontSize="16" fontWeight="bold" dominantBaseline="middle">W</text>
                        
                        {/* Degree Markers */}
                        <g stroke="#570026" strokeWidth="1" dangerouslySetInnerHTML={{ __html: degreeMarkers }} />
                      </g>
                      
                      {/* Mission Text */}
                      <path id="missionArc" d="M50,50 A150,150 0 0,1 350,50" fill="none" />
                      <text fontSize="24" fontWeight="bold" fill="#570026">
                        <textPath href="#missionArc" startOffset="50%">
                          MISSION
                        </textPath>
                      </text>
                      
                      {/* Decorative Elements */}
                      <circle cx="200" cy="150" r="140" fill="none" stroke="#3FB5BF" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="200" cy="150" r="145" fill="none" stroke="#F7D11E" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Animated Arrow */}
                      <g transform="translate(200 150)">
                        <path d="M-5,-20 L0,-90 L5,-20 L0,-25 Z" fill="#570026">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0"
                            to="360"
                            dur="30s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {['feature1', 'feature2', 'feature3'].map((feature) => (
                <motion.div 
                  key={feature} 
                  className="flex flex-col"
                  variants={fadeInUp}
                >
                  <dt className="text-lg font-semibold leading-7 text-brand-purple">
                    {t(`about.${feature}.title`)}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{t(`about.${feature}.desc`)}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <GallerySection />

      <Footer />
    </main>
  )
} 