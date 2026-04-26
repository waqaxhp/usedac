import React from "react";

const QuranTutoring = () => {
  return (
    <>
      

      <div className="bg-green-900 text-white">
        {/* Vision & Mission Section */}

        <div
          className="relative text-center py-16 px-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Content/Images/About us bg.jpg')", // Replace with your image URL
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Our Vision & Mission
            </h2>
            <p className="max-w-3xl mx-auto leading-relaxed text-white">
              Our mission is to bridge the gap between individuals and the Quran
              through personalized learning. We believe that understanding and
              connecting with the Holy Book is a transformative experience that
              can enrich lives and strengthen faith. Our expert tutors offer
              tailored guidance in Quranic recitation, pronunciation, and
              Tajweed, ensuring that learners of all levels can progress at
              their own pace. By providing a supportive and engaging learning
              environment, we aim to empower individuals to unlock the wisdom
              and beauty of the Quran and embark on a lifelong journey of
              spiritual growth.
            </p>
          </div>
        </div>

        {/* Meet the CEO Section */}
        <div className="bg-white text-gray-800 py-16 px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Meet the Visionary CEO OF Live Quran Teachers.com
            </h3>
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-1 bg-green-600 mx-2"></div>
              <div className="w-24 h-1 bg-green-600 mx-2"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* CEO Image */}
            <div className="flex justify-center">
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/Content/Images/Pic.png"
                  alt="CEO"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* CEO Description */}
            <div>
              <p className="text-lg leading-relaxed">
                <strong>Muhammad Waqas</strong>, a visionary leader in Quranic
                education, has dedicated <strong>3 years</strong> to guiding
                organizations toward innovative teaching programs. His expertise
                in bridging traditional principles with contemporary practices
                ensures our initiatives not only preserve the Quran’s essence
                but also cater to modern learners. Passionate about fostering a
                deeper understanding of the Quran and cultivating a culture of
                lifelong learning, Muhammad Hassan leads Live Quran Teachers
                toward excellence in spiritual and educational development. Join
                us on a journey of Quranic enlightenment and witness the
                transformative power of understanding the Holy Book.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Icon */}
        {/* <div className="fixed bottom-4 right-4">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48a11.784 11.784 0 00-16.64 0 11.789 11.789 0 000 16.64c4.4 4.4 11.51 4.32 15.85-.06 2.1-2.08 3.3-4.99 3.3-8.02 0-3.03-1.2-5.94-3.3-8.02zm-1.41 14.14a9.45 9.45 0 01-13.16 0c-3.7-3.7-3.68-9.67.06-13.36a9.44 9.44 0 0113.1 0c1.8 1.81 2.83 4.25 2.83 6.8 0 2.55-1.03 4.99-2.83 6.8zm-7.78-7.27c-.7-.18-1.39.16-1.73.71l-.58.96a.97.97 0 00.24 1.33l1.34 1.13c.68.57 1.5.93 2.37 1.01.87.07 1.75-.09 2.51-.48a.97.97 0 00.35-1.33l-.78-1.29a.97.97 0 00-1.22-.38c-.24.1-.5.2-.78.29-.27.1-.57.2-.88.27-.4.09-.76-.17-.88-.58l-.38-.87a.97.97 0 00-1.05-.57zm-2.7 2.89l-.35-.59a2.97 2.97 0 013.24-4.29l.94.34a2.97 2.97 0 011.86 2.61c0 1.38-.76 2.54-1.86 3.09a2.97 2.97 0 01-3.24-.66l-.59-.35z" />
            </svg>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default QuranTutoring;
