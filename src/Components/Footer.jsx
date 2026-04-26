import React from "react";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Quran Learning Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/Content/Images/logo i.png"
              alt="Quran Online Lessons Logo"
              className="w-15 h-12 "
            />
            {/* <h2 className="text-lg font-bold ml-2">Quran Online Lessons</h2> */}
          </div>
          <p className="text-sm leading-relaxed">
            Quran Online Lessons.com offers a unique and engaging approach to
            learning the Quran online. Whether you're a child or an adult, our
            interactive lessons and expert tutors will guide you through the
            intricacies of Quranic recitation and understanding. With flexible
            learning options and a focus on personalized attention, we make
            Quran learning accessible and enjoyable for all.
          </p>
        </div>

        {/* Our Courses Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">OUR COURSES</h3>
          <ul className="space-y-2 text-sm">
            <li>📖 NOORANI QAIDA</li>
            <li>📘 TAJWEED-e-QURAN</li>
            <li>📋 TAFSEER-e-QURAN</li>
            <li>🕋 QURAN MEMORIZATION</li>
            <li>📚 ISLAMIC STUDIES</li>
            <li>🌙 DAILY SUPPLICATIONS</li>
            <li>⚙️ SIX KALIMAS</li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT DETAILS</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +923124874272</li>
            <li>📞 +923029052062</li>
            <li>📧 tehseenzafar037@gmail.com</li>
            <li className="flex gap-3">
              <a href="https://web.facebook.com/onlinequran37?mibextid=ZbWKwL&_rdc=1&_rdr">
                <FaFacebookSquare />
              </a>

              <a href="https://api.whatsapp.com/send?phone=9203124874272">
                <FaWhatsappSquare />
              </a>
            </li>
          </ul>
          <p className="mt-4">Follow Us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-6 pt-6 text-center text-xs text-gray-300">
        <p>
          Copyright © 2025 quranonlinelessons.com | Powered by
          <a href="https://survexmedia.com" className="text-red-500 mx-1">
            Malik Waqas
          </a>
          Made with <span className="text-green-500">💚</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
