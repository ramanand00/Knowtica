import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hudImage from '../assets/1.webp'; 
import hudImage1 from '../assets/1.avif';
import hudImage2 from '../assets/2.webp';
import StatsSection from "../components/StatsSection";
import ServicesSection from '../components/ServicesSection';
import TechProjectSection from '../components/TechProjectSection';


const Home = () => {
  return (
    <>
      <Navbar />
    
    <div>
      {/* Hero Section */}
      <section className="text-center px-6 py-60 bg-gradient-to-br from-blue-100 to-[#222]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Build Faster with Beautiful UI Components
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Copy and paste ready-made components for your next project
        </p>
        <Link
          to="/components"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Browse Components
        </Link>
      </section>

    <section>
         <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="uppercase text-lg tracking-wide text-gray-300">Work with</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Join us in discovering the <br />
          convenience of <span className="text-white">technology.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Aenean sed <span className="text-green-400">adipiscing diam donec</span> adipiscing tristique risus.
          <span className="text-green-400"> Tempus egestas</span> sed sed risus pretium quam vulputate.
          Maecenas <span className="text-green-400">ultricies mi eget</span> mauris.
        </p>
        <p className="text-gray-500">
          Gravida rutrum quisque non tellus orci ac auctor augue mauris. Velit dignissim sodales ut eu sem integer vitae justo eget. Suscipit adipiscing bibendum est ultricies integer. Eu sem integer vitae justo eget magna fermentum. Tempor id eu nisl nunc.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={hudImage}
          alt="Futuristic HUD"
          className="w-full max-w-md md:max-w-xl animate-pulse"
        />
      </div>
    </div>
      </section>
    
    <TechProjectSection />
    <section>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white">
      {/* Left Section (Image) */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={hudImage1}
          alt="Futuristic HUD"
          className="w-full max-w-md md:max-w-xl animate-pulse"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="md:w-1/2 space-y-6 mt-10 md:mt-0 md:pl-10">
        <p className="uppercase text-lg tracking-wide text-gray-300">Work with</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Join us in discovering the <br />
          convenience of <span className="text-white">technology.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Aenean sed <span className="text-green-400">adipiscing diam donec</span> adipiscing tristique risus.
          <span className="text-green-400"> Tempus egestas</span> sed sed risus pretium quam vulputate.
          Maecenas <span className="text-green-400">ultricies mi eget</span> mauris.
        </p>
        <p className="text-gray-500">
          Gravida rutrum quisque non tellus orci ac auctor augue mauris. Velit dignissim sodales ut eu sem integer vitae justo eget. Suscipit adipiscing bibendum est ultricies integer. Eu sem integer vitae justo eget magna fermentum. Tempor id eu nisl nunc.
        </p>
      </div>
    </div>
    </section>


        



    <section>
         <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="uppercase text-lg tracking-wide text-gray-300">Work with</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Join us in discovering the <br />
          convenience of <span className="text-white">technology.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Aenean sed <span className="text-green-400">adipiscing diam donec</span> adipiscing tristique risus.
          <span className="text-green-400"> Tempus egestas</span> sed sed risus pretium quam vulputate.
          Maecenas <span className="text-green-400">ultricies mi eget</span> mauris.
        </p>
        <p className="text-gray-500">
          Gravida rutrum quisque non tellus orci ac auctor augue mauris. Velit dignissim sodales ut eu sem integer vitae justo eget. Suscipit adipiscing bibendum est ultricies integer. Eu sem integer vitae justo eget magna fermentum. Tempor id eu nisl nunc.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={hudImage2}
          alt="Futuristic HUD"
          className="w-full max-w-md md:max-w-xl animate-pulse"
        />
      </div>
    </div>
      </section>

        {/* Stats Section */}
        <StatsSection />
        {/* Services Section */}
        <ServicesSection />

      {/* Features Section */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600">Speed</h3>
              <p className="text-gray-600 mt-2">Get your UI up and running in minutes.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">Customization</h3>
              <p className="text-gray-600 mt-2">Easily tweak designs to fit your brand.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">Copy & Paste</h3>
              <p className="text-gray-600 mt-2">No setup required. Just grab the code and go.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Home;
