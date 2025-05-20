import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DocsSidebar from "../components/DocsSidebar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Introduction",
    content:
      "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
  },
  {
    title: "Getting Started",
    content:
      "Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.",
  },
  {
    title: "Tailwind CSS Installation",
    content:
      "Our components use Tailwind CSS. If you're using Vite + React, install Tailwind CSS like this:",
    code: `npm install tailwindcss @tailwindcss/vite`,
    note:
      "Then update your tailwind.config.js and CSS files as shown in the official Tailwind docs.",
  },

  {
    title: "Configure the Vite plugin",
    content: "Add the @tailwindcss/vite plugin to your Vite configuration:",
    code: `import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})  `,
  },

  {
    title: "Import Tailwind CSS",
    content:
      "Add an @import to your CSS file that imports Tailwind CSS.",
    code: '@import "tailwindcss";',
    note:
      "Then update your tailwind.config.js and CSS files as shown in the official Tailwind docs.",
  },

  {
    title: "Start your build process",
    content: "Run your build process with npm run dev or whatever command is configured in your package.json file.",
    code: 'npm run dev',
    note:
      "Then update your tailwind.config.js and CSS files as shown in the official Tailwind docs.",
  },

  {
    title: "Start using Tailwind in your HTML",
    content:
      "Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.",
    code: ' className="text-2xl font-bold text-[#61dafb] mb-3"',
    note:
      "Then update your tailwind.config.js and CSS files as shown in the official Tailwind docs.",
  },

  

  {
    title: "Copy & Paste Instructions",
    content:
      "Just click the “Copy” button next to any component to copy the full code block to your clipboard. Paste it into your JSX file and you're good to go!",
  },
];

const Laravel = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex py-30 w-full min-h-screen bg-black text-white px-4 py-12">
        {/* Sidebar */}
        <DocsSidebar />

        {/* Main Content */}
        <div className="flex-1 ml-6">
          <h1 className="text-4xl font-extrabold text-center text-[#ff6f61] mb-12">
            Documentation
          </h1>
          <p className="text-center text-gray-300 mb-8">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, <br /> generating the corresponding styles and then writing them to a static CSS file.
<br /> <br />
It's fast, flexible, and reliable — with zero-runtime.
          </p>

          {sections.map((section, index) => (
            <section
              key={index}
              ref={(el) => (containerRef.current[index] = el)}
              id={section.title}
              className="mb-12 bg-[#1a1a1a] p-6 rounded-xl shadow-md transition-all duration-300 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-[#61dafb] mb-3">
                {section.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">{section.content}</p>

              {section.code && (
                <div className="relative">
                  <pre className="bg-[#2d2d2d] text-sm text-green-200 p-4 rounded-md overflow-x-auto">
                    <code>{section.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(section.code)}
                    className="absolute top-2 right-2 bg-[#ff6f61] text-white text-xs px-3 py-1 rounded hover:bg-[#ff3b2e] transition"
                  >
                    Copy
                  </button>
                </div>
              )}

              {section.note && (
                <p className="text-sm text-gray-400 mt-2 italic">{section.note}</p>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Laravel;
