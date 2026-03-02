import { Target, Eye, Shield, Zap, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('about.transparency'),
      description: t('about.transparency.desc'),
    },
    {
      icon: Zap,
      title: t('about.efficiency'),
      description: t('about.efficiency.desc'),
    },
    {
      icon: Users,
      title: t('about.accessibility'),
      description: t('about.accessibility.desc'),
    },
    {
      icon: Award,
      title: t('about.innovation'),
      description: t('about.innovation.desc'),
    },
  ];

  return (
    <div className="flex-1">
      <Header />
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 animate-fade-up text-4xl font-bold md:text-5xl">
              {t('about.title')}
            </h1>
            <p className="animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="animate-fade-up border-l-4 border-l-primary">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{t('about.charter')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('about.charter.text')}</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-up border-l-4 border-l-accent" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{t('about.vision')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('about.vision.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t('about.values')}</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="animate-fade-up text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
