import React from "react";

const SendWhatsapp = ({
  phoneNumber = "22651306985",
  product,
  text = " Bonjour, j'ai vu",
}) => {
  const message = ` ${text} + "${product}"+ sur votre platforme et ça m'interresse!`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 pr-4 pt-2 pl-4 pb-2 bg-blue-600 w-40 text-white"
      >
        Je suis interressé
      </a>
    </div>
  );
};

export default SendWhatsapp;