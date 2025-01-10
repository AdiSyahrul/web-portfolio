import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="projects">
      <div className="pb-8">
        <h2 className="text-4xl mb-3 font-bold primary-color leading-normal">Projects</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={project1} alt="" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-90 backdrop-blur-sm bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider shadow-md">
              Angkasa Web App
            </span>
            <div className="pt-8 text-center">
              <p className="text-black text-base font-semibold text-center">
                Angkasa is a web application for booking flight tickets. Built
                with React JavaScript and Tailwind CSS, this project features
                OAuth authentication and integrated payment systems. This
                project was developed as part of the Binar Academy program.
              </p>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={project2} alt="" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-90 backdrop-blur-sm bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider shadow-md">
              PatyPet
            </span>
            <div className="pt-8 text-center">
              <p className="text-black text-base font-semibold text-center">
                PatyPet is an Android app that identifies pet breeds from photos
                and recommends related products. Developed with a Python Flask
                backend, deployed on Google Cloud, and integrated with MySQL for
                seamless interaction with the Android app. This project was
                developed as a part of Bangkit Academy program
              </p>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={project3} alt="" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-90 backdrop-blur-sm bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider shadow-md">
              DemiWatch
            </span>
            <div className="pt-8 text-center">
              <p className="text-black text-base font-semibold text-center">
                DemiWatch is a web-based application for searching and
                displaying detailed movie information. The backend was built
                using Express JavaScript, with MongoDB as the database to store
                data and manage connections. The application integrates hardware
                with the Android app, ensuring a smooth experience.
              </p>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={project4} alt="" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-90 backdrop-blur-sm bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider shadow-md">
              3D GPR Reconstruction
            </span>
            <div className="pt-8 text-center">
              <p className="text-black text-base font-semibold text-center">
                3D GPR Reconstruction uses a 3D Autoencoder to reconstruct
                missing GPR data. Built with Python and Trimesh for 3D
                visualization, it integrates Streamlit for interactive data
                visualization. This project was developed as part of a final
                thesis to explore machine learning-based data reconstruction and
                3D visualization techniques.
              </p>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative md:col-span-2 md:justify-self-center">
          <img src={project5} alt="" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-90 backdrop-blur-sm bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider shadow-md">
              Quiz Web App
            </span>
            <div className="pt-8 text-center">
              <p className="text-black text-base font-semibold text-center">
                Quiz Web App is an interactive platform built with React and
                plain CSS for answering quizzes. It includes login
                authentication, dynamic question fetching from an API, and a
                timer mechanism that shows results once time runs out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
