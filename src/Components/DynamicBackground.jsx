import React, { useState, useEffect } from "react";

const DynamicBackground = () => {
  const [background, setBackground] = useState("/images/default-bg.jpg");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [headings, setHeadings] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  const handleHover = (title) => {
    const hoveredHeading = headings.find((item) => item.title === title);
    setBackground(hoveredHeading?.image || "/images/default-bg.jpg");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data/Data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        const data = await response.json();
        if (data.component === "DynamicBackground") {
          setHeadings(data.headings || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${position.x / 50}px, ${position.y / 50}px)`,
          transition: "transform 0.1s",
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        {headings.map((heading) => (
          <h1
            key={heading.title}
            className="text-white text-5xl font-bold cursor-pointer mb-4 hover:scale-110 transition-transform duration-300"
            onMouseEnter={() => handleHover(heading.title)}
          >
            {heading.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;
