import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative flex flex-col">
      <h1 className="text-2xl font-bold">Skills</h1>
      {/* frontend */}
      <div>
        <div>
          <h1 className="text-xl font-bold">✨Frontend</h1>
          <p className="text-lg mb-6">
            Building responsive and modern interfaces
          </p>
        </div>
        <div className="relative flex gap-12">
          <div>
            <Image
              src="/javascript.png"
              alt="javascript"
              width={40}
              height={40}
            />
            <p>JavaScript</p>
          </div>

          <div>
            <Image src="/tailwind.png" alt="tailwind" width={40} height={40} />
            <p>Tailwind</p>
          </div>
          <div>
            <Image
              src="/typescript.png"
              alt="typescript"
              width={40}
              height={40}
            />
            <p>TypeScript</p>
          </div>
          <div>
            <Image src="/react.png" alt="react" width={40} height={40} />
            <p>React</p>
          </div>
          <div>
            <Image src="/nextjs.png" alt="nextjs" width={40} height={40} />
            <p>NextJS</p>
          </div>
        </div>
      </div>
      {/* frontend */}

      {/* backend */}

      <div>
        <div>
          <h1 className="text-xl font-bold">✨Backend</h1>
          <p className="text-lg mb-6">
            Creating robust server-side applications
          </p>
        </div>
        <div className="relative flex gap-12">
          <div>
            <Image src="/nodejs.png" alt="nodejs" width={40} height={40} />
            <p>Node JS</p>
          </div>
          <div>
            <Image src="/express.png" alt="expressjs" width={40} height={40} />
            <p>Express JS</p>
          </div>
          <div>
            <Image src="/mongodb.png" alt="mongodb" width={40} height={40} />
            <p>MongoDB</p>
          </div>
          <div>
            <Image src="/mysql.png" alt="mysql" width={40} height={40} />
            <p>MySQL</p>
          </div>
        </div>
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
