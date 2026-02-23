import { Calendar, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Newsletter } from "@/components/Newsletter";
import axios from "axios";
import React, { useState, useEffect } from "react";
let base_url = import.meta.env.VITE_BASE_URL;
base_url = base_url + "//news";
export default function News() {
  const { t, language } = useLanguage();
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get();
  }, []);
  const newsItems = [
    {
      title: "በቀበሌው የፅዳት ስራ",
      description: "አካባቢያችንን ከ ቆሻሻ ማጽዳት የ ሁላችንም ሀላፊነት መሆኑ ተገለጸ።",
      date: "2024-03-15",
      category: "በቀበሌው የፅዳት ስራ",
      Image: "/images/image-1.webp",
    },
    {
      title: "የክፍለ ከተማ አመራሮች የምግቤን ከጓሮዬ ምልከታ",
      description:
        "ከፍተኛ የ ከፍለ ከተማ አመራሮች በ 2017 እየተካሄደ ያለውን የ ልማት ስራዎች ተዘዋውረው ጉብኝት አርገዋል።",
      date: "2024-03-10",
      category: "የክፍለ ከተማ አመራሮች ጉብኝት",
      Image: "/images/image-2.webp",
    },
    {
      title: "በቀበሌው የ ውሀ ተፋሰስ መውረጃ ግንባታ",
      description: "በ 2017 ቀበሌያችን እየተከናወኑ ያሉ የልማት ስራዎች።",
      date: "2024-03-05",
      category: "በ ቀበሌው ሚከናወኑ ልማት ስራዎች",
      Image: "/images/image-3.webp",
    },
  ];

  return (
    <div className="flex-1">
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 animate-fade-up text-4xl font-bold md:text-5xl">
              {t("nav.news")}
            </h1>
            <p
              className="animate-fade-up text-lg text-muted-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              {language === "en"
                ? "Stay updated with the latest developments and announcements"
                : "ማስታወቂያዎች "}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="animate-fade-up flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-2 h-48 p-4 flex items-end justify-between relative">
                    <div
                      className="h-48 w-ful absolute inset-0 z-10 rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `
                        
                        url(${item.Image})
                      `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "darken",
                      }}
                    ></div>
                    <Badge variant="secondary" className="z-20 ">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    variant="ghost"
                    className="group w-full justify-between"
                  >
                    {language === "en" ? "Read More" : "ተጨማሪ ያንብቡ"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
