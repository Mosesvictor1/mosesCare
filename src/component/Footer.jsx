import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">Moses Care Home</h2>
          <p className="mt-2 text-sm">Akinremi Street, Ijegun, Lagos State</p>
          <p className="text-sm">+2349138691147</p>
          <p className="text-sm">info@mosesCarehome.com</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>

         {/* Middle Section */}
         <div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> About Us
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Our Pricing
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Our Gallery
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Appointment
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Orthology
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Neurology
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight />  Dental Care
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Ophthalmology
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <HiOutlineArrowRight /> Cardiology
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="text-center text-sm border-t border-gray-400 mt-6 pt-4">
        <p>Copyright &copy;2023 mosesCare Home.com. All Rights Reserved</p>
        <p>Design by Victor Moses</p>
      </div>
    </footer>
  );
};

export default Footer;
