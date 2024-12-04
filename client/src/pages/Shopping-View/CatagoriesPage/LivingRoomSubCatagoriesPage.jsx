import React, { useEffect } from "react";
import "./SubCatagoriesPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

const subCatagories = [
  {
    id: "sofa",
    label: "Sofa",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254890/urbanCraft/catagories/livingRoom/subCatagories/mi1o45vpsyyeowma7xte.jpg",
  },
  {
    id: "centerTable",
    label: "CenterTable",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254890/urbanCraft/catagories/livingRoom/subCatagories/wb3olp9oul86bdb4ez3q.jpg",
  },
  {
    id: "divan",
    label: "Divan",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254890/urbanCraft/catagories/livingRoom/subCatagories/vgjzpigkocjxw4nvlvyi.jpg",
  },
  {
    id: "chair",
    label: "Chair",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254890/urbanCraft/catagories/livingRoom/subCatagories/apbhauj5uqwvwbrevzdh.jpg",
  },
  {
    id: "tvCabinet",
    label: "TV Cabinet",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254890/urbanCraft/catagories/livingRoom/subCatagories/s7cn6nrcuohjadzhbash.jpg",
  },
  {
    id: "shoeRack ",
    label: "Shoe Rack",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254864/urbanCraft/catagories/livingRoom/subCatagories/qcnzkwwqnnjx2j4bjdhp.jpg",
  },
];

const LivingRoomSubCatagoriesPage = () => {
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
            src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1733254889/urbanCraft/catagories/livingRoom/subCatagories/ee3u3wb1x2tt6wv00xum.jpg"
            alt=""
          />
        </div>
        <div className="BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden">
          <h1 className="text-6xl font-bold ">Livingroom Furniture</h1>
          <h3 className="text-2xl font-medium mt-3">
            COMFY & BEAUTY AT ITS BEST
          </h3>
          <p className="text-lg mt-3">
            Explore our Interior collection for premium furniture that blends
            exquisite craftsmanship with timeless elegance. Discover furniture
            that transcends trends, offering a timeless elegance that transforms
            your space into a sanctuary of sophistication.
          </p>
        </div>
      </div>

      <div className="w-full lg:mt-14 mt-5 p-5">
        <h1 className="text-center text-3xl text-orange-700 w">Living Room</h1>

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

export default LivingRoomSubCatagoriesPage;
