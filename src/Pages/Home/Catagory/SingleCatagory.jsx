import React from "react";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { TabPanel } from "react-tabs";

const SingleCatagory = ({ item }) => {
  const { picture, name, price, sub_category, rating } = item;

  return (
    <div className="card card-side bg-blue-100 shadow-xl h-auto">
      <figure className="w-1/2 pl-2 ">
        <img src={picture} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold  uppercase">{name}</h2>
        <p className="font-bold">Price: {price}</p>
        <p className=" font-bold">
          Sub Category: <span className="uppercase ">{sub_category}</span>
        </p>
        <div className="card-actions justify-end items-center mt-4">
          <Rating
            className="text-warning"
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <button className="btn ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
