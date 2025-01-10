import React from "react";
import univLogo from "../assets/LogoITS.png";
import schoolLogo from "../assets/LogoSmasa.png";
import bangkitLogo from "../assets/bangkit.jpg";
import binarLogo from "../assets/binar.jpeg";
const Experience = () => {
  return (
    <div className="bg-black text-gray-400 py-10" id="experience">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4 primary-color pb-2">Education</h2>
            <div className="bg-[#161616] min-h-[160px] p-6 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <img src={univLogo} alt="ITS Logo" className="w-40" />
              <div>
                <p className="text-lg font-semibold text-white">
                  Institut Teknologi Sepuluh Nopember
                </p>
                <p className="text-sm text-gray-400">
                  Bachelor of Computer Engineering
                </p>
                <p className="text-sm text-gray-300">
                  August 2020 - August 2024
                </p>
              </div>
            </div>
            <div className="bg-[#161616] min-h-[160px] p-6 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <img src={schoolLogo} alt="SMAN 1 Logo" className="w-24 mr-20" />
              <div>
                <p className="text-lg font-semibold text-white">
                  SMAN 1 Kota Probolinggo
                </p>
                <p className="text-sm text-gray-400">Science Major</p>
                <p className="text-sm text-gray-300">June 2018 - June 2020</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4 primary-color pb-2">
              Experience
            </h2>
            <div className="bg-[#161616] min-h-[160px] p-6 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <img src={binarLogo} alt="Binar Logo" className="w-24 mr-20" />
              <div>
                <p className="text-lg font-semibold text-white">
                  Binar Academy
                </p>
                <p className="text-sm text-gray-400">Frontend Developer</p>
                <p className="text-sm text-gray-300">
                  August 2022 - December 2022
                </p>
              </div>
            </div>

            <div className="bg-[#161616] min-h-[160px] p-6 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <img
                src={bangkitLogo}
                alt="Bangkit Logo"
                className="w-24 mr-20"
              />
              <div>
                <p className="text-lg font-semibold text-white">
                  Bangkit Academy
                </p>
                <p className="text-sm text-gray-400">Cloud Computing Cohort</p>
                <p className="text-sm text-gray-300">
                  February 2023 - June 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
