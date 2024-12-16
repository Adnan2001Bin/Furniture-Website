import React, { useEffect } from "react";
import "./SubCatagoriesPage.css";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const subCatagories = [
  {
    id: "bedroomSet",
    label: "Bedroom Set",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250242/urbanCraft/catagories/bedroom/subcategories/btk7pillapu6ogoy9o7s.jpg",
  },
  {
    id: "bed",
    label: "Bed",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250241/urbanCraft/catagories/bedroom/subcategories/eutgnm5yadnvuc0ec49o.jpg",
  },
  {
    id: "readingTable",
    label: "Reading Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250241/urbanCraft/catagories/bedroom/subcategories/xybzkbfsjoxxlhwtvfe7.jpg",
  },
  {
    id: "bedSideTable",
    label: "BedSide Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250242/urbanCraft/catagories/bedroom/subcategories/nynesgf2m99jz1o38puk.jpg",
  },
  {
    id: "wardrobe",
    label: "Wardrobe",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250242/urbanCraft/catagories/bedroom/subcategories/ozp2kovvqfevxk2ldvi2.jpg",
  },
  {
    id: "dressingTable",
    label: "Dressing Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250241/urbanCraft/catagories/bedroom/subcategories/obue8rsncdjha635k69k.jpg",
  },
];

const BedRoomSubCatagoriesPage = () => {
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
      category: ["bedroom"], // Include the parent category
      [section]: [getCurrentItem.id], // Include the selected subcategory
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
            src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1733250243/urbanCraft/catagories/bedroom/subcategories/wnl9s7ubkz9p1srhhbzp.jpg"
            alt="Bedroom Furniture"
          />
        </div>
        <div className="BedHeadingText lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20 hidden">
          <h1 className="text-6xl font-bold">Bedroom Furniture</h1>
          <h3 className="text-2xl font-medium mt-3">
            GIVES YOUR COMFORT WITH REGAL TOUCH
          </h3>
          <p className="text-lg mt-3">
            Urban-Craft is always there for you to provide extraordinary designs
            which deliver comfort with regal touch.
          </p>
        </div>
      </div>

      <div className="w-full lg:mt-14 mt-5 p-5">
        <h1 className="text-center text-3xl text-orange-700">Bedroom</h1>
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg">
          {subCatagories.map((subCategorie) => (
            <div
              key={subCategorie.id}
              onClick={() =>
                handleNavigateToListingPage(subCategorie, "subcategory")
              }
              className="p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300"
            >
              <div className="w-full lg:h-60 h-44 overflow-hidden relative rounded-md">
                <img
                  className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
                  src={subCategorie.img}
                  alt={subCategorie.label}
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

export default BedRoomSubCatagoriesPage;
