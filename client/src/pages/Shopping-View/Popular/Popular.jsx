import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const subCatagories = [
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
    id: "divan",
    label: "Divan",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/mappwbldanmfdeyychpl.jpg",
  },

  {
    id: "dinningroomSet",
    label: "Dinning Room Set",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732425251/urbanCraft/catagories/popular/nag2rv3trdqciswqvghe.jpg",
  },

  {
    id: "tvCabinet",
    label: "TV Cabinet",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733301529/urbanCraft/catagories/popular/zczz1x4trgnipaopczqo.jpg",
  },
];

const Popular = () => {
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
    <div className="lg:mt-7 sm:mt-48 mt-16">
      <h1 className="ml-5 text-3xl">Popular Furniture</h1>
      <div className=" w-full grid grid-cols-5 lg:gap-x-4 gap-x-48 lg:text-xl text-lg mt-3 overflow-x-scroll">
        {subCatagories.map((subCategorie) => (
          <div onClick={() =>
                handleNavigateToListingPage(subCategorie, "subcategory")
              } className="p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 ">
            <div className="w-full lg:h-60 h-44 overflow-hidden relative rounded-md ">
              <img
                className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
                src={subCategorie.img}
                alt={subCategorie.label}
              />
            </div>

            <p className="text-center mt-1 mb-1 font-mono font-semibold">
              {subCategorie.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Popular;
