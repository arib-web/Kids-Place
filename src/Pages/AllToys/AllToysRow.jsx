import React from "react";

const AllToysRow = ({ toy }) => {
  const {
    _id,
    seller_name,
    seller_email,
    photo,
    toy_name,
    sub_category,
    price,
    rating,
    quantity,
    description,
  } = toy;
  return (
    <tr className="text-center">
      <td className="sm:table-cell hidden">{seller_name}</td>
      <td>{toy_name}</td>
      <td className="sm:table-cell hidden">{sub_category}</td>
      <td>${price}</td>
      <td className="sm:table-cell hidden">{quantity}</td>
      <td>
        {/* <Link to={`/details/${_id}`}> */}
          <button className="btn">View Details</button>
        {/* </Link> */}
      </td>
    </tr>
  );
};

export default AllToysRow;
