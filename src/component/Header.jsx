import React from "react";
import { assets } from "../assets/assets";

const stats = [
  {
    value: "90%",
    text: "Patient satisfaction rate, reflecting our commitment.",
    icon: assets.satisfaction_rate,
    
  },
  {
    value: "500+",
    text: "Board-certified doctors",
    icon: assets.certified_icon,
  },
  {
    value: "4.8",
    text: "Over 20,000 Patient",
    icon: assets.patient_icon,
  },
  {
    value: "$5000",
    text: "Money spent for poor patients",
    icon: assets.money_icon,
  },
  {
    value: "50+",
    text: "Free lesson videos for patients",
    icon: assets.video_icon,
  },
];

const Header = () => {
  return (
    <section className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.hero_bg})`,
      }}
    >
      <section className="w-full max-w-7xl mx-auto py-12 px-4 text-center ">
        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={assets.bg}
            alt="Medical Team"
            className="w-full h-100 object-cover"
          />

          {/* <div className="absolute inset-0 bg-black bg-opacity-100 mix-blend-multiply"></div> */}
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mt-6 ">
          Comprehensive Care for <br />
          <span className="text-blue-600">Every Patient</span>
        </h2>

        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-1 justify-end sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 bg-white rounded-lg shadow-lg shadow-gray-400 flex flex-col justify-start items-center text-center gap-4 h-fit
          ${
            index === 0 || index === 4 ? "h-70" : ""
          }   /* First and last card taller */
          ${
            index === 1 || index === 3 ? "h-50 bg-cyan-50!" : ""
          }   /* Second and fourth card taller */
          ${
            index === 2 ? "h-36 bg-gray-200!" : ""
          }                  /* Middle card smallest */
          `}
            >
              {/* <span className="text-3xl">{stat.icon}</span> */}

              <h3 className="text-xl font-bold mt-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.text}</p>
              <img src={stat.icon} alt="" className="mt-6" />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Header;
