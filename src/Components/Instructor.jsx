

import React, { useEffect, useState } from "react";

const Instructor = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.Instructor) {
          setTrainers(data.Instructor); // Access the "Instructor" key
        }
      })
      .catch((error) => console.error("Error fetching instructors:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
            style={{ height: "500px" }} // Increased card height
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover" // Ensures the image covers the card
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-bold">{trainer.name}</h3>
              <p className="text-white text-lg mt-2">{trainer.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
