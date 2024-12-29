'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type Language = 'en' | 'tr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.contact': 'Contact',
    'nav.edtech': 'Dream EdTech',
    'nav.edtech.description': 'Visit Dream EdTech',

    // Home Page
    'hero.title': 'Empowering Education Through Quality Resources',
    'hero.subtitle': 'We distribute premium foreign and Turkish educational materials to schools and teachers, helping create enriched learning environments.',
    'hero.explore': 'Explore Solutions',
    'hero.learnMore': 'Learn more',
    'publishers.title': 'Learn from {count} leading publishers with us',
    'features.whyChoose': 'Why Choose Us',
    'features.title': 'Everything you need for quality education',
    'features.subtitle': 'We provide comprehensive educational solutions that cater to diverse learning needs and teaching methods.',
    'features.curatedSelection': 'Curated Selection',
    'features.curatedSelectionDesc': 'Carefully selected educational materials from both Turkish and international publishers to ensure the highest quality resources.',
    'features.support': 'Comprehensive Support',
    'features.supportDesc': 'Expert guidance and support for schools and teachers in selecting and implementing educational materials.',
    'features.materials': 'Diverse Materials',
    'features.materialsDesc': 'Wide range of educational resources covering various subjects, learning levels, and teaching methodologies.',

    // About Page
    'about.title': 'Our Mission',
    'about.subtitle': 'We are dedicated to enriching educational experiences by providing high-quality learning materials to schools and teachers across Turkey.',
    'about.intro': 'At Dream Education, we understand that quality education requires quality resources. That\'s why we\'ve made it our mission to bridge the gap between international educational excellence and Turkish schools.',
    'about.feature1.title': 'Carefully Curated Materials',
    'about.feature1.desc': 'We partner with leading publishers worldwide to bring the best educational resources to Turkish schools.',
    'about.feature2.title': 'Expert Support',
    'about.feature2.desc': 'Our team of education specialists provides guidance in selecting and implementing materials effectively.',
    'about.feature3.title': 'Local Understanding',
    'about.feature3.desc': 'With deep roots in the Turkish education system, we understand the unique needs of our schools and teachers.',
    'about.vision': 'Our vision is to contribute to a future where every student in Turkey has access to world-class educational materials, fostering a generation of global citizens prepared for tomorrow\'s challenges.',

    // Solutions Page
    'solutions.title': 'Educational Solutions',
    'solutions.subtitle': 'Comprehensive educational solutions tailored to meet the unique needs of schools and institutions across Turkey.',
    'solutions.cta.title': 'Ready to transform your educational approach?',
    'solutions.cta.subtitle': 'Contact us to discuss how our solutions can enhance your institution\'s educational goals.',
    'solutions.cta.contact': 'Contact Us',
    'solutions.cta.learn': 'Learn More',
    'testimonials.title': 'Client Success Stories',
    'testimonials.subtitle': 'See how our solutions have helped educational institutions achieve their goals.',
    'solutions.edtech.subtitle': 'Eğitim teknolojileri platformumuz ile öğrenmeyi dönüştürüyoruz',
    'solutions.edtech.description': 'Dream Edtech, modern eğitim teknolojileri ile geleneksel öğrenme yöntemlerini birleştirerek, öğrencilere ve eğitimcilere benzersiz bir deneyim sunar.',
    'solutions.edtech.feature1.title': 'Yapay Zeka Destekli Öğrenme',
    'solutions.edtech.feature1.description': 'Öğrencilerin öğrenme hızına ve stiline göre uyarlanabilen akıllı içerik önerileri.',
    'solutions.edtech.feature2.title': 'Güvenli ve Ölçeklenebilir',
    'solutions.edtech.feature2.description': 'En yüksek güvenlik standartlarıyla uyumlu, her ölçekte kuruma uyarlanabilen altyapı.',
    'solutions.edtech.learnMore': 'Dream Edtech\'i keşfedin',

    // English translations
    'solutions.subtitle_en': 'We offer tailored solutions for your school\'s needs.',
    'solutions.title_en': 'Our Solutions',
    'solutions.edtech.subtitle_en': 'Transforming learning with our educational technology platform',
    'solutions.edtech.description_en': 'Dream Edtech combines modern educational technologies with traditional learning methods to provide a unique experience for students and educators.',
    'solutions.edtech.feature1.title_en': 'AI-Powered Learning',
    'solutions.edtech.feature1.description_en': 'Smart content recommendations that adapt to students\' learning pace and style.',
    'solutions.edtech.feature2.title_en': 'Secure and Scalable',
    'solutions.edtech.feature2.description_en': 'Infrastructure that complies with the highest security standards and can be adapted to institutions of any size.',
    'solutions.edtech.learnMore_en': 'Discover Dream Edtech',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d love to hear from you. Please fill out this form or contact us using the information below.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.organization': 'School/Organization',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.info.title': 'Our Contact Information',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.description': 'Empowering education through quality resources. We distribute premium educational materials to schools and teachers across Turkey.',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.solutions': 'Çözümler',
    'nav.contact': 'İletişim',
    'nav.edtech': 'Dream EdTech',
    'nav.edtech.description': 'Dream EdTech\'i Ziyaret Et',

    // Home Page
    'hero.title': 'Kaliteli Kaynaklarla Eğitimi Güçlendiriyoruz',
    'hero.subtitle': 'Okullara ve öğretmenlere premium yabancı ve Türkçe eğitim materyalleri sağlayarak zenginleştirilmiş öğrenme ortamları yaratıyoruz.',
    'hero.explore': 'Çözümleri Keşfet',
    'hero.learnMore': 'Daha Fazla Bilgi',
    'publishers.title': 'Learn from 350+ leading publishers with us',
    'features.whyChoose': 'Neden Biz?',
    'features.title': 'Kaliteli eğitim için ihtiyacınız olan her şey',
    'features.subtitle': 'Farklı öğrenme ihtiyaçlarına ve öğretim yöntemlerine uygun kapsamlı eğitim çözümleri sunuyoruz.',
    'features.curatedSelection': 'Özenle Seçilmiş Kaynaklar',
    'features.curatedSelectionDesc': 'En kaliteli kaynakları sağlamak için Türk ve uluslararası yayınevlerinden özenle seçilmiş eğitim materyalleri.',
    'features.support': 'Kapsamlı Destek',
    'features.supportDesc': 'Eğitim materyallerinin seçimi ve uygulanmasında okullara ve öğretmenlere uzman rehberliği ve destek.',
    'features.materials': 'Çeşitli Materyaller',
    'features.materialsDesc': 'Farklı konuları, öğrenme seviyelerini ve öğretim metodolojilerini kapsayan geniş eğitim kaynakları yelpazesi.',

    // About Page
    'about.title': 'Misyonumuz',
    'about.subtitle': 'Türkiye genelindeki okullara ve öğretmenlere yüksek kaliteli öğrenme materyalleri sağlayarak eğitim deneyimlerini zenginleştirmeye adanmış durumdayız.',
    'about.intro': 'Dream Education olarak, kaliteli eğitimin kaliteli kaynaklar gerektirdiğini biliyoruz. Bu nedenle misyonumuz, uluslararası eğitim mükemmelliği ile Türk okulları arasında köprü kurmaktır.',
    'about.feature1.title': 'Özenle Seçilmiş Materyaller',
    'about.feature1.desc': 'Türk okullarına en iyi eğitim kaynaklarını getirmek için dünya çapında önde gelen yayınevleriyle iş birliği yapıyoruz.',
    'about.feature2.title': 'Uzman Desteği',
    'about.feature2.desc': 'Eğitim uzmanlarımız, materyallerin seçimi ve etkili bir şekilde uygulanması konusunda rehberlik sağlıyor.',
    'about.feature3.title': 'Yerel Anlayış',
    'about.feature3.desc': 'Türk eğitim sistemindeki derin köklerimizle, okullarımızın ve öğretmenlerimizin özel ihtiyaçlarını anlıyoruz.',
    'about.vision': 'Vizyonumuz, Türkiye\'deki her öğrencinin dünya standartlarında eğitim materyallerine erişebildiği, yarının zorluklarına hazır küresel vatandaşlar yetiştiren bir geleceğe katkıda bulunmaktır.',

    // Solutions Page
    'solutions.title': 'Eğitim Çözümleri',
    'solutions.subtitle': 'Okulların ve kurumların özel ihtiyaçlarını karşılamak için özel olarak tasarlanmış kapsamlı eğitim çözümleri.',
    'solutions.cta.title': 'Eğitim yaklaşımınızı dönüştürmeye hazır mısınız?',
    'solutions.cta.subtitle': 'Çözümlerimizin kurumunuzun eğitim hedeflerini nasıl geliştirebileceğini görüşmek için bize ulaşın.',
    'solutions.cta.contact': 'İletişime Geçin',
    'solutions.cta.learn': 'Daha Fazla Bilgi',
    'testimonials.title': 'Başarı Hikayeleri',
    'testimonials.subtitle': 'Çözümlerimizin eğitim kurumlarının hedeflerine ulaşmasına nasıl yardımcı olduğunu görün.',
    'solutions.edtech.subtitle': 'Eğitim teknolojileri platformumuz ile öğrenmeyi dönüştürüyoruz',
    'solutions.edtech.description': 'Dream Edtech, modern eğitim teknolojileri ile geleneksel öğrenme yöntemlerini birleştirerek, öğrencilere ve eğitimcilere benzersiz bir deneyim sunar.',
    'solutions.edtech.feature1.title': 'Yapay Zeka Destekli Öğrenme',
    'solutions.edtech.feature1.description': 'Öğrencilerin öğrenme hızına ve stiline göre uyarlanabilen akıllı içerik önerileri.',
    'solutions.edtech.feature2.title': 'Güvenli ve Ölçeklenebilir',
    'solutions.edtech.feature2.description': 'En yüksek güvenlik standartlarıyla uyumlu, her ölçekte kuruma uyarlanabilen altyapı.',
    'solutions.edtech.learnMore': 'Dream Edtech\'i keşfedin',

    // Contact Page
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sizden haber almak isteriz. Lütfen bu formu doldurun veya aşağıdaki iletişim bilgilerini kullanın.',
    'contact.form.name': 'İsim',
    'contact.form.email': 'E-posta',
    'contact.form.phone': 'Telefon',
    'contact.form.organization': 'Okul/Kurum',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.info.title': 'İletişim Bilgilerimiz',
    'contact.info.address': 'Adres',
    'contact.info.email': 'E-posta',
    'contact.info.phone': 'Telefon',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.contact': 'İletişim',
    'footer.followUs': 'Bizi Takip Edin',
    'footer.description': 'Kaliteli kaynaklarla eğitimi güçlendiriyoruz. Türkiye genelindeki okullara ve öğretmenlere premium eğitim materyalleri sağlıyoruz.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string) => {
    return translations[language][key as keyof typeof translations.en] || key
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