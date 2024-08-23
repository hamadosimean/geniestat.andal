import React from "react";
import { Link } from "react-router-dom";
const Card = ({ route, id, ...props }) => {
  return (
    <Link
      to={`${route}/${id}`}
      className="flex bg-white flex-col m-4 justify-center md:justify-left md:pl-10 md:pr-10  md:justify-left md:justify-items-left  md:flex-row p-4 mb-4 border-blue-50 ring-2 ring-blue rounded-xl shadow-xl h-auto md:h-auto   w-96 md:w-2/4"
    >
      <img
        src={props.image}
        alt=""
        className="w-full h-64 md:size-64 rounded-xl mr-10 "
      />

      <div className="flex flex-col  ">
        <p className="mb-2 font-bold">{props.title}</p>
        <p> {props.description.slice(0, 300) + "..."}</p>
      </div>
    </Link>
  );
};

export default Card;
