import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const Modal = (props) => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleToysEdit = (id) => {
    const {
      photo,
      rating,
      price,
      sub_category,
      toy_name,
      quantity,
      description,
    } = watch();
  
    fetch(`https://kids-place-server.vercel.app/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        photo,
        rating,
        price,
        sub_category,
        toy_name,
        quantity,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            const updatedToys = toys.map((toy) => {
                if (toy._id === id) {
                  return {
                    ...toy,
                    photo: photo,
                    rating: rating,
                    price: price,
                    sub_category: sub_category,
                    toy_name: toy_name,
                    quantity: quantity,
                    description: description,
                  };
                }
                return toy;
              });
              setToys(updatedToys);
            }
      });
  };
  
  

  // Set initial values for form fields
  const defaultValues = {
    seller_name: user?.displayName,
    seller_email: user?.email,
    photo: props.toys?.photo || "",
    toy_name: props.toys?.toy_name || "",
    sub_category: props.toys?.sub_category || "car",
    price: props.toys?.price || "",
    rating: props.toys?.rating || "",
    quantity: props.toys?.quantity || "",
    description: props.toys?.description || "",
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        {...props}
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(() =>
              handleToysEdit(props.toy?._id)
            )}
            className="max-w-4xl mx-auto bg-blue-200 rounded p-6 shadow-md"
          >
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <input
                  className="text-input  w-full py-3 pl-3 rounded"
                  {...register("seller_name")}
                  placeholder="Seller Name"
                  defaultValue={defaultValues.seller_name}
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="text-input w-full py-3 pl-3 rounded"
                  {...register("seller_email")}
                  placeholder="Your Email"
                  type="email"
                  defaultValue={defaultValues.seller_email}
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full py-3 pl-3 rounded"
                  type="url"
                  placeholder="Photo URL"
                  {...register("photo", { required: true })}
                  defaultValue={defaultValues.photo}
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full py-3 pl-3 rounded"
                  type="text"
                  placeholder="Toy Name"
                  {...register("toy_name", { required: true, maxLength: 80 })}
                  defaultValue={defaultValues.toy_name}
                />
              </div>
              <div className="md:col-span-1">
                <select
                  className="text-input bg-white w-full py-3 pl-3 rounded"
                  {...register("sub_category", { required: true })}
                  defaultValue={defaultValues.sub_category}
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
                  defaultValue={defaultValues.price}
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full py-3 pl-3 rounded"
                  type="number"
                  placeholder="Rating"
                  {...register("rating", { required: true })}
                  defaultValue={defaultValues.rating}
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full py-3 pl-3 rounded"
                  type="number"
                  placeholder="Available Quantity"
                  {...register("quantity", { required: true })}
                  defaultValue={defaultValues.quantity}
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  className="w-full py-3 pl-3 rounded"
                  {...register("description", { required: true })}
                  defaultValue={defaultValues.description}
                />
              </div>
              <div className="md:col-span-2 flex justify-center">
                <input
                  className="btn btn-block"
                  value="Update"
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn text-center">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
