import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.news': 'News & Updates',
    'nav.contact': 'Contact Us',
    
   'hero.title': 'Welcome to the Debre Birhan Etege Taitu Sub-city Shewareged Gedele Kebele Website',
  'hero.subtitle': 'Service Announcement Charter',
  'hero.description': 'Resident meeting day: Monday & Wednesday - Social court service: Monday and Friday from 7:30 to 11:30',
  'hero.search': 'Search for service (e.g.: lost ID, submit complaint...)',
  'hero.searchBtn': 'Search',
    
   // Services
'services.title': 'Our Services',
'services.subtitle': 'Below are the services we provide at Etege Taitu Sub-city Shewareged Gedele Kebele.',
'services.newId': 'Issue New ID',
'services.newId.desc': 'If a resident comes from another kebele, they must bring a reference from their previous kebele and a guarantor who is a resident of our kebele.',
'services.mindDesc.newId': 'Service takes 10 minutes',

'services.business': 'Issue Replacement for Lost ID',
'services.business.desc': 'The applicant must bring an application',
'services.mindDesc.oldId': 'Service takes 10 minutes',

'services.documents': 'Vital Event Registration - Birth',
'services.documents.desc': 'The applicant must bring an application, photo, and renewed ID',
'services.mindDesc.brith': 'Service takes 20 minutes',

'services.tax': 'Vital Event Registration - Death',
'services.tax.desc': 'The applicant must bring church certificate',

'services.land': 'Vital Event Registration - Marriage',
'services.land.desc': 'The applicant must bring marriage contract, photos, renewed IDs of husband and wife, and renewed IDs of witnesses',

'services.support': 'Issue Debt-Free Certificate',
'services.support.desc': 'The applicant must bring an application and renewed ID',

'services.registery': 'Provide Housing Association Information',
'services.registery.desc': 'The applicant must bring a letter from thier office',

'services.viewAll': 'View All Services',

    // About
    'about.title': 'About Shewareged Gedele Kebele',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide customers with efficient and quality service, to provide customers with transparent service, to ensure customer satisfaction.',

    'about.vision': 'The Kebele\'s Mission',
    'about.vision.text': 'To effectively, efficiently, and accessibly execute government and organizational tasks and customer services within the kebele.',

    'about.charter': 'The Kebele\'s Vision',
    'about.charter.text': 'To see the kebele residents benefiting from good administration and overcoming poverty and backwardness',

    'about.values': 'Our Values',
    'about.transparency': 'Transparency',
    'about.transparency.desc': 'We serve customers with integrity and honesty',
    'about.efficiency': 'Efficiency',
    'about.efficiency.desc': 'Streamlined, fast service',
    'about.accessibility': 'Accessibility',
    'about.accessibility.desc': 'Services for everyone',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Modern solutions for modern times',

    
// Newsletter
'newsletter.title': 'Get Information',
'newsletter.description': 'Subscribe to our daily newsletter for new services and public announcements.',
'newsletter.placeholder': 'Your email address',
'newsletter.subscribe': 'Subscribe',

// Contact
'contact.title': 'Contact Us',
'contact.subtitle': 'We are here to help',
'contact.form.name': 'Full Name',
'contact.form.email': 'Email Address',
'contact.form.subject': 'Subject',
'contact.form.subject.general': 'General Inquiry',
'contact.form.subject.complaint': 'Service Complaint',
'contact.form.subject.technical': 'Technical Support',
'contact.form.message': 'Message',
'contact.form.send': 'Send Message',
'contact.info.title': 'Contact Information',
'contact.info.subtitle':'Fill out the form below and we will get back to you as soon as possiblet',
'contact.phone': 'Phone',
'contact.email': 'Email',
'contact.hours': 'Office Hours',
'contact.hours.time': '8:30 AM - 5:30 PM, Monday - Friday',
'contact.address': 'Address',
'contact.address.text': ' ',
    
