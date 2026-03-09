import { Heading } from "lucide-react";
import React from "react";

function ManageUsersPage() {
  return (
    <section>
      <nav className="bg-green-100/50 text-primary px-6 py-4 text-2xl md:text-lg font-bold">
        register new admin here
      </nav>
      <div className="">
        <div className="w-1/3">
          <h4 className="text-center text-2xl p-4">add new user</h4>
          <div>
            <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form method="POST">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="username"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                          autoComplete="username"
                          type="text"
                          name="username"
                          id="username"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Middle name
                      </label>
                      <div className="mt-1">
                        <input
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                          autoComplete="email"
                          type="email"
                          name="email"
                          id="email"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="confirm-email"
                      >
                        last name
                      </label>
                      <div className="mt-1">
                        <input
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                          autoComplete="email"
                          type="email"
                          name="confirm-email"
                          id="confirm-email"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                          autoComplete="current-password"
                          type="password"
                          name="password"
                          id="password"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="confirm-password"
                      >
                        catigory
                      </label>
                      <div className="mt-1">
                        <input
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                          autoComplete="current-password"
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-secondary bg-primary hover:primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/75"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default ManageUsersPage;
