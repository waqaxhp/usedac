import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
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
    <div className="min-h-screen bg-green-50">
      <div className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-700">CONTACT US</h1>
          <p className="text-lg text-gray-600 mt-4">
            Ready to start your journey in learning the Quran? We’re here to
            help! Our dedicated team is excited to support you every step of the
            way.
          </p>
        </div>

        {/* Form and Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-md relative">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Learn From The Best
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              Join our Quran Academy for expert guidance.
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number?"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="country"
                placeholder="Your Country Name?"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-yellow-500 to-green-600 text-white font-semibold rounded-md hover:from-yellow-400 hover:to-green-500 transition"
              >
                🎓 Get 3 Days Free Trial
              </button>
            </form>
            {/* Status Message */}
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

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/Content/Images/contact.png"
              alt="Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
      <Link
        to="https://api.whatsapp.com/send?phone=9203124874272"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp alt="WhatsApp" className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default ContactUs;
