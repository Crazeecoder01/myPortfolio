import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const services = [
  {
    title: "Shopify Development",
    description:
      "Transform your e-commerce vision into reality with expert Shopify development services.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Next.js Development",
    description:
      "Craft dynamic and responsive applications with the power of Next.js.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "WordPress Development",
    description:
      "Build powerful WordPress websites tailored to your business needs.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhance your website's performance with speed optimization strategies.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Website Maintenance",
    description:
      "Ensure your website remains updated and secure with ongoing maintenance.",
    image: "https://via.placeholder.com/100",
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate the title
    gsap.from(".services-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // Animate the service cards
    gsap.from(".service-card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center overflow-hidden relative"
    >
      {/* Section Title */}
      <h2 className="services-title mb-10 text-4xl font-bold tracking-wide bg-clip-text text-gray-900 uppercase">
        Services
      </h2>

      {/* Service Cards */}
      <div className="flex my-4 justify-center items-center w-full">
        <div className="flex w-full max-w-6xl h-[300px] px-4 overflow-visible">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card -mr-5 group relative flex flex-col justify-between p-4 w-1/4 bg-white border  rounded-2xl shadow-lg  duration-300 ease-in-out hover:w-[40%] h-full hover:shadow-purple-500/30 mx-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10" />

              {/* Service Icon and Title */}
              <div className="flex items-center gap-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-12 w-12 filter group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.8)] transition-all duration-500"
                />
                <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="mt-4 px-4 py-2 text-white bg-gradient-to-r from-gray-900 to-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;