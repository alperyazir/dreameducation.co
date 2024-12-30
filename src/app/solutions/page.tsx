'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}


export default function Solutions() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  const solutions = useMemo(() => [
    {
      name: t('solutions.curriculum.title'),
      description: t('solutions.curriculum.description'),
      type: 'curriculum'
    },
    {
      name: t('solutions.training.title'),
      description: t('solutions.training.description'),
      type: 'training'
    },
    {
      name: t('solutions.planning.title'),
      description: t('solutions.planning.description'),
      type: 'planning'
    },
    {
      name: t('solutions.digital.title'),
      description: t('solutions.digital.description'),
      type: 'digital'
    }
  ], [t])

  const getFeatures = useCallback((type: string) => {
    return [
      t(`solutions.${type}.features.1`),
      t(`solutions.${type}.features.2`),
      t(`solutions.${type}.features.3`),
      t(`solutions.${type}.features.4`),
      t(`solutions.${type}.features.5`)
    ]
  }, [t])

  const testimonials = useMemo(() => [
    {
      body: t('testimonials.1.body'),
      author: t('testimonials.1.author'),
      title: t('testimonials.1.title'),
      school: t('testimonials.1.school'),
    },
    {
      body: t('testimonials.2.body'),
      author: t('testimonials.2.author'),
      title: t('testimonials.2.title'),
      school: t('testimonials.2.school'),
    },
  ], [t])

  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials], [testimonials])

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
              {t('solutions.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('solutions.subtitle')}
            </p>
          </motion.div>
          
          {/* Dream Edtech Section */}
          <div className="relative isolate mt-16 px-8 py-16 bg-gradient-to-b from-white via-brand-purple/10 to-white">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-brand-purple/20 [mask-image:radial-gradient(64rem_24rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="solutions-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="-1"
                  >
                    <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#solutions-grid)" />
              </svg>
            </div>

            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-purple/20" />
                
                {solutions.map((solution) => (
                  <div 
                    key={solution.name}
                    className="relative pl-16 mb-16 last:mb-0"
                  >
                    {/* Connector line */}
                    <div className="absolute left-8 top-8 w-8 h-0.5 bg-brand-purple/20" />
                    
                    {/* Circle node */}
                    <div className="absolute left-[29px] top-6 w-4 h-4 rounded-full bg-brand-purple" />
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-6">
                        {/* Solution Icon */}
                        <div className="flex-shrink-0 hidden md:block">
                          {solution.type === 'curriculum' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              {/* Background Circle */}
                              <circle cx="24" cy="24" r="20" fill="#F7D11E" fillOpacity="0.1" />
                              {/* Main Document */}
                              <path d="M8 8h32v32H8z" stroke="#570026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                              {/* Lines */}
                              <path d="M14 16h20" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M14 24h20" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M14 32h12" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              {/* Corner Accents */}
                              <path d="M38 4v8" stroke="#570026" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M10 4v8" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M38 36v8" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M10 36v8" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          )}
                          {solution.type === 'training' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              {/* Background Circle */}
                              <circle cx="24" cy="24" r="20" fill="#3FB5BF" fillOpacity="0.1" />
                              {/* Head */}
                              <circle cx="24" cy="16" r="8" stroke="#570026" strokeWidth="2" fill="white"/>
                              {/* Body */}
                              <path d="M12 35c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#F65843" strokeWidth="2" strokeLinecap="round" fill="none"/>
                              {/* Growth Arrow */}
                              <path d="M20 28l4-4 4 4" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                              <path d="M24 24v16" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              {/* Decorative Elements */}
                              <circle cx="16" cy="15" r="2" fill="#F7D11E"/>
                              <circle cx="32" cy="15" r="2" fill="#F65843"/>
                            </svg>
                          )}
                          {solution.type === 'planning' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              {/* Background Circle */}
                              <circle cx="24" cy="24" r="20" fill="#F65843" fillOpacity="0.1" />
                              {/* Main Container */}
                              <path d="M6 12h36v28H6z" stroke="#570026" strokeWidth="2" strokeLinecap="round" fill="white"/>
                              {/* Top Bar */}
                              <path d="M12 8h24" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              {/* Content Lines */}
                              <path d="M16 18h16" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 26h12" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 34h8" stroke="#570026" strokeWidth="2" strokeLinecap="round"/>
                              {/* Progress Circle */}
                              <circle cx="36" cy="34" r="4" stroke="#F65843" strokeWidth="2" fill="#F7D11E" fillOpacity="0.3"/>
                            </svg>
                          )}
                          {solution.type === 'digital' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              {/* Background Circle */}
                              <circle cx="24" cy="24" r="20" fill="#570026" fillOpacity="0.1" />
                              {/* Screen */}
                              <rect x="8" y="8" width="32" height="24" rx="2" stroke="#570026" strokeWidth="2" fill="white"/>
                              {/* Stand */}
                              <path d="M16 40h16" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M24 32v8" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              {/* Screen Content */}
                              <path d="M16 20h16" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 26h12" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              {/* Interactive Element */}
                              <circle cx="36" cy="26" r="2" fill="#3FB5BF"/>
                              {/* Decorative Elements */}
                              <circle cx="12" cy="12" r="1" fill="#F7D11E"/>
                              <circle cx="16" cy="12" r="1" fill="#F65843"/>
                              <circle cx="20" cy="12" r="1" fill="#3FB5BF"/>
                            </svg>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-brand-purple">
                            {solution.name}
                          </h3>
                          <p className="mt-2 text-gray-600">
                            {solution.description}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {getFeatures(solution.type).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          
          {/* Client Success Stories Section */}
          <div className="relative isolate mt-32 px-8 py-16">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-blue/10 to-white" />
              <svg
                className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-brand-blue/20 [mask-image:radial-gradient(64rem_24rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="testimonials-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="-1"
                  >
                    <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#testimonials-grid)" />
              </svg>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                {t('testimonials.title')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('testimonials.subtitle')}
              </p>
            </div>

            {isClient && (
              <div className="relative mt-16 overflow-hidden">
                <div className="flex animate-marquee space-x-8">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-none w-[350px] bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-900/5 relative"
                    >
                      <svg
                        className="absolute top-4 right-4 h-6 w-6 text-brand-orange z-10"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-4 text-gray-600">{testimonial.body}</p>
                      <div className="mt-6">
                        <p className="font-semibold text-brand-blue">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                        <p className="text-sm text-gray-600">{testimonial.school}</p>
                      </div>
                    </div>
              ))}
            </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 