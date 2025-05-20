// src/components/DocsSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const DocsSidebar = () => {
  const sections = [
    { title: "Vite", path: "/dox_Vue" },
    { title: "Using PostCSS", path: "/dox_PostCSS" },
    { title: "Tailwind CLI", path: "/dox_TailwindCLI" },
    { title: "Next.js", path: "/dox_Nextjs" },
    { title: "Angular", path: "/dox_Angular" },
    { title: "Framework Guides", path: "/dox_FrameworkGuides" },
  ];

  return (
    <aside className="hidden md:block w-64 h-full sticky top-24 p-4 bg-[#1a1a1a] text-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-[#61dafb] mb-4">📑 Installation</h3>
      <ul className="space-y-3">
        {sections.map(({ title, path }) => (
          <li key={title}>
            <Link
              to={path}
              className="cursor-pointer hover:text-[#ff6f61] transition block"
            >
              • {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DocsSidebar;
