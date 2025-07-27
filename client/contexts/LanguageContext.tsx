import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Header
    "header.home": "Home",
    "header.companies": "Companies",
    "header.categories": "Categories",
    "header.forBusiness": "For Business",
    "header.about": "About",
    "header.signIn": "Sign In",
    "header.signUp": "Sign Up",

    // Homepage
    "home.hero.title": "Find the Best",
    "home.hero.subtitle": "Service Providers",
    "home.hero.description":
      "Read authentic reviews from real customers and discover trusted businesses in your area. Make informed decisions with our AI-powered insights.",
    "home.hero.searchPlaceholder":
      "Search for businesses, services, or professionals...",
    "home.hero.locationPlaceholder": "Location (city, address, zip code)",
    "home.hero.searchButton": "Search",

    // Stats
    "home.stats.businesses": "Businesses Listed",
    "home.stats.reviews": "Customer Reviews",
    "home.stats.rating": "Average Rating",
    "home.stats.verified": "Verified Reviews",

    // Categories
    "home.categories.title": "Popular",
    "home.categories.subtitle": "Categories",
    "home.categories.description": "Explore top-rated services in your area",
    "home.categories.viewAll": "View All Categories",

    // Top Companies
    "home.topCompanies.title": "Top Rated",
    "home.topCompanies.subtitle": "Businesses",
    "home.topCompanies.description": "Discover excellence in service quality",
    "home.topCompanies.viewAll": "View All",
    "home.topCompanies.viewProfile": "View Profile",

    // Reviews
    "home.reviews.title": "Latest",
    "home.reviews.subtitle": "Reviews",
    "home.reviews.description": "See what customers are saying",

    // CTA
    "home.cta.title": "Are you a business owner?",
    "home.cta.description":
      "Join thousands of businesses that trust ReviewHub to connect with customers and build their reputation.",
    "home.cta.listBusiness": "List Your Business",
    "home.cta.businessLogin": "Business Login",

    // Footer
    "footer.description":
      "The most trusted platform for finding and reviewing local businesses.",
    "footer.customers": "For Customers",
    "footer.business": "For Business",
    "footer.support": "Support",
    "footer.copyright": "All rights reserved. Made with ❤️ in Sweden.",

    // Common
    "common.verified": "Verified",
    "common.featured": "Featured",
    "common.openNow": "Open now",
    "common.closed": "Closed",
    "common.save": "Save",
    "common.view": "View",
    "common.explore": "Explore",
    "common.loading": "Loading...",
    "common.error": "Error occurred",
    "common.contactUs": "Contact Us",

    // Categories Page
    "categories.title": "Business Categories",
    "categories.description":
      "Explore businesses by category and find exactly what you're looking for",
    "categories.searchPlaceholder": "Search categories or services...",
    "categories.allLocations": "All Locations",
    "categories.popularSearches": "Popular Searches",
    "categories.showingResults": "Showing {count} categories",
    "categories.mostPopular": "Most Popular",
    "categories.highestRated": "Highest Rated",
    "categories.averageRating": "Average rating",
    "categories.topCompanies": "Top Companies:",
    "categories.subcategories": "Subcategories:",
    "categories.moreSubcategories": "+{count} more",
    "categories.viewAllBusinesses": "View all businesses",
    "categories.platformStats": "Platform Statistics",
    "categories.totalBusinesses": "Total Businesses",
    "categories.customerReviews": "Customer Reviews",
    "categories.customerSatisfaction": "Customer Satisfaction",
    "categories.cantFind": "Can't find what you're looking for?",
    "categories.cantFindDescription":
      "Browse all businesses or suggest a new category for our platform",
    "categories.browseAll": "Browse All Businesses",
    "categories.suggestCategory": "Suggest a Category",

    // ForBusiness Page
    "forBusiness.hero.badge": "Trusted by 10,000+ Businesses",
    "forBusiness.hero.title": "Grow Your Business with ",
    "forBusiness.hero.titleHighlight": "Customer Reviews",
    "forBusiness.hero.subtitle": "Join thousands of successful businesses using ReviewHub to build trust, attract customers, and grow their reputation online.",
    "forBusiness.hero.ctaPrimary": "Get Started Free",
    "forBusiness.hero.ctaSecondary": "Schedule Demo",
    "forBusiness.hero.note": "✓ No credit card required ✓ Setup in 5 minutes ✓ Cancel anytime",

    // About Page
    "about.hero.badge": "About ReviewHub",
    "about.hero.title": "Building Trust Between ",
    "about.hero.titleHighlight": "Businesses & Customers",
    "about.hero.subtitle": "We're on a mission to create the most trusted platform for business reviews in Sweden, helping customers make informed decisions while empowering businesses to build authentic reputations.",
    "about.hero.ctaPrimary": "Join as Business",
    "about.hero.ctaSecondary": "Explore Companies",
    "about.mission.title": "Our Mission",
    "about.mission.description1": "To create a transparent, trustworthy ecosystem where authentic customer reviews help businesses improve and customers make confident decisions. We believe that honest feedback benefits everyone.",
    "about.mission.description2": "By combining advanced AI technology with human insight, we're building the future of business reviews - one that's fair, accurate, and beneficial for all stakeholders.",
    "about.mission.feature1": "100% authentic, verified reviews",
    "about.mission.feature2": "AI-powered review analysis and insights",
    "about.mission.feature3": "Support for businesses of all sizes",
    "about.values.title": "Our",
    "about.values.titleHighlight": "Values",
    "about.values.description": "The principles that guide everything we do at ReviewHub",
    "about.team.title": "Meet Our",
    "about.team.titleHighlight": "Team",
    "about.team.description": "The passionate people behind ReviewHub who are dedicated to building trust online",
    "about.journey.title": "Our",
    "about.journey.titleHighlight": "Journey",
    "about.journey.description": "From startup to Sweden's most trusted review platform",
    "about.cta.title": "Want to Learn More?",
    "about.cta.description": "Get in touch with our team to learn more about ReviewHub and how we can help your business grow",
    "about.cta.contactButton": "Contact Us",
    "about.cta.forBusinessButton": "For Business",

    // Companies Page
    "companies.hero.verified": "{count} verified companies",
    "companies.hero.title": "Discover",
    "companies.hero.titleHighlight": "Trusted Businesses",
    "companies.hero.description": "Browse through our curated collection of verified companies and find the perfect service provider for your needs.",
    "companies.hero.searchPlaceholder": "Search companies, services, or categories...",
    "companies.popularSearches": "Popular Searches",
    "companies.showingResults": "Showing {count} companies",
    "companies.featured": "Featured",
    "companies.reviews": "reviews",
    "companies.services": "Services:",
    "companies.why.title": "Why Choose",
    "companies.why.titleHighlight": "ReviewHub Companies",
    "companies.why.description": "All our listed companies meet high standards of quality and trust.",
    "companies.cta.title": "Looking for",
    "companies.cta.titleHighlight": "something specific?",
    "companies.cta.description": "Can't find what you're looking for? Browse by categories or contact us to add a new business.",

    // About Page Arrays
    "about.values.0.title": "Trust & Transparency",
    "about.values.0.description": "We believe in authentic reviews and transparent business practices that build genuine trust between customers and businesses.",
    "about.values.1.title": "Customer First",
    "about.values.1.description": "Every feature we build puts customers first, ensuring they have the tools to make informed decisions and share honest feedback.",
    "about.values.2.title": "Community Impact",
    "about.values.2.description": "We're committed to supporting local businesses and communities by connecting them with customers who value quality service.",
    "about.values.3.title": "Innovation",
    "about.values.3.description": "We continuously innovate with AI-powered insights and modern technology to improve the review experience for everyone.",
    "about.team.0.name": "Emma Andersson",
    "about.team.0.role": "CEO & Founder",
    "about.team.0.bio": "Former tech executive with 15+ years in building customer-focused platforms.",
    "about.team.1.name": "Lars Johansson",
    "about.team.1.role": "CTO",
    "about.team.1.bio": "AI and machine learning expert passionate about creating intelligent review systems.",
    "about.team.2.name": "Sofia Lindström",
    "about.team.2.role": "Head of Customer Success",
    "about.team.2.bio": "Dedicated to ensuring every business succeeds on our platform with exceptional support.",
    "about.team.3.name": "Marcus Nielsen",
    "about.team.3.role": "Head of Product",
    "about.team.3.bio": "User experience designer focused on making review management simple and effective.",
    // ForBusiness Page Arrays
    "forBusiness.features.0.title": "Review Analytics",
    "forBusiness.features.0.description": "Track your reputation with detailed analytics and insights about customer feedback.",
    "forBusiness.features.1.title": "Respond to Reviews",
    "forBusiness.features.1.description": "Engage with customers by responding to reviews and building stronger relationships.",
    "forBusiness.features.2.title": "Customer Insights",
    "forBusiness.features.2.description": "Understand your customers better with AI-powered sentiment analysis and trends.",
    "forBusiness.features.3.title": "Trust Verification",
    "forBusiness.features.3.description": "Get verified status and build trust with our comprehensive verification process.",
    "forBusiness.features.4.title": "Enhanced Visibility",
    "forBusiness.features.4.description": "Increase your online presence and reach more potential customers.",
    "forBusiness.features.5.title": "Mobile-Friendly",
    "forBusiness.features.5.description": "Manage your business profile and reviews on the go with our mobile app.",
    // About Page Stats
    "about.stats.0.label": "Businesses Trust Us",
    "about.stats.0.description": "Companies across Sweden use ReviewHub to manage their reputation",
    "about.stats.1.label": "Reviews Collected",
    "about.stats.1.description": "Authentic customer reviews helping others make informed decisions",
    "about.stats.2.label": "Average Growth",
    "about.stats.2.description": "Increase in customer engagement for businesses using our platform",
    "about.stats.3.label": "Platform Rating",
    "about.stats.3.description": "Customer satisfaction score from businesses and consumers",
    // About Page Milestones
    "about.milestones.0.title": "Company Founded",
    "about.milestones.0.description": "ReviewHub was born from a vision to create more trust in online business reviews.",
    "about.milestones.1.title": "First 1,000 Businesses",
    "about.milestones.1.description": "Reached our first milestone with small businesses across Stockholm and Gothenburg.",
    "about.milestones.2.title": "AI Integration",
    "about.milestones.2.description": "Launched AI-powered review analysis and sentiment tracking features.",
    "about.milestones.3.title": "National Expansion",
    "about.milestones.3.description": "Expanded across Sweden with businesses in all major cities joining our platform.",
    "about.milestones.4.title": "10,000+ Businesses",
    "about.milestones.4.description": "Reached 10,000 verified businesses and 2 million customer reviews.",
    "about.milestones.5.title": "Advanced Analytics",
    "about.milestones.5.description": "Launched comprehensive business intelligence and customer insight tools.",
  },
  ar: {
    // Header
    "header.home": "الرئيسية",
    "header.companies": "الشركات",
    "header.categories": "الفئات",
    "header.forBusiness": "للأعمال",
    "header.about": "معلومات عنا",
    "header.signIn": "تسجيل الدخول",
    "header.signUp": "إنشاء حساب",

    // Homepage
    "home.hero.title": "ابحث عن أفضل",
    "home.hero.subtitle": "مقدمي الخدمات",
    "home.hero.description":
      "اقرأ المراجعات الأصلية من العملاء الحقيقيين واكتشف الشركات الموثوقة في منطقتك. اتخذ قرارات مدروسة بمساعدة رؤى الذكاء الاصطناعي.",
    "home.hero.searchPlaceholder": "ابحث عن الشركات والخدمات والمهنيين...",
    "home.hero.locationPlaceholder": "الموقع (المدينة، العنوان، الرمز البريدي)",
    "home.hero.searchButton": "بحث",

    // Stats
    "home.stats.businesses": "الشركات المدرجة",
    "home.stats.reviews": "مراجعات العملاء",
    "home.stats.rating": "متوسط التقييم",
    "home.stats.verified": "المراجعات المؤكدة",

    // Categories
    "home.categories.title": "الفئات",
    "home.categories.subtitle": "الشائعة",
    "home.categories.description": "استكشف الخدمات الأعلى تقييماً في منطقتك",
    "home.categories.viewAll": "عرض جميع الفئات",

    // Top Companies
    "home.topCompanies.title": "الشركات",
    "home.topCompanies.subtitle": "الأعلى تقييماً",
    "home.topCompanies.description": "اكتشف التميز في جودة الخدمة",
    "home.topCompanies.viewAll": "عرض الكل",
    "home.topCompanies.viewProfile": "عرض الملف الشخصي",

    // Reviews
    "home.reviews.title": "آخر",
    "home.reviews.subtitle": "المراجعات",
    "home.reviews.description": "اطلع على آراء العملاء",

    // CTA
    "home.cta.title": "هل أنت صاحب عمل؟",
    "home.cta.description":
      "انضم إلى آلاف الشركات التي تثق في ReviewHub للتواصل مع العملاء وبناء سمعتها.",
    "home.cta.listBusiness": "أدرج شركتك",
    "home.cta.businessLogin": "دخول الأعمال",

    // Footer
    "footer.description":
      "المنصة الأكثر موثوقية للعثور على الشركات المحلية ومراجعتها.",
    "footer.customers": "للعملاء",
    "footer.business": "للأعمال",
    "footer.support": "الدعم",
    "footer.copyright": "جميع الحقوق محفوظة. صنع بـ ❤️ في السويد.",

    // Common
    "common.verified": "مؤكد",
    "common.featured": "مميز",
    "common.openNow": "مفتوح الآن",
    "common.closed": "مغلق",
    "common.save": "حفظ",
    "common.view": "عرض",
    "common.explore": "استكشاف",
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ",
    "common.contactUs": "اتصل بنا",

    // Categories Page
    "categories.title": "فئات الشركات",
    "categories.description":
      "استكشف الشركات حسب الفئة واعثر على ما تبحث عنه بالضبط",
    "categories.searchPlaceholder": "ابحث في الفئات أو الخدمات...",
    "categories.allLocations": "جميع المواقع",
    "categories.popularSearches": "عمليات البحث الشائعة",
    "categories.showingResults": "عرض {count} فئة",
    "categories.mostPopular": "الأكثر شيوعاً",
    "categories.highestRated": "الأعلى تقييماً",
    "categories.averageRating": "متوسط التقييم",
    "categories.topCompanies": "أفضل الشركات:",
    "categories.subcategories": "الفئات الفرعية:",
    "categories.moreSubcategories": "+{count} المزيد",
    "categories.viewAllBusinesses": "عرض جميع الشركات",
    "categories.platformStats": "إحصائيات المنصة",
    "categories.totalBusinesses": "إجمالي الشركات",
    "categories.customerReviews": "مراجعات العملاء",
    "categories.customerSatisfaction": "رضا العملاء",
    "categories.cantFind": "لا تجد ما تبحث عنه؟",
    "categories.cantFindDescription":
      "تصفح جميع الشركات أو اقترح فئة جديدة لمنصتنا",
    "categories.browseAll": "تصفح جميع الشركات",
    "categories.suggestCategory": "اقترح فئة",

    // ForBusiness Page
    "forBusiness.hero.badge": "موثوق به من قبل أكثر من 10,000 شركة",
    "forBusiness.hero.title": "نمِّ عملك مع ",
    "forBusiness.hero.titleHighlight": "مراجعات العملاء",
    "forBusiness.hero.subtitle": "انضم إلى آلاف الشركات الناجحة التي تستخدم ReviewHub لبناء الثقة وجذب العملاء وتنمية سمعتها عبر الإنترنت.",
    "forBusiness.hero.ctaPrimary": "ابدأ مجانًا",
    "forBusiness.hero.ctaSecondary": "احجز عرضًا توضيحيًا",
    "forBusiness.hero.note": "✓ لا حاجة لبطاقة ائتمان ✓ إعداد في 5 دقائق ✓ يمكنك الإلغاء في أي وقت",

    // About Page
    "about.hero.badge": "حول ReviewHub",
    "about.hero.title": "نبني الثقة بين ",
    "about.hero.titleHighlight": "الشركات والعملاء",
    "about.hero.subtitle": "نحن في مهمة لإنشاء المنصة الأكثر موثوقية لمراجعات الأعمال في السويد، لمساعدة العملاء على اتخاذ قرارات مستنيرة وتمكين الشركات من بناء سمعة حقيقية.",
    "about.hero.ctaPrimary": "انضم كعمل تجاري",
    "about.hero.ctaSecondary": "استكشف الشركات",
    "about.mission.title": "مهمتنا",
    "about.mission.description1": "إنشاء نظام بيئي شفاف وموثوق حيث تساعد المراجعات الحقيقية الشركات على التحسن والعملاء على اتخاذ قرارات واثقة. نؤمن بأن التعليقات الصادقة تفيد الجميع.",
    "about.mission.description2": "من خلال الجمع بين تكنولوجيا الذكاء الاصطناعي المتقدمة والبصيرة البشرية، نبني مستقبل مراجعات الأعمال - مستقبل عادل ودقيق ومفيد لجميع الأطراف.",
    "about.mission.feature1": "مراجعات أصلية ومؤكدة 100%",
    "about.mission.feature2": "تحليل مراجعات مدعوم بالذكاء الاصطناعي ورؤى متقدمة",
    "about.mission.feature3": "دعم لجميع أحجام الأعمال",
    "about.values.title": "قيمنا",
    "about.values.titleHighlight": "الرئيسية",
    "about.values.description": "المبادئ التي توجه كل ما نقوم به في ReviewHub",
    "about.team.title": "تعرف على",
    "about.team.titleHighlight": "فريقنا",
    "about.team.description": "الأشخاص الشغوفون وراء ReviewHub المكرسون لبناء الثقة عبر الإنترنت",
    "about.journey.title": "رحلتنا",
    "about.journey.titleHighlight": "المميزة",
    "about.journey.description": "من شركة ناشئة إلى المنصة الأكثر موثوقية للمراجعات في السويد",
    "about.cta.title": "هل تريد معرفة المزيد؟",
    "about.cta.description": "تواصل مع فريقنا لمعرفة المزيد عن ReviewHub وكيف يمكننا مساعدة عملك على النمو",
    "about.cta.contactButton": "اتصل بنا",
    "about.cta.forBusinessButton": "للأعمال",

    // Companies Page
    "companies.hero.verified": "{count} شركة موثقة",
    "companies.hero.title": "اكتشف",
    "companies.hero.titleHighlight": "الشركات الموثوقة",
    "companies.hero.description": "تصفح مجموعتنا المختارة من الشركات الموثوقة واعثر على مزود الخدمة المثالي لاحتياجاتك.",
    "companies.hero.searchPlaceholder": "ابحث عن الشركات أو الخدمات أو الفئات...",
    "companies.popularSearches": "عمليات البحث الشائعة",
    "companies.showingResults": "عرض {count} شركة",
    "companies.featured": "مميز",
    "companies.reviews": "مراجعات",
    "companies.services": "الخدمات:",
    "companies.why.title": "لماذا تختار",
    "companies.why.titleHighlight": "شركات ReviewHub",
    "companies.why.description": "جميع الشركات المدرجة لدينا تفي بمعايير عالية من الجودة والثقة.",
    "companies.cta.title": "تبحث عن",
    "companies.cta.titleHighlight": "شيء محدد؟",
    "companies.cta.description": "لا تجد ما تبحث عنه؟ تصفح حسب الفئات أو تواصل معنا لإضافة عمل جديد.",

    // About Page Arrays (Arabic)
    "about.values.0.title": "الشفافية والثقة",
    "about.values.0.description": "نؤمن بالمراجعات الأصلية والممارسات التجارية الشفافة التي تبني الثقة الحقيقية بين العملاء والشركات.",
    "about.values.1.title": "العميل أولاً",
    "about.values.1.description": "كل ميزة نبنيها تضع العميل في المقام الأول، لضمان امتلاكهم الأدوات لاتخاذ قرارات مستنيرة ومشاركة آرائهم بصدق.",
    "about.values.2.title": "أثر المجتمع",
    "about.values.2.description": "نلتزم بدعم الشركات والمجتمعات المحلية من خلال ربطها بالعملاء الذين يقدرون جودة الخدمة.",
    "about.values.3.title": "الابتكار",
    "about.values.3.description": "نبتكر باستمرار من خلال رؤى الذكاء الاصطناعي والتقنيات الحديثة لتحسين تجربة المراجعات للجميع.",
    "about.team.0.name": "إيما أندرسون",
    "about.team.0.role": "المديرة التنفيذية والمؤسسة",
    "about.team.0.bio": "مديرة تنفيذية سابقة في مجال التقنية بخبرة تزيد عن 15 عامًا في بناء منصات تركز على العملاء.",
    "about.team.1.name": "لارس يوهانسون",
    "about.team.1.role": "المدير التقني",
    "about.team.1.bio": "خبير في الذكاء الاصطناعي وتعلم الآلة شغوف ببناء أنظمة مراجعات ذكية.",
    "about.team.2.name": "صوفيا ليندستروم",
    "about.team.2.role": "رئيسة نجاح العملاء",
    "about.team.2.bio": "مكرسة لضمان نجاح كل شركة على منصتنا من خلال دعم استثنائي.",
    "about.team.3.name": "ماركوس نيلسن",
    "about.team.3.role": "رئيس المنتج",
    "about.team.3.bio": "مصمم تجربة مستخدم يركز على جعل إدارة المراجعات بسيطة وفعالة.",
    // ForBusiness Page Arrays (Arabic)
    "forBusiness.features.0.title": "تحليلات المراجعات",
    "forBusiness.features.0.description": "تابع سمعتك مع تحليلات مفصلة ورؤى حول تعليقات العملاء.",
    "forBusiness.features.1.title": "الرد على المراجعات",
    "forBusiness.features.1.description": "تفاعل مع العملاء من خلال الرد على المراجعات وبناء علاقات أقوى.",
    "forBusiness.features.2.title": "رؤى العملاء",
    "forBusiness.features.2.description": "افهم عملاءك بشكل أفضل من خلال تحليل المشاعر المدعوم بالذكاء الاصطناعي والاتجاهات.",
    "forBusiness.features.3.title": "التحقق من الثقة",
    "forBusiness.features.3.description": "احصل على حالة التحقق وابنِ الثقة من خلال عملية تحقق شاملة.",
    "forBusiness.features.4.title": "زيادة الظهور",
    "forBusiness.features.4.description": "زد من تواجدك على الإنترنت ووسع قاعدة عملائك المحتملين.",
    "forBusiness.features.5.title": "متوافق مع الجوال",
    "forBusiness.features.5.description": "أدر ملف عملك ومراجعاتك أثناء التنقل من خلال تطبيقنا للجوال.",
    // About Page Stats (Arabic)
    "about.stats.0.label": "الشركات التي تثق بنا",
    "about.stats.0.description": "شركات في جميع أنحاء السويد تستخدم ReviewHub لإدارة سمعتها",
    "about.stats.1.label": "المراجعات المجمعة",
    "about.stats.1.description": "مراجعات عملاء أصلية تساعد الآخرين على اتخاذ قرارات مستنيرة",
    "about.stats.2.label": "متوسط النمو",
    "about.stats.2.description": "زيادة في تفاعل العملاء للشركات التي تستخدم منصتنا",
    "about.stats.3.label": "تقييم المنصة",
    "about.stats.3.description": "درجة رضا العملاء من الشركات والمستهلكين",
    // About Page Milestones (Arabic)
    "about.milestones.0.title": "تأسيس الشركة",
    "about.milestones.0.description": "وُلدت ReviewHub من رؤية لخلق مزيد من الثقة في مراجعات الأعمال عبر الإنترنت.",
    "about.milestones.1.title": "أول 1000 شركة",
    "about.milestones.1.description": "حققنا أول إنجاز مع الشركات الصغيرة في ستوكهولم وغوتنبرغ.",
    "about.milestones.2.title": "دمج الذكاء الاصطناعي",
    "about.milestones.2.description": "أطلقنا ميزات تحليل المراجعات وتتبع المشاعر المدعومة بالذكاء الاصطناعي.",
    "about.milestones.3.title": "التوسع الوطني",
    "about.milestones.3.description": "توسعنا في جميع أنحاء السويد مع انضمام شركات من جميع المدن الكبرى إلى منصتنا.",
    "about.milestones.4.title": "أكثر من 10,000 شركة",
    "about.milestones.4.description": "وصلنا إلى 10,000 شركة موثقة و2 مليون مراجعة عملاء.",
    "about.milestones.5.title": "تحليلات متقدمة",
    "about.milestones.5.description": "أطلقنا أدوات شاملة لذكاء الأعمال ورؤى العملاء.",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang) {
        return savedLang;
      }

      // Check browser language preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ar")) {
        return "ar";
      }
    }
    return "en";
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("language", newLang);

    // Set document direction and lang attribute
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Apply initial language settings
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
