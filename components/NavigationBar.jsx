"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavigationBar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const gotoHome = () => {
    router.push("/");
    setMenuOpen(false);
  };

  const gotoProjects = () => {
    router.push("/projects");
    setMenuOpen(false);
  };

  const gotoAbout = () => {
    router.push("/about");
    setMenuOpen(false);
  };

  const gotoContact = () => {
    router.push("/contact");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center mt-4">
      {/* Mobile Menu Icon */}
      <div className="flex justify-start w-full md:hidden">
        <button onClick={toggleMenu} className="p-2 text-black dark:text-white">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          {/* Toggle icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-500 dark:to-gray-800 p-4 rounded-lg shadow-lg absolute top-12 left-0 w-40 z-50">
          {/* Align items to the left */}
          <Button
            variant="nav"
            onClick={gotoHome}
            className="my-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full text-left"
          >
            Home
          </Button>
          <Button
            variant="nav"
            onClick={gotoProjects}
            className="my-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full text-left"
          >
            Projects
          </Button>
          <Button
            variant="nav"
            onClick={gotoAbout}
            className="my-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full text-left"
          >
            About
          </Button>
          <Button
            variant="nav"
            onClick={gotoContact}
            className="my-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full text-left"
          >
            Contact
          </Button>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-500 dark:to-gray-800 p-2 xl:p-3 rounded-full shadow-lg mx-auto">
        {/* Centered with auto margins */}
        <div className="flex space-x-4 w-full justify-center">
          {/* Flex for equal spacing */}
          <Button
            variant="nav"
            onClick={gotoHome}
            className="px-4 py-2 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
          >
            Home
          </Button>
          <Button
            variant="nav"
            onClick={gotoProjects}
            className="px-4 py-2 text-white  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
          >
            Projects
          </Button>
          <Button
            variant="nav"
            onClick={gotoAbout}
            className="px-4 py-2 text-white  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
          >
            About
          </Button>
          <Button
            variant="nav"
            onClick={gotoContact}
            className="px-4 py-2 text-white  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
