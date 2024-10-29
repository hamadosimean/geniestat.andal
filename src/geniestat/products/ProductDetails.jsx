import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData"; // Adjust the path as necessary
import SendWhatsapp from "../components/SendWhatsapp";
const ProductDetail = () => {
  const { slug } = useParams(); // Get the product ID from the URL
  const product = ProductData.find((item) => item.slug === slug);

  // const features =
  //   product.features.length > 0 ? (
  //     <ul>
  //       {product.features.map((feature, index) => (
  //         <li key={index}>{feature}</li>
  //       ))}
  //     </ul>
  //   ) : (
  //     ""
  //   );

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover  mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="flex items-center mb-6">
          <span className="text-2xl font-bold mr-4">{product.price} FCFA</span>
        </div>
        <p className="text-xl text-gray-700 mb-4">{product.description}</p>
        {/* {features && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">
              Ce que vous pouvez faire
            </h1>
            {features}
          </div>
        )} */}

        <SendWhatsapp
          product={
            product.title +
            "   prix :" +
            product.price +
            "  FCFA " +
            product.description.slice(0, 120) +
            "..."
          }
          text="Bonjour, j'ai vu ce produit"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
