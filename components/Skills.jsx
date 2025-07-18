import Image from "next/image";

// images
import react from "@/public/React.png";
import tailwind from "@/public/Tailwind.png";
import javascript from "@/public/JavaScript.png";
import typescript from "@/public/TypeScript.png";
import nextjs from "@/public/NextJS.png";
const Skills = () => {
  return (
    <div className="relative flex flex-col">
      {/* frontend */}
      <div>
        <div>
          <h1 className="text-xl font-bold">✨Frontend</h1>
          <p className="text-lg mb-6">
            Building responsive and modern interfaces
          </p>
        </div>
        <div>
          <Image src={javascript} alt="javascript" />
        </div>
      </div>
      {/* frontend */}

      {/* backend */}

      <div>
        <h1 className="text-xl font-bold">✨Backend</h1>
        <p className="text-lg mb-6">Creating robust server-side applications</p>
      </div>
      {/* backend */}

      {/* tools and softwares */}
      <div>
        <h1 className="text-xl font-bold">✨Tools & Software</h1>
        <p className="text-lg mb-6">
          Utilizing tools and software to enhance productivity
        </p>
      </div>
      {/* tools and softwares */}
    </div>
  );
};
export default Skills;
