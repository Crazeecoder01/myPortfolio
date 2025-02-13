import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={60}
        innerScale={1}
        outerScale={3}
        innerStyle={{ backgroundColor: "black" }}
        outerStyle={{
          border: "2px solid white",
          mixBlendMode: "difference",
        }}
      />

      {/* Magnifying Glass Effect */}
      <div
        className="magnifier"
        style={{
          position: "fixed",
          top: cursorPos.y - 50,
          left: cursorPos.x - 50,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          overflow: "hidden",
          pointerEvents: "none",
          transform: "scale(1.5)",
          backgroundImage: "url(/your-background-image.jpg)",  // Replace with your site background
          backgroundSize: "200%",  // Zoom effect
          backgroundPosition: `${-cursorPos.x * 0.5}px ${-cursorPos.y * 0.5}px`,
        }}
      />
    </>
  );
};

export default Cursor;
