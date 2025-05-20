import React from "react";
import { FaPhoneAlt, FaServer, FaTools, FaLifeRing, FaMicrochip, FaCloud, FaCode, FaHeadset } from "react-icons/fa";


const services = [
  { icon: <FaPhoneAlt />, title: "(VoIP)", description: "Lorem dolor sed viverra ipsum. Felis imperdiet proin fermentum leo vel. Aliquam purus sit." },
  { icon: <FaServer />, title: "Backup & Recovery", description: "Fringilla urna porttitor rhoncus dolor purus non enim. Quam viverra orci sagittis eu." },
  { icon: <FaTools />, title: "Retrofitting", description: "Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Interdum velit.", highlight: true },
  { icon: <FaLifeRing />, title: "Help Desk", description: "Facilisis leo vel fringilla est ullamcorper eget nulla. Odio tempor orci dapibus." },
  { icon: <FaMicrochip />, title: "Repair & Rebuild", description: "Non blandit massa enim nec dui nunc mattis enim. Tempus iaculis urna volutpat lacus." },
  { icon: <FaCloud />, title: "Maintenance Services", description: "Id ornare arcu odio ut sem nulla pharetra diam. Senectus et netus et malesuada." },
  { icon: <FaCode />, title: "Software Development", description: "Vel facilisis volutpat est velit egestas dui id. Vitae aliquet nec ullamcorper sit amet." },
  { icon: <FaHeadset />, title: "Supply Chain", description: "Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque in dictum." },
];

const ServicesSection = () => {
  return (
    <div className="bg-black text-white py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What can you do with Development?</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Justo eget magna fermentum iaculis. A diam sollicitudin tempor id eu nisl. Pellentesque eu tincidunt tortor aliquam nulla. Lacus vestibulum sed arcu non odio euismod
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border ${
              service.highlight
                ? "bg-gradient-to-r from-green-800 to-blue-900"
                : "border-green-500"
            } hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-4xl text-green-400 mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
            <p className="text-center text-gray-300 text-sm mb-4">{service.description}</p>
            <div className="text-center font-bold text-white">
              <button className="hover:underline">
                Click Here <span className="inline-block ml-1">➜</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
