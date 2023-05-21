import React from "react";

const ToyGallery = () => {
    
  return (
    <div className="container px-4">
      <div className="text-center my-16">
        <h2 className="text-3xl md:text-4xl font-bold">Toy Gallery</h2>
        <p className="text-lg md:text-xl w-96 md:w-1/2 mx-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" /> 
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" />
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" />
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" />
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" />
        <img className="rounded-xl" src={"https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?size=626&ext=jpg&ga=GA1.1.1896889893.1665354643&semt=ais"} alt="" />
      </div>
    </div>
  );
};

export default ToyGallery;
