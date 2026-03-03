'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useMemo, useCallback } from 'react'
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

  const solutions = useMemo(() => [
    {
      name: t('solutions.curriculum.title'),
      description: t('solutions.curriculum.description'),
      type: 'curriculum'
    },
    {
      name: t('solutions.digital.title'),
      description: t('solutions.digital.description'),
      type: 'digital'
    },
    {
      name: t('solutions.planning.title'),
      description: t('solutions.planning.description'),
      type: 'planning'
    },
    {
      name: t('solutions.training.title'),
      description: t('solutions.training.description'),
      type: 'training'
    }
  ], [t])

  const getFeatures = useCallback((type: string) => {
    const features = []
    for (let i = 1; i <= 5; i++) {
      const val = t(`solutions.${type}.features.${i}`)
      if (val !== `solutions.${type}.features.${i}`) features.push(val)
    }
    return features
  }, [t])

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

          {/* Solutions Timeline */}
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
                              <circle cx="24" cy="24" r="20" fill="#F7D11E" fillOpacity="0.1" />
                              <path d="M8 8h32v32H8z" stroke="#570026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                              <path d="M14 16h20" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M14 24h20" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M14 32h12" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M38 4v8" stroke="#570026" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M10 4v8" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M38 36v8" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M10 36v8" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          )}
                          {solution.type === 'digital' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              <circle cx="24" cy="24" r="20" fill="#570026" fillOpacity="0.1" />
                              <rect x="8" y="8" width="32" height="24" rx="2" stroke="#570026" strokeWidth="2" fill="white"/>
                              <path d="M16 40h16" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M24 32v8" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 20h16" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 26h12" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <circle cx="36" cy="26" r="2" fill="#3FB5BF"/>
                              <circle cx="12" cy="12" r="1" fill="#F7D11E"/>
                              <circle cx="16" cy="12" r="1" fill="#F65843"/>
                              <circle cx="20" cy="12" r="1" fill="#3FB5BF"/>
                            </svg>
                          )}
                          {solution.type === 'planning' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              <circle cx="24" cy="24" r="20" fill="#F65843" fillOpacity="0.1" />
                              <path d="M6 12h36v28H6z" stroke="#570026" strokeWidth="2" strokeLinecap="round" fill="white"/>
                              <path d="M12 8h24" stroke="#F65843" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 18h16" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 26h12" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M16 34h8" stroke="#570026" strokeWidth="2" strokeLinecap="round"/>
                              <circle cx="36" cy="34" r="4" stroke="#F65843" strokeWidth="2" fill="#F7D11E" fillOpacity="0.3"/>
                            </svg>
                          )}
                          {solution.type === 'training' && (
                            <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                              <circle cx="24" cy="24" r="20" fill="#3FB5BF" fillOpacity="0.1" />
                              <circle cx="24" cy="16" r="8" stroke="#570026" strokeWidth="2" fill="white"/>
                              <path d="M12 35c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#F65843" strokeWidth="2" strokeLinecap="round" fill="none"/>
                              <path d="M20 28l4-4 4 4" stroke="#F7D11E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                              <path d="M24 24v16" stroke="#3FB5BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="16" cy="15" r="2" fill="#F7D11E"/>
                              <circle cx="32" cy="15" r="2" fill="#F65843"/>
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

          {/* Closing */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg leading-8 text-gray-700">
              {t('solutions.closing')}
            </p>
            <p className="mt-6 text-xl font-bold text-brand-purple">
              {t('solutions.closingFinal')}
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
