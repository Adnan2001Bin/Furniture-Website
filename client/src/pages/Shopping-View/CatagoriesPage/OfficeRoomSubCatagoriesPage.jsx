import React, { useEffect } from "react";
import "./SubCatagoriesPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

const subCatagories = [
  {
    id: "officeSofa",
    label: "Office Sofa",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/saktpnck7j0cd3inrwhw.jpg",
  },
  {
    id: "directortable",
    label: "Director Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/m9akmf5mogyqdotwq650.jpg",
  },
  {
    id: "computerTable",
    label: "Computer Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/fo8923obmdvr8kl8i7ow.jpg",
  },
  {
    id: "receptionTable",
    label: "Reception Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/cikc9jiq4sxirrieuvhk.jpg",
  },
  {
    id: "conferenceTable",
    label: "Conference Table",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/wfekfmd3q1mlk0xbgnrp.jpg",
  },
  {
    id: "swivelChair ",
    label: "Swivel Chair",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255476/urbanCraft/catagories/office/subbCategories/hp1fwhh5luujtjdepuzg.jpg",
  },
];

const OfficeRoomSubCatagoriesPage = () => {
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
            src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1733255475/urbanCraft/catagories/office/subbCategories/qzbucokxb84yvl2je4yn.jpg"
            alt=""
          />
        </div>
        <div className="BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden">
          <h1 className="text-6xl font-bold ">Office Room Furniture</h1>
          <h3 className="text-2xl font-medium mt-3">
            EASE YOUR BUSY TIME WITH WELL-ORGANIZED WORKPLACE
          </h3>
          <p className="text-lg mt-3">
            Organize your office room properly with HATIL office furnishing and
            ease your busy time by finding what you need at the moment without
            any hassle.
          </p>
        </div>
      </div>

      <div className="w-full lg:mt-14 mt-5 p-5">
        <h1 className="text-center text-3xl text-orange-700 w">Office Room</h1>

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

export default OfficeRoomSubCatagoriesPage;
