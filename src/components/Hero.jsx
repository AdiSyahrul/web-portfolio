import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profileNoBg.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 max-w-[1200px] md:h-[60vh] mx-auto py-4 bg-black mt-[150px]" id="/">
      <div className="col-span-1 my-auto mx-auto w-[300px] sm:w-[300px] lg:w-[400px]">
        <img src={profileImg} alt="profile" />
      </div>

      <div className="col-span-2 px-5 sm:px-6 my-auto mx-auto">
        <h1 className="text-white text-4xl sm:text-4xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={["Frontend Dev", 1000, "Backend Dev", 1000, "Cloud Dev", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg mx-auto my-6 lg:text-xl">
          I'm Adi Syahrul Setya Budi, a tech enthusiast passionate about web development, cloud computing, and creating solutions that make an impact.
        </p>
        
        <div className="my-8">
          <a
            href="https://drive.google.com/file/d/1OWYyU872XssJ55RDp247p5c8DIdkemFF/view?usp=drive_link"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-[#2596be] to-[#2596be] text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-[#2596be] to-[#2596be] text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
