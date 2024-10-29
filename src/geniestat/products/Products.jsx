import React from "react";
import { Link } from "react-router-dom";
import ProductData from "./ProductData"; // Adjust the path as necessary
import GoToTopButton from "../components/goToTop";
const Products = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProductData.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            {/* <h2 className="text-xl font-semibold mb-2">{product.title}</h2> */}
            <p className="text-gray-600 mb-4">
              {product.description.slice(0, 200) + "..."}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">{product.price} FCFA</span>
              <Link
                to={`/product/${product.slug}`}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Products;
