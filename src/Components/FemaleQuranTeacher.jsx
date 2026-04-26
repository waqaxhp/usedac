import React from "react";
import { FaFemale } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

const FemaleQuranTeacher = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* Header */}
        <h1 className="flex items-center justify-center text-3xl font-bold text-green-700 mb-6">
          <GiAutoRepair className="mr-2 text-green-700" size={30} />
          Instant Cash for Your Used Air Conditioner
        </h1>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Text Section - Top */}
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Instant Cash for Your Used Air Conditioner
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We insure that you will receive <strong>immediate payment</strong>{" "}
            in cash for your used air conditioners, providing a quick and
            straightforward transaction that appeals to those looking for{" "}
            <strong>instant</strong>
            instant financial return.
          </p>

          {/* Image Section */}
          <div className="flex justify-center my-6">
            <img
              src="/Content/Images/ac  (7).jpg"
              alt="Female Quran Teacher Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Text Section - Bottom */}
          <p className="text-gray-700 leading-relaxed">
            Whether you have a split AC, window AC, or inverter system, our
            expert technicians can provide professional repair and maintenance
            services. We offer support in
            <strong>English</strong>, <strong>Urdu</strong>,{" "}
            <strong>Hindi</strong>, and <strong>Arabic</strong>. Book a service
            today and experience fast, reliable, and affordable AC repairing
            solutions from qualified technicians.
          </p>

          {/* Horizontal Separator */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Emphasized Text */}
          <p className="text-gray-800 text-center font-medium">
            Get professional AC repair services from experienced technicians.
            Our platform offers reliable and affordable solutions provided by
            skilled experts who specialize in AC installation, maintenance, and
            troubleshooting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FemaleQuranTeacher;
