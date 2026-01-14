'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GoogleTranslateProvider() {
  const pathname = usePathname()

  const initTranslate = () => {
    if (typeof window.google !== 'undefined' && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'uk',
          includedLanguages: 'uk,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      )
    }
  }

  useEffect(() => {
    if (typeof window.google !== 'undefined' && window.google.translate) {
      initTranslate()
    } else {
      const interval = setInterval(() => {
        if (typeof window.google !== 'undefined' && window.google.translate) {
          clearInterval(interval)
          initTranslate()
        }
      }, 500)
    }
  }, [pathname])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}