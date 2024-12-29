'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'

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
    // Handle form submission here
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
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-brand-purple">{t('contact.title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('contact.subtitle')}
          </p>
          
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form onSubmit={handleSubmit} className="lg:flex-1">
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
                  className="block w-full rounded-md bg-brand-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange transition-colors duration-300"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
            
            <div className="lg:flex-1">
              <h3 className="text-lg font-semibold leading-7 text-brand-purple">{t('contact.info.title')}</h3>
              <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.address')}</dt>
                  <dd>123 Education Street<br />Istanbul, Turkey 34000</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.email')}</dt>
                  <dd>
                    <a href="mailto:info@dreameducation.co" className="text-brand-orange hover:text-brand-blue transition-colors">
                      info@dreameducation.co
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">{t('contact.info.phone')}</dt>
                  <dd>
                    <a href="tel:+90-212-555-0123" className="text-brand-orange hover:text-brand-blue transition-colors">
                      +90 212 555 0123
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}