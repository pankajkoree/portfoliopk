"use client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import coder from "@/public/coder.jpeg";
import linkedin from "@/public/linkedin.png";
import currencyConverter from "@/public/currencyConverter.png";
import theShoeCompany from "@/public/theShoeCompany.png";
import movieDetailsSearch from "@/public/movieDetailsSearch.png";
import focusOnToday from "@/public/focusOnToday.png";
import theCountyProject from "@/public/theCountyProject.png";
import hamburger from "@/public/hamburger.png";
import weatherApp from "@/public/weatherApp.png";
import dashboard from "@/public/dashboard-icon.png";
import download from "@/public/download.png";
import myimage from "@/public/pankaj.png";
import html from "@/public/html.png";
import css from "@/public/css.png";
import js from "@/public/js.png";
import react from "@/public/react.png";
import tailwind from "@/public/tailwind.png";
import node from "@/public/node.png";
import express from "@/public/express.png";
import mongodb from "@/public/database.png";
import mysql from "@/public/mysql.png";
import next from "@/public/next.png";
import vscode from "@/public/vscode.png";
import git from "@/public/git.png";
import postman from "@/public/postman.png";
import shadcn from "@/public/shadcn.jpg";
import npm from "@/public/npm.png";
import aceternity from "@/public/aceternity.png";

