"use client";

import NavigationBar from "@/components/NavigationBar";
import { useState } from "react";

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
      <div className="relative flex justify-center w-[50%]">
        {/* navigation bar */}
        <div className="relative flex items-center justify-center w-full xl:gap-12">
          <div className="relative flex justify-center">
            <NavigationBar />
          </div>
          <div className="relative flex hover:cursor-pointer">
            <p onClick={changeTheme}>{isDarkMode ? "🌞" : "🌙"}</p>
          </div>
        </div>

        {/* end navigation bar */}
      </div>
    </div>
  );
}
