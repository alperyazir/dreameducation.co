'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import enTranslations from '@/translations/en.json'
import trTranslations from '@/translations/tr.json'

type Language = 'en' | 'tr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: enTranslations,
  tr: trTranslations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string) => {
    const translation = translations[language]
    if (!translation) return key

    const value = key.split('.').reduce((obj, k) => obj?.[k], translation as any)
    if (value === undefined) return key

    return value as string
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 