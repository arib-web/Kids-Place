import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";
import useTitle from "../../PageTitle/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle("AllToys")
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://kids-place-server.vercel.app/toys`);
      const data = await response.json();
      setToys(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container sm:px-4">
      <div className="bg-blue-200 py-5 mt-4 mb-4 rounded-xl">
        <h2 className="text-5xl mb-10 mt-10 text-center underline">
          All Toys Page
        </h2>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full my-11 rounded-xl">
          <thead>
            <tr className="text-center">
              <th className="sm:table-cell hidden">Seller</th>
              <th>Toy Name</th>
              <th className="sm:table-cell hidden">Sub-category</th>
              <th>Price</th>
              <th className="sm:table-cell hidden">Available Quantity</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {toys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
