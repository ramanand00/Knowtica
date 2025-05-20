import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const cyberCards = [
  {
    title: "Ethical Hacking",
    description:
      "Learn how hackers think and act to secure your systems. Become a white hat professional.",
    image:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80",
    button: "Start Now",
  },
  {
    title: "Network Security",
    description:
      "Understand protocols, firewalls, and secure communications to protect your data online.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c3e?auto=format&fit=crop&w=800&q=80",
    button: "Explore",
  },
  {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
   {
    title: "Cyber Defense",
    description:
      "Build strategies to defend against malware, phishing, ransomware and real-time cyber threats.",
    image:
      "https://images.unsplash.com/photo-1639762682693-3317e66e0c3b?auto=format&fit=crop&w=800&q=80",
    button: "Learn More",
  },
];

const Template = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(".cyber-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 1,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
    <Navbar />
    <div className="py-40 min-h-screen bg-black text-cyan-300 font-orbitron p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-[0_0_15px_#00fff0]">
        Explore Cyber Security Topics
      </h1>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {cyberCards.map((card, idx) => (
          <div
            key={idx}
            className="cyber-card relative bg-gradient-to-br from-gray-900 to-black border border-cyan-400 rounded-2xl shadow-[0_0_25px_rgba(0,255,240,0.15)] overflow-hidden hover:rotate-[-1deg] hover:scale-105 transform transition duration-500"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover border-b border-cyan-300"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl text-cyan-300 font-semibold mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {card.description}
              </p>
              <button className="px-4 py-2 bg-cyan-300 text-black font-bold rounded-full shadow-[0_0_15px_#00fff0] hover:scale-105 transition-all">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Template;