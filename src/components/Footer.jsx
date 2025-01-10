import React from "react";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-gray-400 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <p className="text-lg font-semibold text-white mb-2">Connect with me : </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/AdiSyahrul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-8 h-8 object-contain hover:scale-110"
              />
            </a>
            <a
              href="https://instagram.com/adiisyahrul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-8 h-8 object-contain hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/adisyahrul-setyabudi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 object-contain hover:scale-110"
              />
            </a>
            <a
              href="https://discord.com/users/373830304672251906"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={discord}
                alt="Discord"
                className="w-8 h-8 object-contain hover:scale-110"
              />
            </a>
          </div>
        </div>

        <div className="text-sm mt-4 sm:mt-0">
          <p>&copy;AdiSyahrul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
