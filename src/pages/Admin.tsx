import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import imageUrl from "/images/image-6.jpg";

function Admin() {
  const { t, language } = useLanguage();

  let no_image: Boolean = false;
  let imageUrl: string | null = null;
  if (!imageUrl) {
    no_image = true;
  }
  const newsItems = [
    {
      id: 1,
      title: "በቀበሌው የፅዳት ስራ",
      description: "አካባቢያችንን ከ ቆሻሻ ማጽዳት የ ሁላችንም ሀላፊነት መሆኑ ተገለጸ።",
      date: "2024-03-15",
      category: "በቀበሌው የፅዳት ስራ",
      Image: "/images/image-1.webp",
    },
    {
      id: 2,
      title: "የክፍለ ከተማ አመራሮች የምግቤን ከጓሮዬ ምልከታ",
      description:
        "ከፍተኛ የ ከፍለ ከተማ አመራሮች በ 2017 እየተካሄደ ያለውን የ ልማት ስራዎች ተዘዋውረው ጉብኝት አርገዋል።",
      date: "2024-03-10",
      category: "የክፍለ ከተማ አመራሮች ጉብኝት",
      Image: "/images/image-2.webp",
    },
    {
      id: 3,
      title: "በቀበሌው የ ውሀ ተፋሰስ መውረጃ ግንባታ",
      description: "በ 2017 ቀበሌያችን እየተከናወኑ ያሉ የልማት ስራዎች።",
      date: "2024-03-05",
      category: "በ ቀበሌው ሚከናወኑ ልማት ስራዎች",
      Image: "/images/image-3.webp",
    },
  ];
  const adminstrators = [
    {
      id: 1,
      title: "ዋና አስተዳዳሪ: አቶ ጥላዬ ላቀው",
      description: " ",
      date: "2024-03-15",
      category: "አመራር",
      phone_number: "+251 911 123 456",
      Image: "/images/image-6.jpg",
    },
    {
      id: 2,
      title: "ዋና ስራ አስኪያጅ: አቶ ዳዊት ወልዴ",
      description: " ",
      date: "2024-03-10",
      category: "አመራር",
      phone_number: "+251 911 654 321",
      Image: "/images/image-6.jpg",
    },
    {
      id: 3,
      title: "የቀበሌው ማህበራዊና ኢኮኖሚያዊ ዘርፍ ሀላፊ: ወ/ሪት ብዙአየሁ ግርማ",
      description: " ",
      date: "2024-03-10",
      category: "አመራር",
      phone_number: "+251 911 987 654",
      Image: "/images/image-6.jpg",
    },
  ];
  return (
    <section>
      <div className="flex w-screen justify-between items-center h-12 bg-[#1a4331]/95 text-white px-12 my-8">
        <div className="">
          <h1 className="text-sm md:text-xl">እንኳን ወደ ድህረገጽ ማስተዳደሪያ በሰላም መጡ</h1>
        </div>
        <div>
          <p className="text-sm md:text-lg">ዋና አስተዳዳሪ: አቶ ጥላዬ ላቀው</p>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 my-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adminstrators.map((item, index) => (
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

                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-600 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                    <span className="select-none ms-3 text-sm font-medium text-heading">
                      አሁን በስራ ላይ እንደሚገኙ ለማብራት እና ለማጥፋት።
                    </span>
                  </label>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-screen justify-between items-center h-12 bg-[#1a4331]/95 text-white px-12 my-8">
        <div className="">
          <h1 className="text-sm md:text-xl">ዜና ለማስተላለፍ ከታች ያለውን ይጠቀሙ።</h1>
        </div>
        <div>
          <p className="text-sm md:text-lg"></p>
        </div>
      </div>
      <div className="container mx-auto px-4 my-8">
        <img
          src={imageUrl}
          alt="Profile"
          className={cn("w-full h-60  object-cover", no_image && "hidden")}
        />
        <form>
          <div className="w-full mb-4 border border-default-medium rounded-base bg-primary/10 rounded-2xl shadow-xs my-4 border-b-2 border-primary">
            <div className="px-4 py-2 bg-neutral-secondary-medium rounded-t-base border-b border-default-medium">
              <label htmlFor="comment" className="sr-only">
                የ ዜና ወይም የ መልእክቱ ርዕስ። እዚህ ጋር ያስቀምጡ።
              </label>
              <textarea
                id="comment"
                rows={3}
                className="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body"
                placeholder="የ ዜና ወይም የ መልእክቱ ርዕስ። እዚህ ጋር ያስቀምጡ።"
                required
              ></textarea>
            </div>
            <div className="px-4 py-2 bg-neutral-secondary-medium rounded-t-base">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={6}
                className="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body"
                placeholder="ዝርዝር መረጃ እዚህ ጋር የስቀምጡ።"
                required
              ></textarea>
            </div>
            <div className="flex items-center px-3 py-2 border-t border-default-medium">
              <button
                type="submit"
                className="text-white cursor-pointer hover:bg-primary/80 bg-primary/90 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
              >
                ዜናውን ለማሰራጨት ይህን ይጫኑ።
              </button>
              <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                <button
                  type="button"
                  className="p-2 cursor-pointer text-body rounded-sm  hover:text-heading hover:bg-neutral-tertiary-medium"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                    />
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container mx-auto px-4 my-4">
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
                <div className="text-[12px] font-light text-gray-600">
                  <p>ዜናው የተላለፈበት ስዐት፡ {item.date}</p>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="group w-full  bg-primary/95 hover:bg-primary/80">
                  <a
                    href={`/edit/${item.id}`}
                    className="justify-between w-full flex items-center"
                  >
                    {language === "en" ? "edit" : "ዜናውን ለማስተካከል ወይም ለማጥፋት"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
