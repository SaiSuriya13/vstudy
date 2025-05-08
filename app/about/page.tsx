"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaArrowLeft } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.push("/welcome");
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 text-center text-white">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-4 text-4xl font-extrabold text-blue-400 drop-shadow-glow"
      >
        Meet the Creators
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="mb-6 max-w-2xl text-lg text-gray-300"
      >
        This Virtual Study Room was built with passion by{" "}
        <span className="font-semibold text-blue-300">Sai Suriya</span> and{" "}
        <span className="font-semibold text-green-300">Manigandan</span> to help students and professionals
        stay focused and collaborate effectively.
      </motion.p>

      {/* Creator Profiles */}
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Sai Suriya */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-80"
        >
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
        </motion.div>

        {/* Manigandan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-80"
        >
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
        </motion.div>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <button
          onClick={goBack}
          className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition-transform hover:scale-105 hover:bg-blue-700"
        >
          <FaArrowLeft /> Back to Welcome Page
        </button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
