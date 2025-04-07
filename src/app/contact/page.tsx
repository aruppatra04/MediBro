"use client";

import React from "react";

const emails = [
  "support@medbro.com",
  "helpdesk@medbro.com",
  "contact@medbro.com",
  "info@medbro.com",
  "feedback@medbro.com",
];

export default function Contact() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4 py-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-white mb-10 text-center max-w-2xl">
          Reach out to us via email for any support, inquiries, or feedback. We’re happy to help!
        </p>

        {/* Email Cards */}
        <div className="flex flex-col space-y-4 w-full max-w-md">
          {emails.map((email, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in delay-[index*200] bg-white bg-opacity-20 border border-white rounded-lg px-6 py-3 text-lg text-white text-center shadow-lg backdrop-blur-md"
            >
              {email}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
