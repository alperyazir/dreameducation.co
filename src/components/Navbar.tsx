'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, GlobeAltIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'

const navigation = [
  { name: 'nav.home', href: '/' },
  { name: 'nav.about', href: '/about' },
  { name: 'nav.solutions', href: '/solutions' },
  { name: 'nav.contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/dream-education-logo.svg"
              alt="Dream Education Logo"
              width={240}
              height={60}
              className="h-16 w-auto"
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-brand-purple hover:text-brand-orange transition-colors"
            >
              {t(item.name)}
            </Link>
          ))}
          <a
            href="https://dreamedtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-1.5 px-4 py-2 text-base font-semibold text-brand-blue hover:text-white bg-brand-blue/10 hover:bg-brand-blue border border-brand-blue/20 rounded-full transition-all duration-300"
            title={t('nav.edtech.description')}
          >
            {t('nav.edtech')}
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-x-1.5 text-base font-semibold leading-6 text-brand-purple hover:text-brand-orange transition-colors"
          >
            <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
            {language.toUpperCase()}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`${mobileMenuOpen ? 'fixed' : 'hidden'} inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/dream-education-logo.svg"
              alt="Dream Education Logo"
              width={200}
              height={50}
              className="h-14 w-auto"
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-purple hover:text-brand-orange hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <a
                href="https://dreamedtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 block rounded-lg px-4 py-2 text-base font-semibold text-brand-blue hover:text-white bg-brand-blue/10 hover:bg-brand-blue border border-brand-blue/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-x-1.5">
                  {t('nav.edtech')}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
              <button
                onClick={toggleLanguage}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-purple hover:text-brand-orange hover:bg-gray-50 w-full text-left"
              >
                <span className="inline-flex items-center gap-x-1.5">
                  <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
                  {language.toUpperCase()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
} 