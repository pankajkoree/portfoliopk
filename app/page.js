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

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

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
      <div className="relative flex flex-col justify-center md:w-[80%] xl:w-[30%]">
        {/* navigation bar */}
        {/* desktop navigation */}
        <div className="hidden sm:flex sticky top-0 z-50 items-center justify-center w-full md:gap-4 lg:gap-12 p-8 h-12 backdrop-blur-xl bg-white dark:bg-[#18181B]">
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
            className="relative flex p-2 md:p-2 md:scroll-mt-16 lg:p-0 lg:scroll-mt-16"
          >
            <HomePage />
          </div>
          {/* home */}

          {/* skills */}
          <div
            id="skills"
            className="relative flex p-2 md:p-2 md:scroll-mt-16 lg:p-0 lg:scroll-mt-16 lg:top-12"
          >
            <Skills />
          </div>
          {/* skills */}

          {/* projects */}
          <div
            id="projects"
            className="relative flex p-2 md:p-2 md:scroll-mt-16 lg:p-0 lg:scroll-mt-16 lg:top-24"
          >
            <Projects />
          </div>
          {/* projects */}

          {/* contact */}
          <div
            id="contact"
            className="relative flex p-2 md:p-2 md:scroll-mt-16 lg:p-0 lg:scroll-mt-16 lg:top-24"
          >
            <Contact />
          </div>
          {/* contact */}

          {/* footer */}
          <div className="relative flex p-2 md:p-2 md:scroll-mt-16 lg:p-0 justify-center lg:scroll-mt-16 lg:top-24">
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
