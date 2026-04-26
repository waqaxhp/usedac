import React, { useEffect, useState } from "react";

const Amenities = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data.amenities))
      .catch((error) => console.error("Error fetching amenities data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, list } = data;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl mb-8 max-w-2xl">
        {subtitle}
      </p>

      {/* Amenities List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-sm md:text-base">
        {list.map((column, index) => (
          <div key={index}>
            {column.map((item, idx) => (
              <React.Fragment key={idx}>
                <p>{item}</p>
                {idx < column.length - 1 && <span className="block">•</span>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
