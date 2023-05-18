import React from "react";
import blog1 from "../../../assets/blog-1.webp"
import blog2 from "../../../assets/blog-2.webp"
import blog3 from "../../../assets/blog-3.webp"

const Blog = () => {
  return (
    <div className="container my-16">
      <div className="text-center my-16">
        <h2 className=" text-3xl md:text-5xl font-bold">Latest Blog</h2>
        <p className="texl-lg md:text-xl w-full md:w-1/2 mx-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={blog1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <span>By, <span className="text-[#F379A7]">June Cha</span> May 25, 2021</span>
            <h2 className="card-title mb-4">Mother revolves around her children</h2>
            <div className="card-actions">
              <button className="btn ">Buy Now</button>
            </div>
          </div>
        </div>
        {/* blog 1 end here */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" ">
            <img
              src={blog2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <span>By, <span className="text-[#F379A7]">June Cha</span> January 10, 2023</span>
            <h2 className="card-title mb-4">Baby Planet's toys makes learning so easy</h2>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* blog-2 end here  */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={blog3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <span>By, <span className="text-[#F379A7]">June Cha</span> July 24, 2022</span>
            <h2 className="card-title mb-4">Learn while you grow toys Baby Planet</h2>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* blog-3 end here  */}
      </div>
    </div>
  );
};

export default Blog;
