"use client";

import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Symptom Checker",
    description:
      "Enter your symptoms, and our AI-powered system will analyze them to find possible conditions.",
    image: "/symp.jpg",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Medicine Recommendation",
    description:
      "Get AI-driven medicine suggestions based on your symptoms. Always consult a doctor before use.",
    image: "/meds rec.jpg",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our platform is designed to be simple and intuitive for users of all ages.",
    image: "/user frie.png",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Trusted ",
    description:
      "We use reliable medical sources to provide accurate symptom analysis and medicine recommendations.",
    image: "/trust.png",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "24/7 Accessibility",
    description:
      "Access our platform anytime, anywhere, to get instant health guidance.",
    image: "/24.avif",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Privacy & Security",
    description:
      "Your health data is encrypted and secure. We prioritize your privacy.",
    image: "/sec.jpeg",
    gradient: "from-gray-700 to-gray-900",
  },
];

export default function About() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About MedBro
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl">
          MedBro helps users to convey symptoms and suggests possible medications. Our AI-driven approach makes health recommendations accessible and easy to understand.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative w-72 h-44 perspective cursor-pointer group"
            >
              <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center text-white text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r ${card.gradient} border-2 border-white group-hover:shadow-glow backface-hidden`}
                >
                  {card.title}
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg shadow-lg bg-black transform rotate-y-180 backface-hidden"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={288}
                    height={176}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <p className="absolute bottom-2 text-white text-sm font-medium px-4 bg-black bg-opacity-60 w-full text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}
