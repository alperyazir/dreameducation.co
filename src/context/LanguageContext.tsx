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

function getNestedValue(obj: Record<string, unknown>, path: string[]): unknown {
  let current = obj
  for (const key of path) {
    if (current && typeof current === 'object') {
      current = (current as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return current
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string) => {
    const translation = translations[language] as Record<string, unknown>
    if (!translation) return key

    const value = getNestedValue(translation, key.split('.'))
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