"use client";

import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  const changeTheme = () => {
    console.log("dark mode activated");
  };
  return (
    <div className="relative flex justify-center w-full">
      <div className="relative flex justify-center w-[50%] bg-red-500">
        {/* navigation bar */}
        <div className="relative flex items-center justify-center w-full xl:gap-12">
          <div className="relative flex justify-center">
            <NavigationBar />
          </div>
          <div className="relative flex hover:cursor-pointer">
            <p onClick={changeTheme}>🌙</p>
          </div>
        </div>

        {/* end navigation bar */}
      </div>
    </div>
  );
}
