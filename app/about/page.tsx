"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaArrowLeft } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/welcome");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 text-center text-white">
      {/* Heading */}
      <h1 className="mb-4 text-4xl font-extrabold text-blue-400 drop-shadow-lg">
        Meet the Creators
      </h1>

      <p className="mb-6 max-w-2xl text-lg text-gray-300">
        This Virtual Study Room was built with passion by{" "}
        <span className="font-semibold text-blue-300">Sai Suriya</span> and{" "}
        <span className="font-semibold text-green-300">Manigandan</span> to help
        students and professionals stay focused and collaborate effectively.
      </p>

      {/* Creator Profiles */}
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Sai Suriya */}
        <div className="w-80">
          <div className="relative bg-blue-900 p-6 rounded-xl shadow-md">
            <div className="absolute top-0 left-0 p-2 bg-blue-800 rounded-tl-xl text-white text-sm">
              <span className="font-bold">SAI</span> 13
            </div>
            <h2 className="card-title mb-3 text-2xl font-bold text-white">Sai Suriya</h2>
            <div className="flex justify-center gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/sai-suriya-k-2477b9305/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_sai_i3/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/SaiSuriya13"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-gray-400 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Manigandan */}
        <div className="w-80">
          <div className="relative bg-green-700 p-6 rounded-xl shadow-md">
            <div className="absolute top-0 left-0 p-2 bg-green-600 rounded-tl-xl text-white text-sm">
              <span className="font-bold">MANI</span> 98
            </div>
            <h2 className="card-title mb-3 text-2xl font-bold text-white">Manigandan</h2>
            <div className="flex justify-center gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/manigandan-p-751198267/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/king._.of._my_world/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/manigandan9845"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link hover:text-gray-400 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={goBack}
        className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition-transform hover:scale-105 hover:bg-blue-700"
      >
        <FaArrowLeft /> Back to Welcome Page
      </button>
    </div>
  );
};

export default AboutPage;
