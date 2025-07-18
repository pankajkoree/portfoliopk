import Image from "next/image";

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
          <Image
            src="/javascript.png"
            alt="javascript"
            width={20}
            height={20}
          />
          <Image src="/tailwind.png" alt="tailwind" width={20} height={20} />
          <Image
            src="/typescript.png"
            alt="typescript"
            width={20}
            height={20}
          />
          <Image src="/react.png" alt="react" width={20} height={20} />
          <Image src="/nextjs.png" alt="nextjs" width={20} height={20} />
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
