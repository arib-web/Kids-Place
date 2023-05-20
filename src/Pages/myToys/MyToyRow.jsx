import React from "react";

const MyToyRow = ({ toy }) => {
  const {
    _id,
    seller_name,
    seller_email,
    photo,
    toy_name,
    sub_category,
    price,
    rating,
    quantity, description,
  } = toy;
  return (
    <tr className="text-center">
    <td className=""><img className="w-16 rounded-xl" src={photo} alt={toy_name} /></td>
    <td>{toy_name}</td>
    <td >{sub_category}</td>
    <td>${price}</td>
    <td >{quantity}</td>
    <td>
      <button className="btn">Update</button>
    </td>
    <td>
      <button className="btn">delete</button>
    </td>
  </tr>
  );
};

export default MyToyRow;
