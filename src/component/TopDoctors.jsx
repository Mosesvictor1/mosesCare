// import React from 'react'
import { useNavigate } from "react-router-dom";
// import { doctors } from '../assets/assets'

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2">Top Doctors to Book</h2>
      <p className="text-gray-500 mb-8">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            onClick={() => navigate(`/appointments/${doctor._id}`)}
            key={index}
            className="bg-blue-10 cursor-pointer p-4 border-2 rounded-xl shadow-md hover:translate-y-1.5 transition-all"
          >
            <div className="bg-white p-4 rounded-lg">
              <div className="w-full h-full mx-auto bg-gray-200 rounded-full overflow-hidden">
                <img src={doctor.image} alt="" />
              </div>
              <p className="text-green-600 mt-4 text-sm font-medium">
                ● Available
              </p>
              <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
              <p className="text-gray-500 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate(`/doctors`, scrollTo(0,0))} className="mt-8 px-6 py-2 bg-gray-400 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 font-semibold">
        More
      </button>
    </section>
  );
};

export default TopDoctors;
