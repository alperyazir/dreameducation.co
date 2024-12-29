'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function About() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.brand.blue.100),white)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <motion.div 
              className="lg:pr-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl font-bold tracking-tight text-brand-purple sm:text-6xl">
                {t('about.title')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('about.subtitle')}
              </p>
              <p className="mt-8 text-base leading-7 text-gray-600">
                {t('about.intro')}
              </p>
              <p className="mt-8 text-base leading-7 text-gray-600">
                {t('about.vision')}
              </p>
            </motion.div>

            {/* Mission Illustration */}
            <motion.div 
              className="relative lg:mt-0"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-blue/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-full w-full" viewBox="0 0 400 300" fill="none">
                    {/* Background Circle */}
                    <circle cx="200" cy="150" r="120" fill="white" filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" />
                    
                    {/* Compass Rose */}
                    <g transform="translate(200 150)">
                      {/* Main Directions */}
                      <path d="M0,-100 L15,-30 L-15,-30 Z" fill="#3FB5BF" /> {/* North */}
                      <path d="M0,100 L-15,30 L15,30 Z" fill="#570026" /> {/* South */}
                      <path d="M100,0 L30,-15 L30,15 Z" fill="#F65843" /> {/* East */}
                      <path d="M-100,0 L-30,15 L-30,-15 Z" fill="#F7D11E" /> {/* West */}
                      
                      {/* Inner Circle */}
                      <circle r="25" fill="white" stroke="#570026" strokeWidth="2" />
                      <circle r="23" fill="none" stroke="#3FB5BF" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Direction Labels */}
                      <text x="0" y="-80" textAnchor="middle" fill="#3FB5BF" fontSize="16" fontWeight="bold">N</text>
                      <text x="0" y="85" textAnchor="middle" fill="#570026" fontSize="16" fontWeight="bold">S</text>
                      <text x="85" y="0" textAnchor="middle" fill="#F65843" fontSize="16" fontWeight="bold" dominantBaseline="middle">E</text>
                      <text x="-85" y="0" textAnchor="middle" fill="#F7D11E" fontSize="16" fontWeight="bold" dominantBaseline="middle">W</text>
                      
                      {/* Degree Markers */}
                      <g stroke="#570026" strokeWidth="1">
                        {Array.from({length: 72}, (_, i) => {
                          const angle = (i * 5) * Math.PI / 180;
                          const length = i % 2 === 0 ? 10 : 5;
                          return `
                            <line
                              x1="${Math.sin(angle) * 90}"
                              y1="${-Math.cos(angle) * 90}"
                              x2="${Math.sin(angle) * (90 - length)}"
                              y2="${-Math.cos(angle) * (90 - length)}"
                            />
                          `
                        }).join('')}
                      </g>
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
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-brand-purple">
                  {t('about.feature1.title')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('about.feature1.desc')}</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-brand-purple">
                  {t('about.feature2.title')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('about.feature2.desc')}</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-brand-purple">
                  {t('about.feature3.title')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('about.feature3.desc')}</p>
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 