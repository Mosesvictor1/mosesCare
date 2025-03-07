import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [filterDocs, setfilterDocs] = useState([]);
  const { doctors } = useContext(AppContext);

  const appliedFilter = () => {
    if (speciality) {
      setfilterDocs(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDocs(doctors);
    }
  };
  useEffect(() => {
    appliedFilter();
  }, [speciality, doctors]);
  const [selectedSpecialty, setSelectedSpecialty] =
    useState("General physician");

  const specializations = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist",
  ];
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold mb-4">
        Browse through the doctors specialist.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Menu/Cancel Icon for Mobile */}
        <button
          className="md:hidden fixed top-20 right-4 z-50 p-2 bg-white rounded-md shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen
              ? "fixed inset-0 bg-black bg-opacity-50 z-40"
              : "hidden"
          } md:block md:static md:bg-transparent`}
        >
          <div
            className={`${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static left-0 top-0 h-full w-64 bg-white transition-transform duration-300 ease-in-out p-4 space-y-2 shadow-lg md:shadow-none`}
          >
            {specializations.map((specialty) => (
              <button
                key={specialty}
                className={`w-full p-3 text-left border rounded-md transition-colors ${
                  selectedSpecialty === specialty
                    ? "bg-indigo-100 border-indigo-500"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => {
                  setSelectedSpecialty(specialty);
                  setIsSidebarOpen(false);
                }}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {filterDocs.map((doctor, index) => (
            <div
              key={index}
              className="bg-white  p-4 rounded-lg shadow-md text-center flex flex-col sm:items-start items-center cursor-pointer"
            >
              <div className=" w-full h-full">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full bg-blue-100 object-cover rounded-md mb-4"
                />
              </div>
              <p
                className={`text-xs font-semibold mt-2 ${
                  doctor.status === "Available"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                ● {doctor.status}
              </p>
              <h3 className="font-semibold text-lg">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>

            //    <div
            //       key={index}
            //       className="p-4 border rounded-lg bg-gray-50 text-center"
            //     >
            //       <div className="h-32 bg-blue-100 rounded-md overflow-hidden  mb-4">
            //         <img src={doctor.image} alt="" className="" />
            //       </div>
            //       <p className="text-lg font-semibold">{doctor.name}</p>
            //       <p className="text-sm text-gray-500">{doctor.speciality
            //         }</p>

            //     </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
