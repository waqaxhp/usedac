// import React from "react";
// import { NavLink } from "react-router-dom";

// const IslamicLearningSection = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Full-Height Top Image */}
//       <div className="w-full h-screen">
//         <img
//           src="/Content/Images/Package-Comparison-Chart-14-1536x1152.png"
//           alt="Top Banner"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Cards Section */}
//       <div className="py-12 px-6 flex flex-col lg:flex-row justify-center items-start gap-8">
//         {/* Left Card */}
//         <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm text-center">
//           <img
//             src="/Content/Images/books.png"
//             alt="Resource"
//             className="w-32 h-32 mx-auto"
//           />
//           <p className="mt-4 font-medium text-gray-700">
//             You Can Get Some Valuable Resources From Here
//           </p>
//           <NavLink to="/downlode">
//             <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
//               Download From Here
//             </button>
//           </NavLink>
//         </div>

//         {/* Right Card */}
//         <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             LEARN FROM THE BEST
//           </h3>
//           <p className="text-sm text-gray-600 mb-6">
//             Join our Quran Academy for expert guidance.
//           </p>
//           <form className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="tel"
//               placeholder="Your Phone Number"
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="text"
//               placeholder="Your Country Name"
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
//             />
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//             >
//               Get 3 Days Free Trial
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IslamicLearningSection;

import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

const IslamicLearningSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_kiz0nzj", // Replace with your EmailJS service ID
        "template_com1kih", // Replace with your EmailJS template ID
        formRef.current,
        "U0gW80xAzisBWnbGs" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Your message has been sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-gray-50">
      {/* Full-Height Top Image */}
      <div className="w-full h-screen">
        <img
          src="/Content/Images/Package-Comparison-Chart-14-1536x1152.png"
          alt="Top Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="py-12 px-6 flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Left Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm text-center">
          <img
            src="/Content/Images/books.png"
            alt="Resource"
            className="w-32 h-32 mx-auto"
          />
          <p className="mt-4 font-medium text-gray-700">
            You Can Get Some Valuable Resources From Here
          </p>
          <NavLink to="/downlode">
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Download From Here
            </button>
          </NavLink>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            LEARN FROM THE BEST
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Join our Quran Academy for expert guidance.
          </p>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="country"
              placeholder="Your Country Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Get 3 Days Free Trial
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center text-sm font-semibold ${
                status.includes("✅") ? "text-green-700" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IslamicLearningSection;
