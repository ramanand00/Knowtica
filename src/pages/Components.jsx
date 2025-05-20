import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Components = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 1,
      scale: 0.9,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(cardsRef.current, {
      opacity: 1,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)"
    });
  }, []);

  const cardClasses =
    "w-full aspect-square bg-[#1f1f1f] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col justify-center items-center text-center border border-gray-700 hover:border-[#61dafb]";

  const cardTitle = "text-xl font-bold mb-4 text-[#ff6f61]";

  return (
    <>
      <Navbar />
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 py-12 text-white"
      >
        <h1 className="text-4xl font-extrabold text-center mb-12 text-[#61dafb] animate-pulse">
          🧩 Unique UI Components
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Button Card */}
          <div ref={(el) => (cardsRef.current[0] = el)} className={cardClasses}>
            <h2 className={cardTitle}>Button</h2>
            <button className="bg-[#61dafb] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#52c2e4] transition">
              Click Me
            </button>
          </div>

          {/* Card */}
          <div ref={(el) => (cardsRef.current[1] = el)} className={cardClasses}>
            <h2 className={cardTitle}>Card</h2>
            <div className="bg-[#2a2a2a] p-4 rounded-lg w-full">
              <h3 className="text-lg font-semibold text-[#61dafb]">
                Card Title
              </h3>
              <p className="text-gray-300 mt-2">
                A sleek square card component for info display.
              </p>
            </div>
          </div>

          {/* Alert */}
          <div ref={(el) => (cardsRef.current[2] = el)} className={cardClasses}>
            <h2 className={cardTitle}>Alert</h2>
            <div className="bg-yellow-200 text-yellow-900 p-4 rounded-md">
              ⚠️ This is a warning alert. Be careful!
            </div>
          </div>

          {/* Badge */}
          <div ref={(el) => (cardsRef.current[3] = el)} className={cardClasses}>
            <h2 className={cardTitle}>Badge</h2>
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Active
            </span>
          </div>

          {/* Animated Label */}
          <div ref={(el) => (cardsRef.current[4] = el)} className={cardClasses}>
            <h2 className={cardTitle}>Animated Label</h2>
            <div className="animate-bounce text-[#61dafb] text-xl font-bold">
              🎉 Bounce In!
            </div>
          </div>

          {/* GSAP Text Effect */}
          <div ref={(el) => (cardsRef.current[5] = el)} className={cardClasses}>
            <h2 className={cardTitle}>GSAP Magic</h2>
            <p className="text-gray-400">Smooth animation with GSAP on load</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Components;
