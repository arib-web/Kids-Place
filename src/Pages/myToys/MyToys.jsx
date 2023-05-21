import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `https://kids-place-server.vercel.app/toys?seller_email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://kids-place-server.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  

  return (
    <div className="container sm:px-4">
      <div className="bg-blue-200 py-5 mt-4 mb-4 rounded-xl">
        <h2 className="text-5xl mb-10 mt-10 text-center underline">
          My Toys Page
        </h2>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full my-11 rounded-xl">
          <thead>
            <tr className="text-center">
              <th className="sm:table-cell hidden">Image</th>
              <th>Toy Name</th>
              <th className="sm:table-cell hidden">Sub-category</th>
              <th>Price</th>
              <th className="sm:table-cell hidden">Available Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {toys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
