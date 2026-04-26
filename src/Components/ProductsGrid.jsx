import React from "react";

const products = [
  {
    id: 1,
    image: "/Content/Images/Bottle.png",
    name: "Fresh Pressed Juices",
    price: "$25.00 every month",
  },
  {
    id: 2,
    image: "/Content/Images/Bar.png",
    name: "Protein Bars",
    price: "$36.00 every month",
  },
  {
    id: 3,
    image: "/Content/Images/tee-shirt-crew-klipsan.png",
    name: "Endurance T-Shirt",
    price: "$30.00",
  },
  {
    id: 4,
    image: "/Content/Images/tee-shirt-crew.png",
    name: "Product 4",
    price: "$40.00",
  },
  {
    id: 5,
    image: "/Content/Images/Protein-Powder.png",
    name: "Product 5",
    price: "$50.00",
  },
  {
    id: 6,
    image: "/Content/Images/gift-card.png",
    name: "Product 6",
    price: "$60.00",
  },
];

const ProductsGrid = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4 w-32 h-32 object-contain"
            />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
