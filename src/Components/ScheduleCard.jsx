import React, { useState, useEffect } from "react";

const ScheduleCard = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Fetching JSON data
    fetch("/Data/Data.json") // Replace with the correct path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch schedule data");
        }
        return response.json();
      })
      .then((data) => {
        setScheduleData(data.schedule); // Assuming the JSON structure contains a "schedule" key
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      {scheduleData.map((dayData, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-full h-screen border-b border-gray-300 bg-white"
        >
          {/* Day Section */}
          <div className="w-11/12 flex flex-col md:flex-row items-center justify-center h-full">
            {/* Left Section: Day */}
            <div className="flex-none text-4xl font-bold uppercase text-center w-full md:w-1/3">
              {dayData.day}
            </div>

            {/* Right Section: Schedule */}
            <div className="flex-grow text-center w-full md:w-2/3 space-y-4 md:space-y-8">
              {dayData.classes.map((classItem, classIndex) => (
                <div key={classIndex}>
                  <div className="text-2xl md:text-4xl font-bold">
                    {classItem.title} {classItem.time}
                  </div>
                  <div className="text-sm font-medium">
                    <div>
                      <span className="font-bold">Location:</span>{" "}
                      {classItem.location}
                    </div>
                    <div>
                      <span className="font-bold">Instructor:</span>{" "}
                      {classItem.instructor}
                    </div>
                  </div>
                </div>
              ))}
              <button className="mt-4 px-6 py-2 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition">
                Book Class
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleCard;
