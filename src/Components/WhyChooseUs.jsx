import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-green-900 font-medium">
            Live Quran Teachers offers personalized lessons to suit your pace
            and learning style. We offer different packages for accurate Quranic
            reading with proper pronunciation. Master accurate pronunciation,
            explore Tajweed rules, and connect with a supportive community. Our
            expert teachers and interactive platform make learning the Quran a
            joy.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              We Offer Online Quran Classes with Tajweed For Adults and
              Children.
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              The demands of modern life often make it challenging for many
              Muslims to dedicate as much time as they would like to studying
              the Quran. That’s why we provide a variety of online Quran
              learning options that can be tailored to your schedule, interests,
              and preferred teaching style. Our extensive range of classes is
              designed to fit even the busiest of schedules, offering a
              sanctuary of devotion to the Quran.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Learning the Quran online brings the peace of mind that comes from
              knowing you are on the righteous path. This is why our engaging,
              interesting, and effective classes are cherished by students in
              over ninety countries worldwide, spreading the love and knowledge
              of the Quran. We offer free trial lessons to help you find the
              courses and instructors that best meet your Quran learning needs
              and preferences. Once you have selected your preferred teachers
              and subjects, you can easily register for Quran classes at{" "}
              <span className="font-semibold">livequranteachers.com</span>.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Content/Images/Package-Comparison-Chart-23-min-.png"
              alt="Online Quran Classes Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
