import React from "react";
import planetImage from "../assets/planet-bg.jpg"; // Half-circle glowing green image
import logo from "../assets/logo.webp";
import { FaGoogle, FaChrome, FaSafari, FaGooglePlay, FaWhatsapp } from "react-icons/fa";

const platforms = [
  { name: "Google", icon: <FaGoogle /> },
  { name: "chrome", icon: <FaChrome /> },
  { name: "Safari", icon: <FaSafari /> },
  { name: "Google Play", icon: <FaGooglePlay /> },
  { name: "WhatsApp", icon: <FaWhatsapp /> },
];

const TechProjectSection = () => {
  return (
    <section className="w-full bg-black text-white overflow-hidden">
  {/* Top Div - Planet */}
  <div className="relative h-72 w-full overflow-hidden flex justify-center items-end">
    <img
      src={planetImage}
      alt="Planet"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>

  {/* Logo */}
  <div className="relative z-10 flex justify-center -mt-10">
    <div className="w-20 h-20 bg-black rounded-full border-4 border-green-400 flex items-center justify-center shadow-lg">
      {/* <img src={logo} alt="Logo" className="w-12 h-12" /> */}
    </div>
  </div>

  {/* Content */}
  <div className="text-center w-full max-w-4xl mx-auto px-4 pt-6 pb-20">
    <p className="text-gray-400 uppercase tracking-widest">Latest Project</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
      Tech & Industry we've <span className="text-green-400">excellent</span>
    </h2>
    <p className="text-gray-300">
      Hac habitasse <span className="text-green-400">platea dictumst quisque</span> sagittis purus sit{" "}
      <span className="text-green-400">amet volutpat</span>. Fermentum posuere urna nec tincidunt. Mauris
      pellentesque pulvinar pellentesque habitant.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="flex items-center gap-2 bg-[#111] border border-gray-600 px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
        >
          {platform.icon}
          <span className="capitalize">{platform.name}</span>
        </button>
      ))}
    </div>
  </div>
</section>

  );
};

export default TechProjectSection;
