import React, { useState, useEffect } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
let base_url = import.meta.env.VITE_BASE_URL;
base_url = base_url + "/getAllAdminUser";
import axios from "axios";
import Image from "/images/image-6.jpg";

function Administrater() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(base_url)
      .then((response) => {
        setAdmins(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("error When fetching Admin Info");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-accent-foreground flex-col justify-center items-center w-full ">
      <div className="container mx-auto px-4">
        {loading ? (
          <h1 className="text-green-500">Loading.....</h1>
        ) : error ? (
          <h1 className="text-red-500">error</h1>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admins.map((item, index) => (
              <Card
                key={index}
                className="animate-fade-up flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-2 h-60 p-4 flex items-end justify-between relative">
                    <div
                      className="h-60 w-full  absolute inset-0 z-10 rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                        url(${item.image ? item.image : Image})
                      `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "darken",
                      }}
                    ></div>
                    {item.isOnline == 1 ? (
                      <Badge variant="default" className="z-20">
                        {item.isOnline == 1
                          ? "hezb be magelgela lay yegenalu"
                          : ""}
                      </Badge>
                    ) : (
                      ""
                    )}
                  </div>
                  <CardTitle className="text-xl">{item.firstName}</CardTitle>
                  <CardDescription>{item.middleName}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Administrater;
