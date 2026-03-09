import React,{useState,useEffect} from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import Switch from "@/components/ui/Switch";
import dateTimeConverter from "@/lib/ethiopian_date_time_converter";
import { EthDateTime } from 'ethiopian-calendar-date-converter';
import { format } from 'date-fns';
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
import UploadImage from "@/components/admin/UploadImage";
import defaultImage from "/images/image-6.jpg"
function Admin() {
  const [date, setDate] = useState(null);
  const { t, language } = useLanguage();
  const [admins,setAdmins] = useState([]);
  const [loading,setLoading] = useState(false);
  const [activeToggle, setActiveToggle] = useState(null);
  const [imageUrl,setImageUrl] = useState(defaultImage);
  const [news,setNews] = useState([]);
  const [error,setError] = useState("");
  const [newsLoader,setNewsLoader] = useState(false);
  
  
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
  const fetchNews = async () =>{
    setNewsLoader(true);
    try {
      const response = await axios.get("http://localhost:8080/news");
      setNews(response.data);
      setNewsLoader(false);
    } catch (err) {
      setError("faild to fetch");
      setNewsLoader(false);
    }
  }

  const fetchAdminUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get("/getAllAdminUser");

      setAdmins(res.data);
      if (res.data[0].image !== null) {
        setImageUrl(res.data[0].image);
      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  fetchAdminUsers();
  fetchNews();

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
const handleDateConversion = (timestamp)=>{
   try {
      // 1. Create a JavaScript Date object from the ISO string
      const dateInput = format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');

      const dateObj = new Date(dateInput);


      // 2. Convert the European/Gregorian date to Ethiopian date using the library
      const ethDateTime = EthDateTime.fromEuropeanDate(dateObj)

      const formattedDate = `${ethDateTime.year}-${ethDateTime.month.toString().padStart(2, '0')}-${ethDateTime.getDay.toString().padStart(2, '0')}`;
      const formattedTime = `${ethDateTime.hour.toString().padStart(2, '0')}:${ethDateTime.minute.toString().padStart(2, '0')}:${ethDateTime.second.toString().padStart(2, '0')}`;
      const formatedDateTime = ethDateTime;
      return formatedDateTime;
    } catch (error) {
      console.error("Error converting date:", error);
      return "erre ";
    }

}
  return (
    <section>
      <Header adminName={name} onLogout={handleLogout}/>
      <div>
        <div className="container mx-auto px-4 my-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {loading? (
              <div className="w-full mx-auto text-green-400">
                loading
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
                            url(${imageUrl})
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
          {news.map((item, index) => (
            <Card
              key={item.id}
              className="animate-fade-up flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-2 h-48 p-4 flex items-end justify-between relative">
                  <div
                    className="h-48 w-ful absolute inset-0 z-10 rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage: `
                        url(${item.image})
                      `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "darken",
                    }}
                  ></div>
                  {item.subHeading && (
                    <Badge variant="secondary" className="z-20 ">
                    {item.sub_heading}
                  </Badge>
                  )}
                </div>
                <div className="text-[12px] font-light text-gray-600">
                  
                  <p>ዜናው የተላለፈበት ስዐት፡ {}</p>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
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
