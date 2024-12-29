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
} as const

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string) => {
    const translation = translations[language] as Record<string, unknown>
    if (!translation) return key

    const value = getNestedValue(translation, key)
    return typeof value === 'string' ? value : key
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