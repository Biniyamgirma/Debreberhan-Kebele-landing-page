import React,{useState,useEffect} from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import Switch from "@/components/ui/Switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/admin/Header";
import axios from "axios";
import api from "@/lib/api";
import AdministratorCard from "@/components/admin/AdministratorCard";
// import imageUrl from "/images/image-6.jpg";
import { WifiLoaderComponent } from "@/components/ui/LargeLoading";
import UploadImage from "@/components/admin/UploadImage";
function Admin() {
  const { t, language } = useLanguage();
  const [admins,setAdmins] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [loading,setLoading] = useState(false);
  const [activeToggle, setActiveToggle] = useState(null);
  
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

  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("first_name");
  // Check if the value exists and handle it appropriately
  if (saved) {
    try {
      // Try to parse as JSON first (in case it was stored with JSON.stringify)
      return JSON.parse(saved);
    } catch {
      // If parsing fails, it's a plain string, so return it directly
      return saved;
    }
  }
  return "";
  })
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
  };

useEffect(() => {

  const fetchAdminUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get("/getAllAdminUser");

      setAdmins(res.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  fetchAdminUsers();

}, []);
  
const handleToggle = async (itemId:number) => {

  const clickedItem = admins.find(item => item.id === itemId);
  if (!clickedItem) return;

  setActiveToggle(itemId);

  const newStatus = clickedItem.isOnline === 1 ? 0 : 1;

  // optimistic update
  setAdmins(prev =>
    prev.map(item =>
      item.id === itemId
        ? { ...item, isOnline: newStatus }
        : item
    )
  );

  try {

    await api.put(`/changeIsOnline`, {
      isOnline: newStatus,
      id: itemId
    });

    console.log("status changed", itemId, newStatus);

  } catch (error) {

    // rollback if failed
    setAdmins(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, isOnline: clickedItem.isOnline }
          : item
      )
    );

  } finally {
    setActiveToggle(null);
  }
};
  return (
    <section>
      <Header adminName={name} onLogout={handleLogout}/>
      <div>
        <div className="container mx-auto px-4 my-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {loading? (
              <div className="w-full mx-auto">
                <WifiLoaderComponent />
              </div>
            )  :admins.map((item, index) => (
              <Card
        key={index}
        className="animate-fade-up flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ animationDelay: `${item.id * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="mb-2 h-48 p-4 flex items-end justify-between relative">
                        <div
                          className="h-48 w-full  absolute inset-0 z-10 rounded-2xl bg-cover bg-center"
                          style={{
                            backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                            url(${item.image})
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
                      <CardTitle className="text-xl">{item.firstName + ' ' + item.middleName}</CardTitle>
                      <CardDescription>{item.admin}</CardDescription>
    
                      <div className="toggle-wrapper">
                          <Switch isOnline={item.isOnline} onClickedProp={()=>handleToggle(item.id)} itemId={item.id}/>
            {activeToggle === item.id && (
              <span className="loading-dots">...</span>
            )}
          </div>
                    </CardHeader>
                  </Card>
            ))}
          </div>
        </div>
      </div>
      <UploadImage />
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
