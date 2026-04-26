

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State for loading
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Fetch product data from the JSON file
    const fetchProduct = async () => {
      try {
        const response = await fetch("/Data/Data.json"); // Replace with the correct path
        const data = await response.json();

        // Find the product with the matching ID
        const foundProduct = data.Shop.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (!product) {
    return <div>Product not found</div>; // Show a message if product is not found
  }

  // Navigate to the checkout page with the product ID
  const handleSubscribe = () => {
    navigate(`/store/${id}/subscribe/${id}`); // Navigate to checkout with product ID
  };

  return (
    <div className="container mx-auto p-6 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-bold text-black mb-2">{product.price}</p>
        <p className="text-gray-600 mb-4">{product.weight}</p>
        <p className="text-gray-800 mb-6">{product.description}</p>
        <ul className="list-disc ml-5 text-gray-800 space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {/* Subscribe button that triggers the navigation */}
        <button
          onClick={handleSubscribe}
          className="bg-white text-black font-bold py-2 px-6 border-2 border-black rounded-full hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-3/4 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
