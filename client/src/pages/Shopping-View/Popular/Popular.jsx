import React from "react";
import { Link } from "react-router-dom";

const popularCatagory = [
  {
    id: "sofa",
    label: "Sofa",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/qgbeaynwu4yvulchhi8y.jpg",
  },

  {
    id: "lobbyChair",
    label: "Lobby Chair",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425250/urbanCraft/catagories/popular/todtuxvgszb16xvdwksm.jpg",
  },

  {
    id: "sofawithDivan",
    label: "Sofa with Divan",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/mappwbldanmfdeyychpl.jpg",
  },

  {
    id: "dining",
    label: "Dinning",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/nag2rv3trdqciswqvghe.jpg",
  },

  {
    id: "miniCabinet",
    label: "Mini Cabinet",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/qdyecoi04y4cahvzlqog.jpg",
  },
];

const Popular = () => {
  return (
    <div className="lg:mt-7 sm:mt-48 mt-16">
      <h1 className="ml-5 text-3xl">Popular Furniture</h1>
      <div className=" w-full grid grid-cols-5 lg:gap-x-4 gap-x-48 lg:text-xl text-lg mt-3 overflow-x-scroll">
        {popularCatagory.map((popular) => (
          <div className="p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 ">
            <div className="w-full lg:h-60 h-44 overflow-hidden relative rounded-md ">
              <img
                className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
                src={popular.img}
                alt=""
              />
            </div>

            <p className="text-center mt-1 mb-1 font-mono font-semibold">
              {popular.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Popular;
