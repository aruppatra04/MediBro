"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["/img3.jpg", "/img4.jpg", "/img2.jpg"];

export default function Home() {
  const router = useRouter();

  return (
    <Fragment>
      <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-500 relative">
        {/* Fullscreen Carousel */}
        <div className="absolute inset-0">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="h-full"
          >
            {images.map((src, index) => (
              <div key={index} className="relative h-screen">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}    
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="brightness-75"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in">
            Welcome to MedBro
          </h1>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-md animate-fade-in">
            Your trusted medical recommendation assistant.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-transform duration-300 animate-glow"
            onClick={() => router.push("/workplace")}
          >
            Get Started
          </button>
        </div>
      </div>
    </Fragment>
  );
}