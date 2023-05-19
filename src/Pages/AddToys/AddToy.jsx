import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <form className="max-w-4xl mx-auto bg-white rounded p-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <label htmlFor="pictureUrl" className="block font-medium mb-2">
              Picture URL of the toy
            </label>
            <input
              id="pictureUrl"
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter picture URL"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter toy name"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="sellerName" className="block font-medium mb-2">
              Seller Name
            </label>
            <input
              id="sellerName"
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter seller name"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="sellerEmail" className="block font-medium mb-2">
              Seller Email
            </label>
            <input
              id="sellerEmail"
              type="email"
              className="w-full border rounded p-2"
              placeholder="Enter seller email"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="subCategory" className="block font-medium mb-2">
              Sub-category
            </label>
            <select id="subCategory" className="w-full border rounded p-2">
              <option value="">Select sub-category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label htmlFor="price" className="block font-medium mb-2">
              Price
            </label>
            <input
              id="price"
              type="number"
              className="w-full border rounded p-2"
              placeholder="Enter price"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="rating" className="block font-medium mb-2">
              Rating
            </label>
            <input
              id="rating"
              type="number"
              className="w-full border rounded p-2"
              placeholder="Enter rating"
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="quantity" className="block font-medium mb-2">
              Available Quantity
            </label>
            <input
              id="quantity"
              type="number"
              className="w-full border rounded p-2"
              placeholder="Enter available quantity"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description" className="block font-medium mb-2">
              Detail Description
            </label>
            <textarea
              id="description"
              className="w-full border rounded p-2"
              placeholder="Enter detail description"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn"
            >
              Add Toy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
