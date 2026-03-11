import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "../Header";
import { useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import api from "@/lib/api";
import { WifiLoaderComponent } from "../ui/WifiLoaderComponent";
import { useNavigate } from "react-router-dom";
// i will get the news id from the url and then fetch the news data using the id and then display the news data in the form and then i will update the news data in the database using the id

function Edit() {
  const { t } = useLanguage();
  const { id } = useParams(); // Extract the dynamic 'id'
  const [idState, setIdState] = useState(id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [body, setBody] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate("/admin");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    const preview = URL.createObjectURL(file);
    setImageUrl(preview);
  };
  let no_image: Boolean = false;
  const newsItems = [
    {
      id: 1,
      title: "በቀበሌው የፅዳት ስራ",
      description: "አካባቢያችንን ከ ቆሻሻ ማጽዳት የ ሁላችንም ሀላፊነት መሆኑ ተገለጸ።",
      date: "2024-03-15",
      category: "በቀበሌው የፅዳት ስራ",
      image: "@/images/image-1.webp",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", idState);
    formData.append("title", title);
    formData.append("subHeading", subHeading);
    formData.append("body", body);
    formData.append("editedImage", image);

    try {
      setUpdateLoading(true);
      setUpdateError("");

      await api.put("http://localhost:8080/editNews", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Uploaded successfully");
      setUpdateLoading(false);
      setTitle("");
      setSubHeading("");
      setBody("");
      setImage(null);
      setImageUrl(null);
    } catch (err) {
      console.error(err);
      setUpdateError("error When fetching Admin Info");
      setUpdateLoading(false);
    }
  };
  useEffect(() => {
    api
      .get(`/editNews/${id}`)
      .then((response) => {
        setImageUrl(response.data[0].image ? response.data[0].image : "");
        setTitle(response.data[0].title ? response.data[0].title : "");
        setBody(response.data[0].body ? response.data[0].body : "");
        setSubHeading(
          response.data[0].sub_heading ? response.data[0].sub_heading : "",
        );
        setLoading(false);
      })
      .catch((err) => {
        setError("error When fetching Admin Info");
        setLoading(false);
      });
  }, [id]);

  const handleNewsdelete = (e) => {
    e.preventDefault();
    const deleteNews = async () => {
      try {
        setUpdateLoading(true);
        setUpdateError("");

        goToAdmin();
        await api.delete(`/deleteNews/${id}`);
        alert("delated successfully");
        setUpdateLoading(false);
      } catch (e) {
        console.log(e);
        setUpdateLoading(false);
      }
    };
    deleteNews();
  };
  return (
    <section>
      <Header />
      {loading ? (
        <div>
          <WifiLoaderComponent />
        </div>
      ) : (
        <div className="container mx-auto px-4 my-8">
          <img
            src={imageUrl}
            alt="Profile"
            className={cn("w-full h-60  object-cover", no_image && "hidden")}
          />
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-4 border border-default-medium rounded-base bg-primary/10 rounded-2xl shadow-xs my-4 border-b-2 border-primary">
              <div className="px-4 py-2 bg-neutral-secondary-medium rounded-t-base border-b border-default-medium">
                <label htmlFor="comment" className="sr-only">
                  የ ዜና ወይም የ መልእክቱ ርዕስ። እዚህ ጋር ያስቀምጡ።
                </label>
                <textarea
                  id="comment"
                  name="title"
                  rows={3}
                  className="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body"
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={title}
                  required
                ></textarea>
              </div>
              <div className="px-4 py-2 border-b">
                <textarea
                  rows={2}
                  value={subHeading}
                  onChange={(e) => setSubHeading(e.target.value)}
                  className="block w-full text-sm bg-transparent border-0 focus:ring-0"
                  required
                />
              </div>
              <div className="px-4 py-2 bg-neutral-secondary-medium rounded-t-base">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  className="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body"
                  onChange={(e) => setBody(e.target.value)}
                  defaultValue={body}
                  required
                ></textarea>
              </div>
              <div className="flex items-center px-3 py-2 border-t border-default-medium">
                <button
                  type="submit"
                  className="text-white cursor-pointer hover:bg-primary/80 bg-primary/90 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                >
                  yetestekakelewn lemaserachet
                </button>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    className="p-2 cursor-pointer text-body rounded-sm  hover:text-heading hover:bg-neutral-tertiary-medium"
                  >
                    <label className="ml-4 cursor-pointer">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </button>
                  <button
                    onClick={handleNewsdelete}
                    className="py-2 px-3 bg-red-300 text-white cursor-pointer rounded-sm hover:bg-red-400"
                  >
                    Delete This news
                  </button>
                  <div>{updateLoading ? <WifiLoaderComponent /> : ""}</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Edit;
