import React from "react";
import aboutImg from "../assets/adi.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto py-10 mt-[80px]" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16 flex items-center justify-center">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-justify lg:text-lg">
            I am a graduate of Computer Engineering from Institut Teknologi Sepuluh Nopember (ITS). I have honed skills in web development, from frontend to backend, while engaging with various technologies and tools like HTML, CSS, JavaScript, React, and cloud computing. I am passionate about building efficient, user-friendly applications and am always exploring new technologies to expand my skillset. <br/><br/>
            Currently, I am focusing on enhancing my skills in web development to stay updated with the latest trends and technologies, ensuring that I can adapt to the evolving demands of the industry. As I observe the rapid growth of the digital world, I'm also exploring the field of data analysis. I'm excited about expanding my career into this area to harness the power of data and contribute to informed decision-making processes.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
