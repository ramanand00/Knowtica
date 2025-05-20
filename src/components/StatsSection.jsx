import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const stats = [
    { label: "Proven Track Record", value: 12, suffix: "+" },
    { label: "Customer Satisfaction", value: 92, suffix: "%" },
    { label: "We Have Completed", value: 1500, suffix: "" },
    { label: "Average Answer Time", value: 3, suffix: "Mins" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounts = () => {
    const steps = 50;
    let countStep = 0;

    const interval = setInterval(() => {
      countStep++;
      setCounts((prev) =>
        prev.map((_, i) =>
          Math.min(
            Math.round((stats[i].value / steps) * countStep),
            stats[i].value
          )
        )
      );

      if (countStep >= steps) clearInterval(interval);
    }, 30);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 bg-black text-center"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-2">A+</h2>
      <p className="text-lg text-gray-700 mb-6">REVIEWED ON</p>

      <div className="text-yellow-500 text-2xl mb-8">
        {"★".repeat(5)} <span className="text-gray-800 ml-2">5/5</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="text-3xl font-bold text-blue-600">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="text-gray-700 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
