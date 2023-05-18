import React from "react";
import img from "../../../assets/2.webp";

import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Trending = () => {
  return (
    <div className="container">
      <div className="text-center  my-16">
        <h2 className=" text-3xl md:text-5xl font-bold">Trending Product</h2>
        <p className="texl-lg md:text-xl w-full md:w-1/2 mx-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mb-16">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?size=626&ext=jpg&ga=GA1.2.1896889893.1665354643&semt=ais"
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avengers</h2>
                <p>$ 20.00</p>
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={4.5}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions">
                  <button className="btn ">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
