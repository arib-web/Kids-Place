import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error adding toy:", error);
      });
  
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-200 max-w-4xl mx-auto py-5 mt-4 mb-4 rounded-xl">
        <h2 className="text-5xl mb-10 mt-10 text-center underline">
          My Toys Page
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-blue-200 rounded p-6 shadow-md"
      >
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <input
              className="text-input  w-full py-3 pl-3 rounded"
              {...register("seller_name")}
              placeholder="Seller Name"
              value={user?.displayName}
            />
          </div>
          <div className="md:col-span-1">
            <input
              className="text-input w-full py-3 pl-3 rounded"
              value={user?.email}
              {...register("seller_email")}
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div className="md:col-span-1">
            <input
              className="w-full py-3 pl-3 rounded"
              type="url"
              placeholder="Photo URL"
              {...register("photo", { required: true })}
            />
          </div>
          <div className="md:col-span-1">
            <input
              className="w-full py-3 pl-3 rounded"
              type="text"
              placeholder="Toy Name"
              {...register("toy_name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="md:col-span-1">
            <select
              className="text-input bg-white w-full py-3 pl-3 rounded"
              {...register("sub_category", { required: true })}
            >
              <option value="car">Car Toy</option>
              <option value="police">Police Car</option>
              <option value="truck">Mini Truck</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <input
              className="w-full py-3 pl-3 rounded"
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="md:col-span-1">
            <input
              className="w-full py-3 pl-3 rounded"
              type="number"
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="md:col-span-1">
            <input
              className="w-full py-3 pl-3 rounded"
              type="number"
              placeholder="Available Quantity"
              {...register("quantity", { required: true })}
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              className="w-full py-3 pl-3 rounded"
              {...register("description", { required: true })}
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <input className="btn btn-block" value="Add Toy" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
