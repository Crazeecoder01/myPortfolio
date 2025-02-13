import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/20240326_183629.jpg";
import img2 from "../assets/20240327_120948.jpg";
import img3 from "../assets/IMG_20221204_161703.jpg";
const ShufflingPictureGrid = () => {
  const [images, setImages] = useState([
    `${img1}`,
    `${img2}`,
    `${img2}`,
    `${img2}`,
    `${img3}`,
    `${img3}`,
    `${img1}`,
    `${img1}`,
    `${img1}`,
    `${img2}`,
    `${img3}`,    
    `${img3}`,    
   
  ]);

  // Function to shuffle the images
  const shuffleImages = () => {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  };

  // Auto-shuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(shuffleImages, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="py-5 bg-black text-white relative">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm md:text-lg font-bold">
                  Shuffling...
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShufflingPictureGrid;