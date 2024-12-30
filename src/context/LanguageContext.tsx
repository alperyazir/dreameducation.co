'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import enTranslations from '@/translations/en.json'
import trTranslations from '@/translations/tr.json'

type Language = 'en' | 'tr'
type NestedObject = { [key: string]: string | NestedObject }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, NestedObject> = {
  en: enTranslations as NestedObject,
  tr: trTranslations as NestedObject
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getTranslatedValue(obj: NestedObject, key: string): string {
  const parts = key.split('.')
  let value: string | NestedObject = obj

  for (const part of parts) {
    if (value && typeof value === 'object') {
      value = value[part]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string) => {
    const translation = translations[language]
    if (!translation) return key

    return getTranslatedValue(translation, key)
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