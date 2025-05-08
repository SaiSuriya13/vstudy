"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

const WelcomePage: React.FC = () => {
    const router = useRouter();
    const { isSignedIn } = useUser();

    // Reusable Animated Button Component
    const AnimatedButton: React.FC<{
        label: string;
        route: string;
        gradientStart: string;
        gradientEnd: string;
    }> = ({ label, route, gradientStart, gradientEnd }) => (
        <motion.button
            onClick={() => router.push(route)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative cursor-pointer border-none bg-transparent p-0 font-mono text-base font-light uppercase outline-none"
            aria-label={`Navigate to ${label} page`}
        >
            <span className="duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:duration-[250ms] absolute left-0 top-0 size-full translate-y-0.5 rounded-lg bg-black bg-opacity/25 transition group-hover:translate-y-1 group-active:translate-y-px"></span>
            <span className="absolute left-0 top-0 size-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
            <div className={`duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:duration-[250ms] relative flex -translate-y-1 items-center justify-between gap-3 rounded-lg bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] px-6 py-3 text-lg text-white brightness-100 transition group-hover:-translate-y-1.5 group-hover:brightness-110 group-active:-translate-y-0.5`}>
                <span className="select-none">{label}</span>
            </div>
        </motion.button>
    );

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black p-6 text-center">
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4 text-5xl font-extrabold text-white drop-shadow-lg"
            >
                Welcome to Your Virtual Study Room
            </motion.h1>

            {/* Animated Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="mb-6 max-w-xl text-lg text-gray-300"
            >
                Connect, focus, and collaborate with others in a distraction-free environment.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex space-x-6"
            >
                {/* Start Studying Button */}
                <AnimatedButton
                    label="Start Studying"
                    route={isSignedIn ? "/home" : "/sign-in"}
                    gradientStart="#f27121"
                    gradientEnd="#8a2387"
                />

                {/* Learn More Button */}
                <AnimatedButton
                    label="Learn More"
                    route="/learn-more"
                    gradientStart="#21d4fd"
                    gradientEnd="#b721ff"
                />

                {/* About Us Button */}
                <AnimatedButton
                    label="About Us"
                    route="/about"
                    gradientStart="#ff512f"
                    gradientEnd="#dd2476"
                />
            </motion.div>
        </div>
    );
};

export default WelcomePage;
