import React, { useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import api from "@/lib/api";
function UploadImage() {
  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [body, setBody] = useState("");

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const no_image = !imageUrl;

  // handle file select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    const preview = URL.createObjectURL(file);
    setImageUrl(preview);
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", '1');
    formData.append("title", title);
    formData.append("subHeading", subHeading);
    formData.append("body", body);
    formData.append("image", image);

    try {
      await api.post("http://localhost:8080/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Uploaded successfully");

      setTitle("");
      setSubHeading("");
      setBody("");
      setImage(null);
      setImageUrl(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex w-screen justify-between items-center h-12 bg-[#1a4331]/95 text-white px-12 my-8">
        <div>
          <h1 className="text-sm md:text-xl">
            ዜና ለማስተላለፍ ከታች ያለውን ይጠቀሙ።
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">

        {/* IMAGE PREVIEW */}
        <img
          src={imageUrl}
          alt="Preview"
          className={cn("w-full h-80 object-cover mb-4", no_image && "hidden")}
        />

        <form onSubmit={handleSubmit}>
          <div className="w-full mb-4 border border-default-medium rounded-base bg-primary/10 rounded-2xl shadow-xs my-4 border-b-2 border-primary">

            {/* TITLE */}
            <div className="px-4 py-2 border-b">
              <textarea
                rows={2}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full text-sm bg-transparent border-0 focus:ring-0"
                placeholder="የ ዜና ርዕስ"
                required
              />
            </div>

            {/* SUB HEADING */}
            <div className="px-4 py-2 border-b">
              <textarea
                rows={2}
                value={subHeading}
                onChange={(e) => setSubHeading(e.target.value)}
                className="block w-full text-sm bg-transparent border-0 focus:ring-0"
                placeholder="ንዑስ ርዕስ "
                required
              />
            </div>

            {/* BODY */}
            <div className="px-4 py-2">
              <textarea
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="block w-full text-sm bg-transparent border-0 focus:ring-0"
                placeholder="ዝርዝር መረጃ"
                required
              />
            </div>

            {/* ACTIONS */}
            <div className="flex items-center px-3 py-2 border-t">

              <button
                type="submit"
                className="text-white cursor-pointer bg-primary px-3 py-2 rounded-base text-sm"
              >
                ዜናውን ለማሰራጨት ይህን ይጫኑ።
              </button>

              {/* IMAGE INPUT */}
              <label className="ml-4 cursor-pointer">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UploadImage;