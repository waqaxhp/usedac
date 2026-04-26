import React from "react";

const features = [
  {
    id: 1,
    icon: "🌐",
    title: "No Language Barrier",
    description:
      "Master the Quran online without language barriers. Our skilled English-speaking tutors provide clear Tajweed lessons.",
  },
  {
    id: 2,
    icon: "👥",
    title: "One-on-One Classes",
    description:
      "We offer personalized classes with a one-on-one learning approach, ensuring gender-specific instruction.",
  },
  {
    id: 3,
    icon: "⏰",
    title: "24/7 Service",
    description:
      "Our flexible Quran lessons are available anytime, making it easy to learn even with the busiest schedules.",
  },
  {
    id: 4,
    icon: "🎙️",
    title: "Record and Playback",
    description:
      "Learn Quran effectively with our online Quran Academy record and replay feature. Review classes at your own pace.",
  },
  {
    id: 5,
    icon: "👩‍🏫",
    title: "Female Quran Tutors",
    description:
      "Learn Quran with our dedicated female instructors in a comfortable and empowering online learning environment.",
  },
  {
    id: 6,
    icon: "🔄",
    title: "Alternative Teachers",
    description:
      "We prioritize continuity of learning. If your teacher is absent, a qualified substitute will be available to teach your class.",
  },
];

const WhyStudy = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Why Study With Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl text-green-600 bg-green-50 group-hover:bg-green-100 p-3 rounded-full transition-colors">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-center text-gray-800 mt-16">
        Discover Why Our Students And Parents Love Us
      </h3>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            We invite you to hear directly from our satisfied parents about
            their experience.
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Our Quran Academy offers personalized, supportive learning with
            dedicated teachers, a comprehensive curriculum, and a positive
            environment. That’s why our students love us and our teaching
            methods.
          </p>
          <div className="flex justify-center md:justify-start">
            <span className="text-yellow-500 text-lg">★★★★★</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/XgfV4NCr9Js"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
