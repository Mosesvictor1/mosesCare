import React from "react";
import { Link } from "react-router-dom";
// import { specialityData } from "../assets/assets";

const Specialisation = () => {
  const specialisations = [
    { icon: "🏥", speciality: "General physician" },
    { icon: "🩺", speciality: "Gynecologist" },
    { icon: "❤️", speciality: "Dermatologist" },
    { icon: "📊", speciality: "Pediatricians" },
    { icon: "🧪", speciality: "Neurologist"},
    { icon: "🛡️", speciality: "Gastroenterologist" },
    { icon: "🏥", speciality: "Laboratory" },
    { icon: "🦴", speciality: "X-Ray" },
  ];

  // const specialisations = [
  //   { icon: "🏥", speciality: "Dentistry" },
  //   { icon: "🩺", speciality: "Primary Care" },
  //   { icon: "❤️", speciality: "Cardiology" },
  //   { icon: "📊", speciality: "MRI Resonance" },
  //   { icon: "🧪", speciality: "Blood Test" },
  //   { icon: "🛡️", speciality: "Psicologist" },
  //   { icon: "🏥", speciality: "Laboratory" },
  //   { icon: "🦴", speciality: "X-Ray" },
  // ];
  
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Find By Specialisation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {specialisations.map((spec, index) => (
            <Link onClick={()=>scrollTo(0,0)} to={`/doctors/${spec.speciality}`}
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span className="text-4xl text-blue-500">{spec.icon}</span>
              <p className="mt-2 text-gray-700 font-medium">{spec.speciality}</p>
              {/* <img src={spec.image} alt="" />
              <p className="mt-2 text-gray-700 font-medium">{spec.speciality}</p> */}
            </Link>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
          View All
        </button>
      </div>
    </section>
  );
};

export default Specialisation;
