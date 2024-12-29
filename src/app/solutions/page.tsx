'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const solutions = [
  {
    name: 'Curriculum Development',
    description: 'We work with schools to develop comprehensive curriculum solutions that align with national and international standards.',
  },
  {
    name: 'Teacher Training',
    description: 'Professional development programs to help teachers maximize the effectiveness of our educational materials.',
  },
  {
    name: 'Resource Planning',
    description: 'Strategic planning assistance to help schools optimize their educational resource investments.',
  },
  {
    name: 'Digital Integration',
    description: 'Support in implementing digital learning tools and platforms in your school environment.',
  },
]

const testimonials = [
  {
    body: 'Dream Education has transformed our English language program with their comprehensive materials and excellent support.',
    author: 'Maria Yılmaz',
    title: 'English Department Head',
    school: 'Istanbul International School',
  },
  {
    body: 'The quality of their materials and the level of support we receive has made them an invaluable partner in our educational journey.',
    author: 'Ahmet Kaya',
    title: 'School Principal',
    school: 'Ankara Private School',
  },
]

export default function Solutions() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-brand-purple sm:text-4xl">
              {t('solutions.title')}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {t('solutions.subtitle')}
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {solutions.map((solution) => (
                <div key={solution.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-brand-purple">
                    {solution.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{solution.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Client Success Stories */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-brand-purple sm:text-4xl">
                {t('testimonials.title')}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {t('testimonials.subtitle')}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{`${testimonial.title} - ${testimonial.school}`}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          
          {/* Dream Edtech Section */}
          <div className="relative isolate mt-16">
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-purple/5 to-white" />
              
              {/* Grid pattern */}
              <svg
                className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-brand-purple/10 [mask-image:radial-gradient(64rem_24rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="edtech-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="-1"
                  >
                    <path d="M.5 40V.5H40" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#edtech-grid)" />
              </svg>
            </div>

            <div className="mx-auto max-w-7xl py-24">
              <div className="relative isolate overflow-hidden">
                <div className="mx-auto px-6 lg:px-8">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                      <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                          <div className="flex items-center gap-x-6">
                            <Image
                              src="/dreamedtech.svg"
                              alt="Dream Edtech"
                              width={80}
                              height={80}
                              className="rounded-lg"
                            />
                            <h2 className="text-3xl font-bold tracking-tight text-brand-purple sm:text-4xl">Dream Edtech</h2>
                          </div>
                          <p className="mt-6 text-xl leading-8 text-gray-700">
                            {t('solutions.edtech.subtitle')}
                          </p>
                          <p className="mt-6 text-base leading-7 text-gray-600">
                            {t('solutions.edtech.description')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                      <div className="relative aspect-[3/2] w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
                        {/* Technology Illustration */}
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" fill="none">
                          {/* Abstract Tech Pattern */}
                          <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40V0H40" fill="none" stroke="#3FB5BF" strokeOpacity="0.1" />
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#tech-grid)" />
                          
                          {/* Animated Elements */}
                          <g className="animate-pulse">
                            <circle cx="200" cy="300" r="60" fill="#570026" fillOpacity="0.1" />
                            <circle cx="600" cy="200" r="80" fill="#3FB5BF" fillOpacity="0.1" />
                            <circle cx="400" cy="400" r="100" fill="#F7D11E" fillOpacity="0.1" />
                          </g>
                          
                          {/* Connected Lines */}
                          <path d="M200,300 L400,400 L600,200" stroke="#F65843" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Tech Icons */}
                          <g transform="translate(350,250)">
                            {/* Laptop Shape */}
                            <path d="M-40,-30 h80 v60 h-80 z" fill="#570026" />
                            <path d="M-50,30 h100 v10 h-100 z" fill="#3FB5BF" />
                            
                            {/* Screen Content */}
                            <rect x="-35" y="-25" width="70" height="50" fill="#FFFFFF" />
                            <path d="M-25,-15 h50 M-25,0 h30 M-25,15 h40" stroke="#570026" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                      <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                          <ul role="list" className="mt-8 space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                              <svg className="mt-1 h-5 w-5 flex-none text-brand-purple" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                              </svg>
                              <span><strong className="font-semibold text-gray-900">{t('solutions.edtech.feature1.title')}</strong> {t('solutions.edtech.feature1.description')}</span>
                            </li>
                            <li className="flex gap-x-3">
                              <svg className="mt-1 h-5 w-5 flex-none text-brand-purple" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                              </svg>
                              <span><strong className="font-semibold text-gray-900">{t('solutions.edtech.feature2.title')}</strong> {t('solutions.edtech.feature2.description')}</span>
                            </li>
                          </ul>
                          <div className="mt-8">
                            <a
                              href="https://dreamedtech.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-semibold leading-7 text-brand-purple hover:text-brand-purple/90"
                            >
                              {t('solutions.edtech.learnMore')} <span aria-hidden="true">→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section with new background */}
          <div className="relative isolate mt-40 sm:mt-48">
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F7D11E]/30 via-[#F7D11E]/40 to-[#F7D11E]/20" />
              
              {/* Grid pattern */}
              <svg
                className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-[#F7D11E]/40 [mask-image:radial-gradient(64rem_24rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="-1"
                  >
                    <path d="M.5 40V.5H40" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
                
                {/* Animated circles */}
                <circle cx="25%" cy="50%" r="80" fill="url(#gradient1)" fillOpacity="0.4">
                  <animate
                    attributeName="r"
                    values="70;90;70"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="75%" cy="30%" r="60" fill="url(#gradient2)" fillOpacity="0.4">
                  <animate
                    attributeName="r"
                    values="50;70;50"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Gradients */}
                <defs>
                  <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F7D11E" />
                    <stop offset="100%" stopColor="#F65843" />
                  </radialGradient>
                  <radialGradient id="gradient2" cx="1" cy="1" r="1" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F7D11E" />
                    <stop offset="100%" stopColor="#F65843" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <motion.div
                className="mx-auto max-w-2xl text-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Eğitim Yolculuğunuza Başlayın
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
                  Okulunuzun ihtiyaçlarına özel çözümlerimizi keşfetmek için bizimle iletişime geçin.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-gray-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  >
                    İletişime Geçin
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 