import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// i will get the news id from the url and then fetch the news data using the id and then display the news data in the form and then i will update the news data in the database using the id

function Edit() {
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
      image: "@/images/image-1.webp",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-8">
        <img
          src={newsItems[0].image}
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
                value={newsItems[0].title}
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
                value={newsItems[0].description}
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
    </section>
  );
}

export default Edit;