export default function Home() {
  const router = useRouter();

  const gotoLinkedIn = () => {
    router.push("https://www.linkedin.com/in/pankaj-koree/");
  };

  const gotoProjects = () => {
    router.push("/projects");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Form submitted successfully");
      e.target.reset();
    } else {
      toast.error("form submission failed");
    }
  };

  return (
    <div>
      {/* home page */}
      <div className="relative flex flex-col items-center mx-auto max-w-full xl:max-w-4xl xl:mt-4 text-center px-4">
        <Image
          src={coder}
          alt="cartoon profile"
          className="h-[120px] xl:h-[250px] w-[120px] xl:w-[250px] rounded-full mt-6 xl:mt-8"
        />

        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
          🟢 Available for new projects
        </p>

        <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-4 font-serif">
          Crafting seamless, full-stack digital experiences with precision
        </h2>

        <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-3xl mt-2 max-w-3xl font-mono">
          I&apos;m <span className="text-blue-600">Pankaj Kori</span>, a{" "}
          <span className="text-purple-600">full-stack developer</span> with a
          passion for building fast, scalable, and visually engaging web
          applications, combining front-end creativity with back-end efficiency
          to deliver seamless user experiences.
        </h3>

        <div className="relative flex flex-col xl:flex-row gap-4 m-4 xl:mt-8">
          <Button
            variant="outline"
            onClick={gotoProjects}
            className="relative xl:text-2xl xl:p-6 font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            Explore my work{" "}
            <span className="ml-2 inline-block animate-bounce">⬇️</span>
          </Button>
          <Button
            variant="outline"
            onClick={gotoLinkedIn}
            className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="ml-2 inline-block">
              <Image
                src={linkedin}
                alt="linkedin"
                className="w-[25px] h-[25px]"
              />
            </span>
            Let&apos;s connect
          </Button>
        </div>
      
      {/* end home page */}

      {/* projects page */}
      <div>
        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              Currency converter
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Supports 34 global currencies</div>
              <div>✅ Provides live exchange rates with accuracy</div>
              <div>✅ Optimized for quick conversions</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={currencyConverter}
              alt="currencyConverter"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              The Shoe Company
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Wide variety of footwear styles for all occasions</div>
              <div>
                ✅ High-quality materials ensuring durability and comfort
              </div>
              <div>✅ Fast and reliable delivery to your doorstep</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={theShoeCompany}
              alt="theShoeCompany"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              Movie Details Search
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Search for movies by title, genre, or actor</div>
              <div>
                ✅ Displays detailed movie information including ratings and
                reviews
              </div>
              <div>✅ Optimized for fast and accurate search results</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://moviesearchappomdb.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={movieDetailsSearch}
              alt="movieDetailsSearch"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              Focus on Today
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>
                ✅ Focus on the most important task today and finish it by the
                end of the day
              </div>
              <div>
                ✅ Break down your tasks into manageable steps to stay on track
                and complete them
              </div>
              <div>
                ✅ Review your progress at the end of the day and mark each task
                as completed
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="https://focusontoday-vanillajs.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={focusOnToday}
              alt="focusOnToday"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              The Country Project
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>
                ✅ Provides detailed information about the country&apos;s
                economy
              </div>
              <div>
                ✅ Shows live data on the country&apos;s GDP, inflation, and
                growth
              </div>
              <div>
                ✅ Optimized for exploring historical and current statistics
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="https://countryproject-manual-deploy.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={theCountyProject}
              alt="theCountyProject"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              The HamBurger
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Made with 100% fresh chicken patties</div>
              <div>✅ Offers a variety of toppings to choose from</div>
              <div>✅ Perfectly grilled for maximum flavor</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://hamburgermenuappnweb.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={hamburger}
              alt="hamburger"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              The Weather App
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Provides real-time weather updates for any location</div>
              <div>✅ Accurate hourly and daily forecasts</div>
              <div>✅ Optimized for fast and easy weather tracking</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://weatherappchallengejs.netlify.app/"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={weatherApp}
              alt="weatherApp"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
          <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
              Dashboard App
            </h1>
            <hr />
            <div className="relative flex flex-col gap-4 mt-4">
              <div>✅ Track and manage topics of interest in real time</div>
              <div>✅ Receive timely updates and insights</div>
              <div>✅ Simple and intuitive interface for easy navigation</div>
            </div>
            <div className="mt-8">
              <Link
                href="https://dashboard-tesla-ui.vercel.app/dashboard"
                target="_blank"
              >
                <Button variant="live">View live ↗</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
            <Image
              src={dashboard}
              alt="dashboard"
              className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
            />
          </div>
        </div>
      </div>
      {/* end projects page */}

      {/* about page */}
      <div>
        {/* start of introduction */}
        <div>
          <div className="flex flex-col bg-white border-2 border-blue-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-3 xl:p-6">
            <div>
              <h1 className="text-[16px] md:text-xl xl:text-2xl font-bold">
                ✨Who Am I?
              </h1>
              <p className="text-[16px] xl:text-xl mb-6">
                Turning Vision into Reality with Code That Creates Impact
              </p>
            </div>

            <div className="relative flex flex-col md:flex-row gap-2 xl:gap-4">
              <div>
                <Image
                  src={myimage}
                  alt="myimage"
                  className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] mx-auto"
                />
              </div>
              <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-2 md:w-[60%] xl:w-[60%]">
                <h2 className="text-xl xl:text-2xl font-semibold mb-2 text-center md:text-left xl:text-left">
                  <span className="text-green-700">Hi, I&apos;m</span> <br />
                  <span className="text-purple-600">Pankaj Kori</span>
                </h2>

                <p className="text-[14px] md:text-[16px] xl:text-xl">
                  Aspiring Full Stack Developer pursuing Bachelor of Technology
                  in Computer Science and Engineering. Proficient in HTML, CSS,
                  JavaScript, React JS, Next JS. Seeking an entry-level position
                  to gain hands-on experience and contribute to the team.
                </p>

                <a
                  href="https://drive.google.com/file/d/1hJs5uA-94PIJlNUVbP_wIaWPYaHrUNI7/view?usp=sharing"
                  target="_blank"
                  rel="resume"
                  className="relative flex justify-center items-center text-16px xl:text-xl p-2 mt-4 text-white bg-blue-500 dark:bg-purple-700 dark:text-white shadow-md transition duration-300 rounded-full"
                >
                  <Image
                    src={download}
                    alt="download"
                    className="w-[20px] h-[20px] mr-2"
                  />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of introduction */}

        {/* start of tech skills */}
        <div className="relative flex flex-col md:flex-row gap-4">
          {/* front-end */}
          <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
            <div>
              <h1 className="text-xl font-bold">✨Frontend</h1>
              <p className="text-lg mb-6">
                Building responsive and modern interfaces
              </p>
            </div>

            <div className="relative flex gap-2 flex-wrap">
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[120px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={html} alt="html" className="w-[20px] h-[20px]" />
                <a href="https://html.spec.whatwg.org/" target="_blank">
                  HTML
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={css} alt="css" className="w-[20px] h-[20px]" />
                <a
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  target="_blank"
                >
                  CSS
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={js} alt="js" className="w-[20px] h-[20px]" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  JavaScript
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={react} alt="react" className="w-[20px] h-[20px]" />
                <a href="https://react.dev/" target="_blank">
                  React JS
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={tailwind}
                  alt="tailwind"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind
                </a>
              </div>
            </div>
          </div>
          {/* end of front-end */}

          {/* start of backend */}
          <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
            {/* Add your backend skills content here */}
            <div>
              <h1 className="text-xl font-bold">✨Backend</h1>
              <p className="text-lg mb-6">
                Creating robust server-side applications
              </p>
            </div>

            <div className="relative flex gap-2 flex-wrap">
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[135px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={node} alt="node" className="w-[20px] h-[20px]" />
                <a href="https://nodejs.org/en" target="_blank">
                  Node JS
                </a>
              </div>

              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={express}
                  alt="express"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://expressjs.com/" target="_blank">
                  Express JS
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={next} alt="next" className="w-[20px] h-[20px]" />
                <a href="https://nextjs.org/" target="_blank">
                  Next JS
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[160px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={mongodb}
                  alt="mongodb"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://www.mongodb.com/" target="_blank">
                  Mongo DB
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[160px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={mysql} alt="mysql" className="w-[20px] h-[20px]" />
                <a href="https://www.mysql.com/" target="_blank">
                  MySQL
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of tech skills */}

        <div className="relative flex flex-col md:flex-row gap-4]">
          {/* tools and software */}
          <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
            <div>
              <h1 className="text-xl font-bold">✨Tools & Software</h1>
              <p className="text-lg mb-6">
                Utilizing tools and software to enhance productivity
              </p>
            </div>

            <div className="relative flex gap-2 flex-wrap">
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[120px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={vscode}
                  alt="vscode"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://code.visualstudio.com/" target="_blank">
                  VS code
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={git} alt="git" className="w-[20px] h-[20px]" />
                <a href="https://git-scm.com/" target="_blank">
                  Git
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={postman}
                  alt="postman"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://www.postman.com/" target="_blank">
                  Postman
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={shadcn}
                  alt="shadcn"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://ui.shadcn.com/" target="_blank">
                  Shadcn UI
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image
                  src={aceternity}
                  alt="aceternity"
                  className="w-[20px] h-[20px]"
                />
                <a href="https://ui.aceternity.com/" target="_blank">
                  Aceternity UI
                </a>
              </div>
              <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
                <Image src={npm} alt="npm" className="w-[20px] h-[20px]" />
                <a href="https://www.npmjs.com/" target="_blank">
                  NPM
                </a>
              </div>
            </div>
          </div>
          {/* end of tools and software */}
        </div>
      </div>
      {/* end about page */}

      {/* contact page */}

      <div>
        <div className="relative flex flex-col xl:p-4 xl:mx-auto justify-center border border-blue-200 xl:hover:shadow-md xl:hover:shadow-green-300 max-w-full xl:max-w-4xl rounded-xl p-4 xl:m-16 text-gray-700 dark:text-white">
          <h2 className="text-xl xl:text-2xl font-bold text-center mb-4 sm:mb-6">
            Contact Me
          </h2>
          <p className="text-center text-gray-600 dark:text-white mb-2 sm:mb-8">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
              >
                Name:
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="h-[45px] sm:h-[50px] rounded-xl border border-blue-300"
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
              >
                Email:
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="h-[45px] sm:h-[50px] rounded-xl border-blue-300"
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="message"
                className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
              >
                Message:
              </Label>
              <Textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message..."
                required
                className="h-[90px] xl:h-[120px] rounded-xl border-blue-300"
              ></Textarea>
            </div>

            <div className="text-center">
              <Button
                variant="submit"
                type="submit"
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* end contact page */}
    </div>

    </div>
  );
}
