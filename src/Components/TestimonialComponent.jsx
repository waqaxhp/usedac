import React, { useEffect, useState } from "react";

const TestimonialComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data.testimonialComponent))
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { testimonial, locations } = data;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-yellow-500 via-yellow-300 to-gray-300 text-white">
      {/* Testimonial Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 py-16 h-full my-2">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          {testimonial.quote}
        </p>
        <p className="mt-4 text-lg font-medium">- {testimonial.author}</p>
      </div>

      {/* Location Section */}
      <div className="bg-black text-white py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-20">
          {locations.map((location, index) => (
            <div key={index} className="text-center">
              <h1 className="text-xl font-bold">{location.city}</h1>
              <p className="mt-2 text-sm">
                {location.address}
                <br />
                {location.region}
                <br />
                {location.zip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
