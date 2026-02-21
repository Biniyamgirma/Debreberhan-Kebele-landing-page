import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Administrater() {
  const newsItems = [
    {
      title: "ዋና አስተዳዳሪ: አቶ ጥላዬ ላቀው",
      description: " ",
      date: "2024-03-15",
      category: "አመራር",
      phone_number: "+251 911 123 456",
      Image: "/images/image-6.jpg",
    },
    {
      title: "ዋና ስራ አስኪያጅ: አቶ ዳዊት ወልዴ",
      description: " ",
      date: "2024-03-10",
      category: "አመራር",
      phone_number: "+251 911 654 321",
      Image: "/images/image-6.jpg",
    },
    {
      title: "የቀበሌው ማህበራዊና ኢኮኖሚያዊ ዘርፍ ሀላፊ: ወ/ሪት ብዙአየሁ ግርማ",
      description: " ",
      date: "2024-03-10",
      category: "አመራር",
      phone_number: "+251 911 987 654",
      Image: "/images/image-6.jpg",
    },
  ];
  return (
    <section className="py-16 bg-accent-foreground flex-col justify-center items-center w-full ">
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
                    className="h-48 w-full  absolute inset-0 z-10 rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                        url(${item.Image})
                      `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "darken",
                    }}
                  ></div>
                  <Badge variant="default" className="z-20 ">
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Administrater;