// Footer
'footer.quickLinks': 'Quick Links',
'footer.followUs': 'Follow Us',
'footer.location': 'Our Address',
'footer.copyright': '© 2018 E.C Debre Birhan Etege Taitou Sub-city Shewareged Gedele Kebele, Ethiopia. Developed by Biniyam Girma and Kirubel Asefa if you have and digital produt want to be developed contact us on 0928259867',
'footer.helpline': 'Helpline: +251-11-XXX-XXXX',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.about': 'ስለ እኛ',
    'nav.services': 'አገልግሎቶች',
    'nav.news': 'ዜናዎች እና ማሻሻያዎች',
    'nav.contact': 'ያግኙን',
    
    // Hero
    'hero.title': 'እንኳን ወደ ደብረብርሀን እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ ድህረገጽ በደህና መጡ',
    'hero.subtitle': 'አግልግሎት አሰጣጥ ማሳወቂያ ቻርተር',
    'hero.description': 'የባለጉዳይ ማስታናገጃ ቀን፡ ሰኞ ረቡዕ፤አርበ -የቀጠና ቀን፡ ማስክኞ እና ሀሙስ -የማህበራዊ ፍ/ቤት አገልግሎት ሰኞ እና አርብ ከ7፡30 እስከ 11፡30',
    'hero.search': 'አገልግሎት ፈልግ (ለምሳሌ፡ የጠፋ መታወቂያ፣ ቅሬታ ማቅረብ...)',
    'hero.searchBtn': 'ፈልግ',
    
    // Services
    'services.title': 'የእኛ አገልግሎቶች',
    'services.subtitle': 'በ እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ የምንሰጣቸው አገልግሎቶች ከታች ይመልክቱ።',
    'services.newId': 'አዲስ መታወቂያ መስጠት',
    'services.newId.desc': 'ባለጉዳይ ከሌላ ቀበሌ የመጣ ከሆነ ከመጣበት ቀበሌ መሸኛ እና በቀበሌያችን ነዋሪ የሆነ ሰው ተያዥ ማቅረብ ይኖርባቸዋል።',
    'services.mindDesc.newId': 'አግልግሎት የሚፈጀው ሰዓት 10 ደቂቃ',
    'services.business': 'የጠፋ መታወቂያ መስጠት',
    'services.business.desc': 'ባለጉዳይ ማመልከቻ እና ፋይል ቁጥር ይዞ መቅረብ አለበት',
    'services.mindDesc.oldId': 'አግልግሎት የሚፈጀው ሰዓት 10 ደቂቃ',

    'services.documents': 'የወሳኝ ኩነት ምዝገባ ልደት',
    'services.documents.desc': 'ባለጉዳይ ማመልከቻ ፣ ጉርድ ፎቶ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',
    'services.mindDesc.brith': 'አግልግሎት የሚፈጀው ሰዓት 20 ደቂቃ',

    'services.tax': 'የወሳኝ ኩነት ምዝገባ ሞት',
    'services.tax.desc': 'ባለጉዳይ የቤተክርስትያን ማስረጃ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',


    'services.land': 'የወሳኝ ኩነት ምዝገባ ጋብቻ',
    'services.land.desc': 'ባለጉዳይ የጋብቻ ውል ፣ ጉርድ ፎቶ የባልና የሚስት የታደሰ መታወቂያ እና የምስክሮች የታደሰመታወቂያ መቅረብ አለበት',


    'services.support': 'ከእዳ ነፃ ማስረጃ መስጠት',
    'services.support.desc': 'ባለጉዳይ ማመልከቻ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',

    'services.registery':'የቤት ማህበር መረጃ ለመስጠት',
    'services.registery.desc': 'ባለጉዳይ ከአደራጅ መስሪያ ቤት ሸኜ ደብዳቤ ይዞ መቅረብ አለበት',


    'services.viewAll': 'ሁሉንም አገልግሎቶች ይመልከቱ',
    
    // About
    'about.title': 'ስለ ሸዋረገድ ገድሌ ቀበሌ',
    'about.mission': 'የእኛ ተልእኮ',
    'about.mission.text': 'ተገልጋዩች ቀልጣፋ እና ጥራት ያለው አገልግሎት ለመስጠት ተገልጋዮች ግልፀኝነት ያለው አገልግሎት ለመስጠት ተገልጋዮችን ተጠቃሚነት እርካታ ለማረጋገጥ።',
    
    'about.vision': 'የቀበሌው ተልዕኮ',
    'about.vision.text': 'በቀበሌው ውስጥ የሚሰሩ የመንግስት እና የድርጅት ስራዎችን እና የደንበኞችን አገልግሎት በብቃት፤በጥራት መምራት በተደራሽነት መፈፀም መቻል።',

    'about.charter':'የቀበሌው ራዕይ',
    'about.charter.text':'ቀበሌው ህዝብ ከመልካም አስተዳደር ችግር ወጥቶ ማየት ጠቃሚነት ሲያረጋግጥ ማየት ቀበሌው ህዝብ ከድህነት እና ኃላቀርነት ተላቆ ማየት',

    'about.values': 'የእኛ እሴቶች',
    'about.transparency': 'ግልጽነት',
    'about.transparency.desc': 'ደንበኞችን በቅንነት እና በታማኝነት እናገለግላለን',
    'about.efficiency': 'ቅልጥፍና',
    'about.efficiency.desc': 'የተቀላጠፈ፣ ፈጣን አገልግሎት',
    'about.accessibility': 'ተደራሽነት',
    'about.accessibility.desc': 'ለሁሉም፣ በየትም ቦታ አገልግሎቶች',
    'about.innovation': 'ፈጠራ',
    'about.innovation.desc': 'ለዘመናዊ ጊዜያት ዘመናዊ መፍትሔዎች',
    
    // Newsletter
    'newsletter.title': 'መረጃ ያግኙ',
    'newsletter.description': 'ለአዳዲስ አገልግሎቶች እና የህዝብ ማስታወቂያዎች የእለት ዜና መጽሔታችንን ይመዝገቡ።',
    'newsletter.placeholder': 'የእርስዎ ኢሜይል አድራሻ',
    'newsletter.subscribe': 'ይመዝገቡ',
    
    // Contact
    'contact.title': 'ያግኙን',
    'contact.subtitle': 'ለእርዳታ እዚህ ነን',
    'contact.form.name': 'ሙሉ ስም',
    'contact.form.email': 'የኢሜይል አድራሻ',
    'contact.form.subject': 'ርዕስ',
    'contact.form.subject.general': 'አጠቃላይ ጥያቄ',
    'contact.form.subject.complaint': 'የአገልግሎት ቅሬታ',
    'contact.form.subject.technical': 'የቴክኒክ ድጋፍ',
    'contact.form.message': 'መልእክት',
    'contact.form.send': 'መልእክት ላክ',
    'contact.info.title': 'የመገኛ መረጃ',
    'contact.info.subtitle':'',
    'contact.phone': 'ስልክ',
    'contact.email': 'ኢሜይል',
    'contact.hours': 'የቢሮ ሰዓት',
    'contact.hours.time': '2:30 ጠዋት - 11:30 ምሽት፣ ሰኞ - አርብ',
    'contact.address': 'አድራሻ',
    'contact.address.text': 'S',
    
    // Footer
    'footer.quickLinks': 'ቀልጣፋ አገናኞች',
    'footer.followUs': 'ተከተሉን',
    'footer.location': 'የእኛ አድራሻ',
    'footer.copyright': '© 2018 E.C ደብረብርሀን እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ, ኢትዮጵያ። በ ቢኒያም ግርማ እና ኪሩበል አሰፋ የተሰራ።', 
    'footer.helpline': 'የእገዛ መስመር: +251-11-XXX-XXXX',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('am');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'am' ? 'en' : 'am');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
