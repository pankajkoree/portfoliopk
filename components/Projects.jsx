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
        <div className="relative flex flex-col p-2">
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
                <p className="hover:text-cyan-800">Github ⎆</p>
              </Link>
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-800">Live ⎆</p>
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
        <div className="relative flex flex-col p-2">
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
                <p className="hover:text-cyan-800">Github ⎆</p>
              </Link>
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-800">Live ⎆</p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Wide variety of footwear styles for all occasions, high-quality
              materials ensuring durability and comfort, and fast, reliable
              delivery to your doorstep.
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
        {/* end project 2 */}


        {/* project 2 */}
        <div className="relative flex flex-col p-2">
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
                <p className="hover:text-cyan-800">Github ⎆</p>
              </Link>
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-800">Live ⎆</p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Wide variety of footwear styles for all occasions, high-quality
              materials ensuring durability and comfort, and fast, reliable
              delivery to your doorstep.
            </p>

            <Image
              src="/theshoecompany.png"
              alt="currency convertor"
              width={80}
              height={80}
            />
          </div>
          {/* end description and image */}
        </div>
        {/* end project 2 */}


        {/* project 2 */}
        <div className="relative flex flex-col p-2">
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
                <p className="hover:text-cyan-800">Github ⎆</p>
              </Link>
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <p className="hover:text-cyan-800">Live ⎆</p>
              </Link>
            </div>
          </div>
          {/* end title and navigation */}
          {/* description and image */}
          <div className="ralative flex items-center">
            <p>
              Wide variety of footwear styles for all occasions, high-quality
              materials ensuring durability and comfort, and fast, reliable
              delivery to your doorstep.
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
        {/* end project 2 */}
      </div>
      {/* end projects */}
    </div>
  );
};

export default Projects;
