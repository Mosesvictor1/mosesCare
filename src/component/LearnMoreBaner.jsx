import React from "react";
import { assets } from "../assets/assets";

const LearnMoreBaner = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 md:py-24 bg-white">
      <div
        className="relative w-full max-w-6xl  text-white rounded-xl overflow-hidden p-8 md:p-12 bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${assets.learnmore})`,
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex items-start flex-col justify-center gap-5 h-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h1>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400">
              Appointment
            </button>
            <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreBaner;
