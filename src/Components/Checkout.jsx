
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Capture the ID from the URL

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.Shop))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Find the product with the matching ID
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">KLIPSAN</h1>
          <p className="text-sm text-gray-500">
            Checkout is closed. Stripe is required to capture payment for
            Subscriptions.{" "}
            <a href="#" className="text-blue-500 underline">
              Click here to learn more
            </a>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-xl font-bold mb-4">1. Your Email</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                />
                <p className="text-sm text-gray-600">
                  You'll receive receipts and notifications at this email
                  address.{" "}
                  <a href="#" className="text-blue-500 underline">
                    Sign in
                  </a>
                </p>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="h-4 w-4" />
                  <label htmlFor="newsletter" className="text-sm text-gray-800">
                    Sign up to receive news and updates.
                  </label>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-md font-bold hover:bg-gray-800">
                  Continue
                </button>
              </div>
            </div>

            {/* Other Steps */}
            {["Delivery Methods", "Payment", "Review & Subscribe"].map(
              (step, index) => (
                <div
                  key={index}
                  className="bg-gray-200 shadow-md rounded-md p-6 text-gray-500 cursor-not-allowed"
                >
                  <h2 className="text-xl font-bold">{`${
                    index + 2
                  }. ${step}`}</h2>
                </div>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-md p-6 space-y-6">
            {/* Subscription Summary */}
            <div>
              <h2 className="text-xl font-bold mb-4">Subscription Summary</h2>
              {product ? (
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                  <p className="font-bold text-gray-800 ml-auto">
                    {product.price}
                  </p>
                </div>
              ) : (
                <p>Loading product...</p>
              )}
            </div>

            {/* Pricing Details */}
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$30.00</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>--</p>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-gray-800">
                <p>Total</p>
                <p>$30.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
