"use client";

// next lib imported
import Image from "next/image";
import { useEffect, useState } from "react";

// components imported
import NavigationBar from "@/components/NavigationBar";
import HomePage from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NavigationBarMobile from "@/components/NavigationBarMobile";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const path = window.location.pathname;

    const validPaths = ["/", "/skills", "/projects", "/contact"];
    const id = path === "/" ? "home" : path.slice(1);

    if (validPaths.includes(path)) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row lg:flex-row xl:flex-row  justify-center w-full">
      {/* mobile navigation */}

      {/* mobile menu icon */}
      <div className="relative flex justify-between p-2 md:hidden lg:hidden xl:hidden">
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}

        <div className="relative flex hover:cursor-pointer">
          <div onClick={changeTheme}>
            {isDarkMode ? (
              <div>
                <Image
                  src="/lightmode.png"
                  alt="light mode"
                  width={16}
                  height={16}
                />
              </div>
            ) : (
              <div>
                <Image
                  src="/darkmode.png"
                  alt="dark mode"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* end mobile menu icon */}

      {menuOpen && (
        <div className="relative flex">

          <NavigationBarMobile />
        </div>
      )}
      {/* end mobile navigation */}

      <div className="relative flex flex-col justify-center w-[30%]">
        {/* navigation bar */}
        {/* desktop navigation */}
        <div className="hidden sm:flex sticky top-0 z-50 items-center justify-center w-full xl:gap-12 p-8 h-12 backdrop-blur-xl bg-white dark:bg-[#18181B]">
          <div className="relative flex justify-center">
            <NavigationBar />
          </div>
          <div className="relative flex hover:cursor-pointer">
            <div onClick={changeTheme}>
              {isDarkMode ? (
                <div>
                  <Image
                    src="/lightmode.png"
                    alt="light mode"
                    width={16}
                    height={16}
                  />
                </div>
              ) : (
                <div>
                  <Image
                    src="/darkmode.png"
                    alt="dark mode"
                    width={16}
                    height={16}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* end desktop navigation */}
        {/* end navigation bar */}

        <div>
          {/* home */}
          <div
            id="home"
            className="relative hidden sm:flex lg:flex xl:flex scroll-mt-16"
          >
            <HomePage />
          </div>
          {/* home */}

          {/* skills */}
          <div
            id="skills"
            className="relative hidden sm:flex lg:flex xl:flex scroll-mt-16 top-12"
          >
            <Skills />
          </div>
          {/* skills */}

          {/* projects */}
          <div
            id="projects"
            className="relative hidden sm:flex lg:flex xl:flex scroll-mt-16 top-24"
          >
            <Projects />
          </div>
          {/* projects */}

          {/* contact */}
          <div
            id="contact"
            className="relative hidden sm:flex lg:flex xl:flex  scroll-mt-16 top-24"
          >
            <Contact />
          </div>
          {/* contact */}

          {/* footer */}
          <div
            id="contact"
            className="relative hidden sm:flex lg:flex xl:flex justify-center scroll-mt-16 top-24"
          >
            <Footer />
          </div>
          {/* end footer */}
        </div>
      </div>

      {/* toaster for notification */}

      <Toaster position="top-center" reverseOrder={false} />

      {/* toaster for notification */}
    </div>
  );
}
