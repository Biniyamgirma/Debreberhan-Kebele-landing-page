import { Search, IdCard, FileCheck, Home as HomeIcon, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Services() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [
    {
      icon: IdCard,
      title: t('services.newId'),
      description: t('services.newId.desc'),
      category: 'Documents',
    },
    {
      icon: IdCard,
      title: t('services.business'),
      description: t('services.business.desc'),
      category: 'Business',
    },
    {
      icon: Book,
      title: t('services.documents'),
      description: t('services.documents.desc'),
      category: 'Documents',
    },
    {
      icon: IdCard,
      title: t('services.tax'),
      description: t('services.tax.desc'),
      category: 'Finance',
    },
    {
      icon: HomeIcon,
      title: t('services.land'),
      description: t('services.land.desc'),
      category: 'Property',
    },
    {
      icon: FileCheck,
      title: t('services.support'),
      description: t('services.support.desc'),
      category: 'Support',
    },
    
  ];

  const filteredServices = allServices.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1">
      <Header />
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 animate-fade-up text-4xl font-bold md:text-5xl">
              {t('services.title')}
            </h1>
            <p className="mb-6 animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
              {t('services.subtitle')}
            </p>
            
            {/* Search */}
            <div className="animate-fade-up mx-auto max-w-xl" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('hero.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <Card
                  key={index}
                  className="group animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No services found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
