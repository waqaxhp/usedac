import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import Accordion from "./Accordion";
import QuranAdvantages from "./QuranAdvantages";
import WhyChooseUs from "./WhyChooseUs";
import Courses from "./Courses";
import QuranLearningSection from "./QuranLearningSection";
import WhyStudy from "./WhyStudy";
import IslamicLearningSection from "./IslamicLearningSection";
import ContactUs from "./ContactUs";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return; // Ensure formRef exists

    try {
      const result = await emailjs.sendForm(
        "service_kiz0nzj", // Your Service ID
        "template_com1kih", // Your Template ID
        formRef.current,
        "U0gW80xAzisBWnbGs" // Your Public Key
      );

      setStatus("✅ Message sent successfully!");
      console.log("Email sent:", result.text);
      e.target.reset();
    } catch (error) {
      setStatus("❌ Error sending message. Try again!");
      console.error("Email send error:", error);
    }
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 text-white pt-16">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Content/Images/About us bg.jpg')" }}
        >
          <div className="container mx-auto px-4 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Recite, Understand, Memorize and Revise.
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4">
                We Offer Online Quran Courses
              </h2>
              <p className="mt-4 text-sm md:text-base">
                We warmly welcome all Muslims to come and understand the Holy
                Quran under our expert teachers.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <NavLink to="/courses">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold transition">
                    Our Courses
                  </button>
                </NavLink>
                <NavLink to="/contact-us">
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-400 hover:to-green-500 rounded-full font-semibold transition">
                    Let’s Discuss
                  </button>
                </NavLink>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                You will be impressed by our well-trained Quran tutors – it’s a
                guarantee!
              </p>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-md relative">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Learn From The Best
              </h3>
              <p className="text-sm text-gray-700 mb-6">
                Join our Quran Academy for expert guidance.
              </p>

              {/* EmailJS Form */}
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Your Country Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-yellow-500 to-green-600 text-white font-semibold rounded-md hover:from-yellow-400 hover:to-green-500 transition"
                >
                  🎓 Get 3 Days Free Trial
                </button>
              </form>

              {/* Success/Error Message */}
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

        {/* Arabic Text and Why Choose Section */}
        <div className="bg-white py-6 text-center">
          <p className="text-xl md:text-2xl text-green-700 font-bold">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
          <h2 className="text-2xl md:text-3xl text-green-900 font-bold mt-4">
            Why Choose Live Quran Teachers?
          </h2>
        </div>

        {/* WhatsApp Button */}
        <Link
          to="https://api.whatsapp.com/send?phone=9203124874272"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp alt="WhatsApp" className="w-8 h-8" />
        </Link>
      </div>

      {/* Other Sections */}
      <WhyChooseUs />
      <QuranAdvantages />
      <Accordion />
      <QuranLearningSection />
      <Courses />
      <WhyStudy />
      <IslamicLearningSection />
      <ContactUs />
    </>
  );
};

export default Home;
