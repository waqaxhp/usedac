import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FitnessLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching JSON data
    const fetchData = async () => {
      const json = {
        fitnessLayout: {
          topImage: "/Content/Images/bottom.jpg",
          bottomImage: "/Content/Images/top.jpg",
        },
      };
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const { fitnessLayout } = data;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Right Image (now moved to the left) */}
        <motion.div
          className="relative z-10"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={fitnessLayout.bottomImage}
            alt="Bottom Image"
            className="w-[200px] sm:w-[250px] md:w-[350px] h-auto object-cover rounded-md shadow-lg translate-x-[50px] md:translate-x-[100px] mb-10 md:mb-32"
          />
        </motion.div>

        {/* Left Image (now moved to the right and overlapping) */}
        <motion.div
          className="absolute z-0"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <img
            src={fitnessLayout.topImage}
            alt="Top Image"
            className="w-[200px] sm:w-[250px] md:w-[350px] h-auto object-cover rounded-md shadow-lg -translate-x-[80px] md:-translate-x-[150px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FitnessLayout;
