'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
              {t('contact.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('contact.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="lg:flex-1"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    {t('contact.form.name')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    {t('contact.form.email')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    {t('contact.form.phone')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-gray-900">
                    {t('contact.form.organization')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    {t('contact.form.message')}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-brand-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </motion.form>

            <motion.div 
              className="lg:flex-1"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold leading-7 text-brand-purple">{t('contact.info.title')}</h3>
              <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.address')}</dt>
                  <dd>{t('company.address')}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.email')}</dt>
                  <dd>
                    <a href={`mailto:${t('company.email')}`} className="text-brand-orange hover:text-brand-blue transition-colors">
                      {t('company.email')}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.phone')}</dt>
                  <dd>
                    <a href={`tel:${t('company.phone')}`} className="text-brand-orange hover:text-brand-blue transition-colors">
                      {t('company.phone')}
                    </a>
                  </dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}