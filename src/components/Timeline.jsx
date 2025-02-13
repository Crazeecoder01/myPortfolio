import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2019",
    title: "Class 10th",
    description: "Completed secondary education with a strong foundation in Social Science and Mathematics.",
    logo: "https://images.uniapply.com/uploads/college/image/logo/2579/DAV_Police_Public_School_2055_Logo_1.jpg",
  },
  {
    year: "2021",
    title: "Class 12th",
    description: "Specialized in Science (Physics, Chemistry, Mathematics), developed problem-solving skills.",
    logo: "https://schools.org.in/assets/images/favicon.png",
  },
  {
    year: "2022 - Present",
    title: "B.Tech in Electrical Engineering",
    description: "Exploring core electrical engineering concepts along with software development and AI/ML.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE80zmvEpyB6g/company-logo_200_200/company-logo_200_200/0/1630621782434?e=1747267200&v=beta&t=4ZYVMXkwVbmsc-YTRvChhiiy8W8-hjdITHqNXdS1b9w",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      timelineRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center py-20 rounded-3xl m-6 bg-black  text-white shadow-xl shadow-zinc-900">
      <h2 className="text-4xl font-bold mb-20 uppercase tracking-wide">
        My Education Timeline
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute top-2 left-1/2 w-1 bg-gray-700 h-full transform -translate-x-1/2"></div>

        <div ref={timelineRef} className="flex flex-col space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-white rounded-full border-4 border-gray-700 left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline Card */}
              <div className="group relative w-5/12 p-6 rounded-xl bg-gray-50 shadow-lg transition-all transform hover:scale-105 text-black">
                {/* Institute Logo */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white p-2 rounded-full shadow-md">
                  <img src={item.logo} alt={item.title} className="w-full h-full object-contain rounded-full" />
                </div>

                <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
                <span className="block text-gray-400">{item.year}</span>
                <p className="mt-2 text-gray-500 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
