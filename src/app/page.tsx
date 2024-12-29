'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { publisherLogos, getRoundedPublisherCount } from '@/utils/getPublisherLogos'

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export default function Home() {
  const { t } = useLanguage()
  const publisherCount = getRoundedPublisherCount()
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[75vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-blue/10 to-white" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-brand-blue/10 ring-1 ring-brand-blue/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(63,181,191,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(246,88,67,0.2),transparent_60%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-1/4 top-1/3 h-20 w-20 rounded-full bg-brand-yellow/30 animate-float-slow" />
          <div className="absolute right-1/6 bottom-1/3 h-32 w-32 rounded-full bg-brand-orange/30 animate-float-medium" />
          <div className="absolute right-1/3 top-1/2 h-24 w-24 rounded-full bg-brand-blue/30 animate-float-fast" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-2 sm:pt-40 lg:pt-48">
          <div className="text-left max-w-3xl relative">
            <h1 className="text-4xl font-bold tracking-tight text-brand-purple sm:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-gray-900 max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Decorative bottom pattern */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Publishers Section */}
      <section className="relative bg-[#ecf6f8] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p 
            className="text-center text-lg font-medium text-gray-900 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            {t('publishers.title').replace('{count}', publisherLogos.length.toString())}
          </motion.p>
          
          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Overlays */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    #ecf6f8 0%,
                    rgba(236, 246, 248, 0.9) 10%,
                    rgba(236, 246, 248, 0) 20%,
                    rgba(236, 246, 248, 0) 80%,
                    rgba(236, 246, 248, 0.9) 90%,
                    #ecf6f8 100%
                  )
                `
              }}
            />
            
            <motion.div 
              className="relative w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.8 }
                }
              }}
            >
              <div className="flex animate-infinite-scroll">
                {[...publisherLogos, ...publisherLogos, ...publisherLogos].map((logo, index) => (
                  <div 
                    key={index} 
                    className="mx-12 flex w-[200px] items-center justify-center flex-none"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className="h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative pb-0 pt-24 sm:pt-32">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-blue/5 to-[#ecf6f8]" />
          
          {/* Grid lines */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(87, 0, 38, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(87, 0, 38, 0.07) 1px, transparent 1px),
                linear-gradient(to right, rgba(87, 0, 38, 0.05) 0.5px, transparent 0.5px),
                linear-gradient(to bottom, rgba(87, 0, 38, 0.05) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '4rem 4rem, 4rem 4rem, 1rem 1rem, 1rem 1rem',
              transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(100px)',
              transformOrigin: 'center top',
              maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 100%)'
            }}
          />

          {/* Radial fade overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, 
                  transparent 20%, 
                  rgba(255,255,255,0.8) 70%, 
                  white 100%
                )
              `
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-semibold leading-7 text-brand-orange mb-4">
              {t('features.whyChoose')}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">
              {t('features.title')}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div 
                className="flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-brand-orange/10">
                  <Image
                    src="/features/curated-selection.svg"
                    alt="Curated Selection"
                    width={160}
                    height={160}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-brand-purple">
                  {t('features.curatedSelection')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('features.curatedSelectionDesc')}</p>
                </dd>
              </motion.div>

              <motion.div 
                className="flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-brand-blue/10">
                  <Image
                    src="/features/comprehensive-support.svg"
                    alt="Comprehensive Support"
                    width={160}
                    height={160}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-brand-purple">
                  {t('features.support')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('features.supportDesc')}</p>
                </dd>
              </motion.div>

              <motion.div 
                className="flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-brand-yellow/10">
          <Image
                    src="/features/diverse-materials.svg"
                    alt="Diverse Materials"
                    width={160}
                    height={160}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-brand-purple">
                  {t('features.materials')}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{t('features.materialsDesc')}</p>
                </dd>
              </motion.div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ecf6f8] border-t border-brand-purple/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-base font-semibold text-brand-purple mb-4">
                Dream Education
              </h3>
              <p className="text-sm text-gray-600 leading-6">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-semibold text-brand-purple mb-4">
                {t('footer.contact')}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-purple shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Maslak, Büyükdere Cad. No:123<br/>Sarıyer/İstanbul</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-purple shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@dreameducation.co</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-purple shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+90 (212) 123 45 67</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base font-semibold text-brand-purple mb-4">
                {t('footer.followUs')}
              </h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/dreameducationtr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-purple transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dreameducationtr/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-purple transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Dream Education. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
const features = [
  {
    name: 'Curated Selection',
    description: 'Carefully selected educational materials from both Turkish and international publishers to ensure the highest quality resources.',
  },
  {
    name: 'Comprehensive Support',
    description: 'Expert guidance and support for schools and teachers in selecting and implementing educational materials.',
  },
  {
    name: 'Diverse Materials',
    description: 'Wide range of educational resources covering various subjects, learning levels, and teaching methodologies.',
  },
]

