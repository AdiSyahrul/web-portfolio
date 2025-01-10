import reactLogo from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/MySQL.png";
import cloud from "../assets/googlecloud.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div className="bg-black max-w-[1200px] mx-auto text-gray-400 py-5 mb-16" id="skills">
      <div className="text-center">
        <h2 className="primary-color text-3xl md:text-4xl font-bold mb-12 pb-2">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 place-items-center">
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={html} alt="HTML" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={css} alt="CSS" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={javascript} alt="JavaScript" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={reactLogo} alt="React" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={tailwind} alt="Tailwind CSS" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={mysql} alt="MySQL" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">MySQL</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={cloud} alt="Google Cloud" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">Google Cloud</p>
          </div>
          <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
            <img src={python} alt="Python" className="w-16 h-16 md:w-24 md:h-24" />
            <p className="mt-2">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;