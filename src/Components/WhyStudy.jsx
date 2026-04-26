import React from "react";

const features = [
  {
    id: 1,
    icon: "🌐",
    title: "No Language Barrier",
    description:
      "Get AC buying, selling, and repair services without any communication barriers. Our support team helps you in multiple languages for easy understanding.",
  },
  {
    id: 2,
    icon: "👥",
    title: "One-on-One Service",
    description:
      "We provide personalized AC repair and installation services with dedicated technician support for your specific needs.",
  },
  {
    id: 3,
    icon: "⏰",
    title: "24/7 Support Service",
    description:
      "Our AC repair and emergency support services are available 24/7 to ensure your cooling system works anytime you need it.",
  },
  {
    id: 4,
    icon: "🎙️",
    title: "Inspection & Reporting",
    description:
      "We provide complete AC inspection with detailed reports so you can understand the condition and performance of your unit.",
  },
  {
    id: 5,
    icon: "👨‍🔧",
    title: "Expert Technicians",
    description:
      "Get service from experienced AC technicians who handle installation, repair, gas filling, and maintenance professionally.",
  },
  {
    id: 6,
    icon: "🔄",
    title: "Replacement Support",
    description:
      "If your AC is beyond repair, we help you replace it with the best available new or used AC at a fair price.",
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
        Discover Why Our Customers Trust Our AC Services
      </h3>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            We invite you to hear directly from our satisfied customers about
            their experience.
          </h4>

          <p className="text-sm text-gray-600 mb-4">
            Our AC service platform offers reliable buying, selling,
            installation, and repair solutions with expert technicians. We focus
            on quality service, fair pricing, and customer satisfaction, which
            is why our clients trust and recommend us.
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
              src="https://www.youtube.com/embed/E7_1M5J_tf0"
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
