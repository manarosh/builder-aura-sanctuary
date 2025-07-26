import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.companies': 'Companies',
    'header.categories': 'Categories',
    'header.forBusiness': 'For Business',
    'header.about': 'About',
    'header.signIn': 'Sign In',
    'header.signUp': 'Sign Up',
    
    // Homepage
    'home.hero.title': 'Find the Best',
    'home.hero.subtitle': 'Service Providers',
    'home.hero.description': 'Read authentic reviews from real customers and discover trusted businesses in your area. Make informed decisions with our AI-powered insights.',
    'home.hero.searchPlaceholder': 'Search for businesses, services, or professionals...',
    'home.hero.locationPlaceholder': 'Location (city, address, zip code)',
    'home.hero.searchButton': 'Search',
    
    // Stats
    'home.stats.businesses': 'Businesses Listed',
    'home.stats.reviews': 'Customer Reviews',
    'home.stats.rating': 'Average Rating',
    'home.stats.verified': 'Verified Reviews',
    
    // Categories
    'home.categories.title': 'Popular',
    'home.categories.subtitle': 'Categories',
    'home.categories.description': 'Explore top-rated services in your area',
    'home.categories.viewAll': 'View All Categories',
    
    // Top Companies
    'home.topCompanies.title': 'Top Rated',
    'home.topCompanies.subtitle': 'Businesses',
    'home.topCompanies.description': 'Discover excellence in service quality',
    'home.topCompanies.viewAll': 'View All',
    'home.topCompanies.viewProfile': 'View Profile',
    
    // Reviews
    'home.reviews.title': 'Latest',
    'home.reviews.subtitle': 'Reviews',
    'home.reviews.description': 'See what customers are saying',
    
    // CTA
    'home.cta.title': 'Are you a business owner?',
    'home.cta.description': 'Join thousands of businesses that trust ReviewHub to connect with customers and build their reputation.',
    'home.cta.listBusiness': 'List Your Business',
    'home.cta.businessLogin': 'Business Login',
    
    // Footer
    'footer.description': 'The most trusted platform for finding and reviewing local businesses.',
    'footer.customers': 'For Customers',
    'footer.business': 'For Business',
    'footer.support': 'Support',
    'footer.copyright': 'All rights reserved. Made with ❤️ in Sweden.',
    
    // Common
    'common.verified': 'Verified',
    'common.featured': 'Featured',
    'common.openNow': 'Open now',
    'common.closed': 'Closed',
    'common.save': 'Save',
    'common.view': 'View',
    'common.explore': 'Explore',
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.contactUs': 'Contact Us',
    
    // Categories Page
    'categories.title': 'Business Categories',
    'categories.description': 'Explore businesses by category and find exactly what you\'re looking for',
    'categories.searchPlaceholder': 'Search categories or services...',
    'categories.allLocations': 'All Locations',
    'categories.popularSearches': 'Popular Searches',
    'categories.showingResults': 'Showing {count} categories',
    'categories.mostPopular': 'Most Popular',
    'categories.highestRated': 'Highest Rated',
    'categories.averageRating': 'Average rating',
    'categories.topCompanies': 'Top Companies:',
    'categories.subcategories': 'Subcategories:',
    'categories.moreSubcategories': '+{count} more',
    'categories.viewAllBusinesses': 'View all businesses',
    'categories.platformStats': 'Platform Statistics',
    'categories.totalBusinesses': 'Total Businesses',
    'categories.customerReviews': 'Customer Reviews',
    'categories.customerSatisfaction': 'Customer Satisfaction',
    'categories.cantFind': 'Can\'t find what you\'re looking for?',
    'categories.cantFindDescription': 'Browse all businesses or suggest a new category for our platform',
    'categories.browseAll': 'Browse All Businesses',
    'categories.suggestCategory': 'Suggest a Category',
  },
  ar: {
    // Header
    'header.home': 'الرئيسية',
    'header.companies': 'الشركات',
    'header.categories': 'الفئات',
    'header.forBusiness': 'للأعمال',
    'header.about': 'معلومات عنا',
    'header.signIn': 'تسجيل الدخول',
    'header.signUp': 'إنشاء حساب',
    
    // Homepage
    'home.hero.title': 'ابحث عن أفضل',
    'home.hero.subtitle': 'مقدمي الخدمات',
    'home.hero.description': 'اقرأ المراجعات الأصلية من العملاء الحقيقيين واكتشف الشركات الموثوقة في منطقتك. اتخذ قرارات مدروسة بمساعدة رؤى الذكاء الاصطناعي.',
    'home.hero.searchPlaceholder': 'ابحث عن الشركات والخدمات والمهنيين...',
    'home.hero.locationPlaceholder': 'الموقع (المدينة، العنوان، الرمز البريدي)',
    'home.hero.searchButton': 'بحث',
    
    // Stats
    'home.stats.businesses': 'الشركات المدرجة',
    'home.stats.reviews': 'مراجعات العملاء',
    'home.stats.rating': 'متوسط التقييم',
    'home.stats.verified': 'المراجعات المؤكدة',
    
    // Categories
    'home.categories.title': 'الفئات',
    'home.categories.subtitle': 'الشائعة',
    'home.categories.description': 'استكشف الخدمات الأعلى تقييماً في منطقتك',
    'home.categories.viewAll': 'عرض جميع الفئات',
    
    // Top Companies
    'home.topCompanies.title': 'الشركات',
    'home.topCompanies.subtitle': 'الأعلى تقييماً',
    'home.topCompanies.description': 'اكتشف التميز في جودة الخدمة',
    'home.topCompanies.viewAll': 'عرض الكل',
    'home.topCompanies.viewProfile': 'عرض الملف الشخصي',
    
    // Reviews
    'home.reviews.title': 'آخر',
    'home.reviews.subtitle': 'المراجعات',
    'home.reviews.description': 'اطلع على آراء العملاء',
    
    // CTA
    'home.cta.title': 'هل أنت صاحب عمل؟',
    'home.cta.description': 'انضم إلى آلاف الشركات التي تثق في ReviewHub للتواصل مع العملاء وبناء سمعتها.',
    'home.cta.listBusiness': 'أدرج شركتك',
    'home.cta.businessLogin': 'دخول الأعمال',
    
    // Footer
    'footer.description': 'المنصة الأكثر موثوقية للعثور على الشركات المحلية ومراجعتها.',
    'footer.customers': 'للعملاء',
    'footer.business': 'للأعمال',
    'footer.support': 'الدعم',
    'footer.copyright': 'جميع الحقوق محفوظة. صنع بـ ❤️ في السويد.',
    
    // Common
    'common.verified': 'مؤكد',
    'common.featured': 'مميز',
    'common.openNow': 'مفتوح الآن',
    'common.closed': 'مغلق',
    'common.save': 'حفظ',
    'common.view': 'عرض',
    'common.explore': 'استكشاف',
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.contactUs': 'اتصل بنا',
    
    // Categories Page
    'categories.title': 'فئات الشركات',
    'categories.description': 'استكشف الشركات حسب الفئة واعثر على ما تبحث عنه بالضبط',
    'categories.searchPlaceholder': 'ابحث في الفئات أو الخدمات...',
    'categories.allLocations': 'جميع المواقع',
    'categories.popularSearches': 'عمليات البحث الشائعة',
    'categories.showingResults': 'عرض {count} فئة',
    'categories.mostPopular': 'الأكثر شيوعاً',
    'categories.highestRated': 'الأعلى تقييماً',
    'categories.averageRating': 'متوسط التقييم',
    'categories.topCompanies': 'أفضل الشركات:',
    'categories.subcategories': 'الفئات الفرعية:',
    'categories.moreSubcategories': '+{count} المزيد',
    'categories.viewAllBusinesses': 'عرض جميع الشركات',
    'categories.platformStats': 'إحصائيات المنصة',
    'categories.totalBusinesses': 'إجمالي الشركات',
    'categories.customerReviews': 'مراجعات العملاء',
    'categories.customerSatisfaction': 'رضا العملاء',
    'categories.cantFind': 'لا تجد ما تبحث عنه؟',
    'categories.cantFindDescription': 'تصفح جميع الشركات أو اقترح فئة جديدة لمنصتنا',
    'categories.browseAll': 'تصفح جميع الشركات',
    'categories.suggestCategory': 'اقترح فئة',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang) {
        return savedLang;
      }
      
      // Check browser language preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ar')) {
        return 'ar';
      }
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    
    // Set document direction and lang attribute
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  useEffect(() => {
    // Apply initial language settings
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
