

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from products.json
    fetch("/Data/Data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setProducts(data.Shop)) // Access the "Shop" key
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="w-full bg-white shadow-md rounded-lg p-6 text-center max-w-screen-md mx-auto">
        <Link to={`/store/5`}>
          <div className="w-full flex items-center justify-center">
            <img
              src="/Content/Images/Protein-Powder (1).png" // Replace with your product image URL
              alt="Klipsan Protein Powder"
              className="max-w-full h-auto object-contain"
            />
          </div>
          {/* Change to dynamic product link */}{" "}
         
          <button className="mt-6 px-8 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
            BUY NOW
          </button>
        </Link>
      </div>

      <div className="bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <NavLink to={`/store/${product.id}`} key={product.id}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-4 w-full h-40 object-contain"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
