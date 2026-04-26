import React, { useState, useEffect } from "react";

// LocationCard component for displaying the location data
const LocationCard = ({ locationData }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center space-around p-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-10">
        <div className="mx-10">
          <h1 className="text-4xl font-bold">{locationData.name}</h1>
          <p>{locationData.address}</p>
        </div>
        <div className="mx-10">
          <h2 className="text-2xl font-bold">CONTACT</h2>
          <p>
            {locationData.contact.email}
            <br />
            {locationData.contact.phone}
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-10">
        <div className="h-64 w-full">
          <iframe
            title={`${locationData.name} Map`}
            src={locationData.mapSrc}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// BrooklynComponent to map over the provided data and render the LocationCard
const BrooklynComponent = () => {
  // Data as a constant (useState and useEffect are not required since data is hardcoded)
  const locations = [
    {
      name: "BROOKLYN",
      address: "123 Demo St., Brooklyn, NY, 12345",
      contact: {
        email: "email@example.com",
        phone: "(555)-555-5555",
      },
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48350.57468942343!2d-74.01101500405835!3d40.682959093902166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a178c8f0b1f%3A0xe6877b860e98ea4d!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1697672006272!5m2!1sen!2sus",
    },
    {
      name: "MANHATTAN",
      address: "456 Example Ave., Manhattan, NY, 67890",
      contact: {
        email: "manhattan@example.com",
        phone: "(555)-555-5555",
      },
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48350.57468942343!2d-73.9876!3d40.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a178c8f0b1f%3A0xe6877b860e98ea4d!2sManhattan%2C%20NY!5e0!3m2!1sen!2sus!4v1697672006272!5m2!1sen!2sus",
    },
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <React.Fragment key={index}>
          {/* Render the LocationCard for each location */}
          <LocationCard locationData={location} />
          {/* Separator between cards */}
          {index < locations.length - 1 && (
            <hr className="border-gray-300 my-8" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BrooklynComponent;
