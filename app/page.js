"use client";

// next lib imported
import Image from "next/image";
import { useState } from "react";

// components imported
import NavigationBar from "@/components/NavigationBar";
import HomePage from "@/components/Home";

// images imported
import lightMode from "@/public/lightMode.png";
import darkMode from "@/public/darkMode.png";

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
  return (
    <div className="relative flex justify-center w-full">
      <div className="relative flex flex-col justify-center w-[50%]">
        {/* navigation bar */}
        <div className="relative flex items-center justify-center w-full xl:gap-12">
          <div className="relative flex justify-center">
            <NavigationBar />
          </div>
          <div className="relative flex hover:cursor-pointer">
            <div onClick={changeTheme}>
              {isDarkMode ? (
                <div>
                  <Image
                    src={lightMode}
                    alt="light mode"
                    width={16}
                    height={16}
                  />
                </div>
              ) : (
                <div>
                  <Image
                    src={darkMode}
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
        <HomePage />
        {/* home */}
      </div>
    </div>
  );
}
