'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import enTranslations from '@/translations/en.json'
import trTranslations from '@/translations/tr.json'

type Language = 'en' | 'tr'
type TranslationValue = string | Record<string, unknown>
type Translations = Record<string, TranslationValue>

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
    const translation = translations[language] as Translations
    if (!translation) return key

    const value = key.split('.').reduce((obj, k) => {
      if (typeof obj === 'object' && obj !== null) {
        return (obj as Record<string, unknown>)[k]
      }
      return undefined
    }, translation as Record<string, unknown>)

    if (typeof value !== 'string') return key
    return value
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 