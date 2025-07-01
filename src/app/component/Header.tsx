'use client';

import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({
      callbackUrl: '/login',
    });
  };

  return (
    <header className="sticky shadow-md top-0 z-50">
      <nav className="bg-[#15ae70] border-gray-200 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://temudataku.com" className="flex items-center py-2.5 px-3">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-100">
              TemuDataku
            </span>
          </a>

          <div className="flex items-center lg:order-2">
            {status === 'authenticated' ? (
              <button
                onClick={handleLogout}
                className="text-white bg-red-700 hover:bg-red-900 transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
              >
                Log out
              </button>
            ) : (
              <a
                href="/login"
                className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </a>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                >
                  Practice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                >
                  Mentoring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-[#15ae70] hover:bg-[#139c65] transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                >
                  Bootcamp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}