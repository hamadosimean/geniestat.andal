import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const ServiceCard = (props) => {
  return (
    <Link
      to={`/services/${props.slug}`}
      className="flex flex-col md:flex-row bg-white p-4 m-4 rounded-xl shadow-md h-auto w-80 md:w-2/4 transition-transform duration-300 hover:scale-105"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-64 md:w-64 md:h-64 rounded-xl mb-4 md:mb-0 md:mr-4"
      />

      <div className="flex flex-col justify-center text-center md:text-left">
        <p className="mb-2 font-bold text-lg">{props.title}</p>
        <p className="text-gray-600 text-sm md:text-base">
          <Markdown>{props.description.slice(0, 300) + "..."}</Markdown>
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
