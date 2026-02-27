import React from "react";

function Login() {
  return (
    <section className="flex justify-center items-center min-h-screen max-w-screen overflow-clip bg-primary">
      <div className="flex w-[70vw] md:w-[40vw]  mx-auto flex-col justify-center px-6 py-12 lg:px-8 border-2 h-[90vh] border-gray-500 rounded-2xl shadow drop-shadow-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="images/logo.webp"
            alt="Amhara Regional Government Debereberhan Kebele Etege Taytu subcity website"
            className="mx-auto h-20 w-auto rounded-full"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            እንኳን ወደ ደብረብርሃን ከተማ አስተዳደር እቴጌ ጣይቱ ክፍለከተማ ሸዋረገድ ገድል ቀበሌ ድህረገጽ
            ማስተዳደሪያ በደህና መጡ
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                የ መጀመሪያ ስም
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  የ ሚስጥር ቁጥር
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                ወደ ድህረገጽ ለመግባት
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
