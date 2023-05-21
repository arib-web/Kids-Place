import React from "react";
import Modal from "./Modal";

const MyToyRow = ({ toy, handleDelete, handleBookingConfirm }) => {
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
      <td className="">
        <img className="w-16 rounded-xl" src={photo} alt={toy_name} />
      </td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        {/* <button
          
          className="btn"
        >
          Update
        </button> */}

        {/* The button to open modal */}
        <label
          htmlFor="my-modal-6"
          className="btn"
          >
          Edit
        </label>
        <Modal
          toy={toy}
        ></Modal>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn">
          delete
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
