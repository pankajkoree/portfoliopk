import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="relative flex flex-col w-full">
      {/* Navbar heading */}
      <h1 className="text-xl font-bold">Projects</h1>
      {/* end Navbar heading */}

      {/* projects */}
      <div className="relative flex flex-col">
        {/* project 1 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>Currency Converter</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Supports 34 global currencies, provides live exchange rates with
              accuracy, and is optimized for quick conversions.
            </p>
            <Image
              src="/currencyconvertor.png"
              alt="currency convertor"
              width={80}
              height={80}
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 1 */}

        {/* project 2 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>The Shoe Company</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Durable, comfortable footwear for all occasions with fast,
              reliable delivery.
            </p>

            <Image
              src="/theshoecompany.png"
              alt="the shoe company"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 2 */}

        {/* project 3 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>Movie Details Search</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://moviesearchappomdb.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Search movies by title, genre, or actor with ratings and reviews —
              optimized for fast, accurate results.
            </p>

            <Image
              src="/moviedetailssearch.png"
              alt="movie details search"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 3 */}

        {/* project 4 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>Focus On Today</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://focusontoday-vanillajs.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Focus on your top task, break it into steps, and review progress
              by day&apos;s end to mark it complete.
            </p>

            <Image
              src="/focusontoday.png"
              alt="focus on today"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 4 */}

        {/* project 5 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>The Country Project</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://countryproject-manual-deploy.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Detailed economic info with live GDP, inflation, and growth data —
              optimized for exploring stats over time.
            </p>

            <Image
              src="/thecountryproject.png"
              alt="The Country Project"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 5 */}

        {/* project 6 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>The HamBurger</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://hamburgermenuappnweb.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Made with 100% fresh chicken patties, perfectly grilled for
              maximum flavor, and customizable with a variety of toppings.
            </p>

            <Image
              src="/thehamburger.png"
              alt="thehamburger"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 6 */}

        {/* project 7 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>The Weather App</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://weatherappchallengejs.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Provides real-time weather updates for any location, with accurate
              hourly and daily forecasts — optimized for fast and easy tracking.
            </p>

            <Image
              src="/theweatherapp.png"
              alt="The Weather App"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 7 */}

        {/* project 8 */}
        <div className="relative flex flex-col p-2 transition-transform duration-300 ease-in-out hover:translate-x-2">
          {/* title and navigation */}
          <div className="relative flex w-full justify-between">
            <div className="font-semibold">
              <p>Dashboard App</p>
            </div>
            <div className="relative flex gap-4">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Github </p>
              </Link>
              <Link
                href="https://dashboard-tesla-ui.vercel.app/dashboard"
                target="_blank"
              >
                <p className="hover:text-cyan-600">Live </p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Track and manage topics of interest in real time, receive timely
              updates and insights, all through a simple and intuitive
              interface.
            </p>

            <Image
              src="/thedashboard.png"
              alt="Dashboard App"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 8 */}
      </div>
      {/* end projects */}
    </div>
  );
};

export default Projects;
