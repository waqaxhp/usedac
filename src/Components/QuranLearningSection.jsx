import React from "react";

const QuranLearningSection = () => {
  return (
    <section className="bg-white text-center py-12 px-6 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold text-[#a38200]">
        When should you service or replace your AC?
      </h1>

      <div className="flex justify-center my-4">
        <hr className="border-t-2 border-gray-300 w-10" />
        <span className="mx-2 text-green-700">|</span>
        <hr className="border-t-2 border-gray-300 w-10" />
      </div>

      <div className="mt-6 text-gray-700 text-sm md:text-base leading-7">
        <p className="mb-4">
          Regular AC maintenance is very important to keep your cooling system
          working efficiently. We recommend servicing your AC at least twice a
          year to ensure better performance, lower electricity bills, and long
          life of your unit. Our expert technicians provide complete inspection,
          cleaning, and repair services for all types of ACs.
        </p>

        <p>
          Whether you are using a split AC, window AC, or inverter AC, timely
          service helps avoid major breakdowns and expensive repairs. If your AC
          is not cooling properly or making unusual noise, it may be time for a
          checkup or replacement. We also help customers buy and sell used ACs
          at the best market price with trusted service support.
        </p>
      </div>

      <div className="mt-8 text-green-700 font-semibold text-sm md:text-base">
        #Our AC Services
      </div>
    </section>
  );
};

export default QuranLearningSection;
