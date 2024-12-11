// import { useRef } from 'react'
import React, { useEffect } from "react";
import "./SubCatagoriesPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

const subCatagories = [
  {
    id: "dinningroomSet",
    label: "Dinning Room Set",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252828/urbanCraft/catagories/dinning/subcatagories/xptzgxedh15isjrmadtw.jpg",
  },
  {
    id: "dinningChair",
    label: "Dinning Chair",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252828/urbanCraft/catagories/dinning/subcatagories/l4eakhftl9dboc0noepo.jpg",
  },
  {
    id: "cafeteria",
    label: "Cafeteria",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252828/urbanCraft/catagories/dinning/subcatagories/m8reficlgyidlctsfrid.jpg",
  },
  {
    id: "dinnerWagone",
    label: "Dinner Wagone",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252872/urbanCraft/catagories/dinning/subcatagories/aglpikkbgcvxie1vrrto.jpg",
  },
  {
    id: "showcase",
    label: "Showcase",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252827/urbanCraft/catagories/dinning/subcatagories/qd3mneqfxjuc5rurjdp7.jpg",
  },
  {
    id: "teaTrolley ",
    label: "Tea Trolley",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252828/urbanCraft/catagories/dinning/subcatagories/vnj98q4jfw4yibjcgkbb.jpg",
  },
];

const DinningSubCatagoriesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  return (
    <div>
      <div className="flex justify-between shadow-md w-full lg:h-96">
        <div className="w-full sm:h-72 h-60 md:h-96 lg:w-7/12 lg:h-full">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1733252829/urbanCraft/catagories/dinning/subcatagories/pfxz2wuwrgjhpnol1ixq.jpg"
            alt=""
          />
        </div>
        <div className="BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden">
          <h1 className="text-6xl font-bold ">Dining Room Furniture</h1>
          <h3 className="text-2xl font-medium mt-3">
            ORGANIZE YOUR FAMILY MEAL TIME IN A COMFORTABLE STYLE
          </h3>
          <p className="text-lg mt-3">
            Enjoy every family meal time with HATIL’s eye-catching designed
            dining table set, as organized and comfortable as you want.
          </p>
        </div>
      </div>

      <div className="w-full lg:mt-14 mt-5 p-5">
        <h1 className="text-center text-3xl text-orange-700 w">Dining Room</h1>

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg">
            {subCatagories.map((subCategorie) => (
              <div
                onClick={() =>
                  handleNavigateToListingPage(subCategorie, "subcategory")
                }
                className="p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 "
              >
                <div className="w-full lg:h-60 h-44 overflow-hidden relative rounded-md ">
                  <img
                    className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
                    src={subCategorie.img}
                    alt={subCategorie.img}
                  />
                </div>
                <p className="text-center mt-3 font-mono font-semibold">
                  {subCategorie.label}
                </p>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default DinningSubCatagoriesPage;