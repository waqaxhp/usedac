import React, { useEffect, useState } from "react";

const ScheduleVisit = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data.scheduleVisit))
      .catch((error) =>
        console.error("Error fetching schedule visit data:", error)
      );
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { heading, description, formFields, submitButton } = data;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-lg md:text-xl leading-relaxed">{description}</p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="space-y-6">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium">
                  {field.label}{" "}
                  {field.required && (
                    <span className="text-red-500">(required)</span>
                  )}
                </label>
                {field.fields.length > 1 ? (
                  <div className="flex gap-4 mt-1">
                    {field.fields.map((subField, subIndex) => (
                      <input
                        key={subIndex}
                        type={subField.type}
                        placeholder={subField.placeholder}
                        className="w-1/2 p-3 border border-gray-300 rounded"
                        required={field.required}
                      />
                    ))}
                  </div>
                ) : (
                  <input
                    type={field.fields[0].type}
                    placeholder={field.fields[0].placeholder}
                    className="w-full p-3 border border-gray-300 rounded mt-1"
                    required={field.required}
                  />
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black text-white font-bold rounded border-2 border-black hover:bg-white hover:text-black transition duration-300"
              >
                {submitButton.text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisit;
