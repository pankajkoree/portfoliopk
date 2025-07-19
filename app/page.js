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
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <div className="relative flex justify-center w-full">
      <div className="relative flex flex-col justify-center w-[40%]">
        {/* navigation bar */}
        <div className="sticky top-0 z-50 backdrop-blur flex items-center justify-center w-full xl:gap-12 py-2 h-16">
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
        {/* end navigation bar */}

        {/* home */}
        <div id="home" className="scroll-mt-16">
          <HomePage />
        </div>
        {/* home */}

        {/* skills */}
        <div id="skills" className="relative flex scroll-mt-16 top-4">
          <Skills />
        </div>
        {/* skills */}

        {/* projects */}
        <div id="projects" className="relative flex scroll-mt-16 top-4">
          <Projects />
        </div>
        {/* projects */}

        {/* contact */}
        <div id="contact" className="relative flex scroll-mt-16 top-4">
          <Contact />
        </div>
        {/* contact */}

        {/* scroll to top */}
        <ScrollToTop />

        {/* scroll to top */}
      </div>
    </div>
  );
}
