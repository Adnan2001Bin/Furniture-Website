import React, { useEffect } from "react";
import "./SubCatagoriesPage.css";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const subCatagories = [
  {
    id: "solidEngineeredWoodenDoor",
    label: "Solid Engineered Wooden Door",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299495/urbanCraft/catagories/door/vdhqdy0kjvq0zk0acnzq.jpg",
  },
  {
    id: "decorativeVeneeredFlushDoor",
    label: "Decorative Veneered Flush Door",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299490/urbanCraft/catagories/door/pejtqcamb4ox4r6x4fkf.jpg",
  },
  {
    id: "solidWoodenGlassDoor",
    label: "Solid Wooden Glass Door",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299494/urbanCraft/catagories/door/dsme2yyxdvfri4rot9u7.jpg",
  },
  {
    id: "decorativeVeneeredGlassDoor",
    label: "Decorative Veneered Glass Door",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299491/urbanCraft/catagories/door/efwmrobyepu9vwec2dnf.jpg",
  },
  {
    id: "knockDownDoorFrame",
    label: "Knock Down Door Frame",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299489/urbanCraft/catagories/door/sezhyxlnhi0ao1nbybfk.jpg",
  },
  {
    id: "solidWoodenDoor ",
    label: "Solid Wooden Door",
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733299504/urbanCraft/catagories/door/c4cmheih9h2izkqqz4aj.jpg",
  },
];

const DoorSubCatagoriesPage = () => {
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
            src="https://images.pexels.com/photos/887822/pexels-photo-887822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden">
          <h1 className="text-6xl font-bold ">Bedroom Furniture</h1>
          <h3 className="text-2xl font-medium mt-3">
          Masterful Entrances, Premium Doors Redefined
          </h3>
          <p className="text-lg mt-3">
          Redefine your entrances with masterfully crafted doors from our Premium collection. Elevate your home's aesthetic with doors that blend form and function, making every entrance a moment of luxury.
          </p>
        </div>
      </div>

      <div className="w-full lg:mt-14 mt-5 p-5">
        <h1 className="text-center text-3xl text-orange-700 w">Door</h1>

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg">
          {subCatagories.map((subCategorie) => (
            <div
              onClick={() =>
                handleNavigateToListingPage(subCategorie, "subcategory")
              }
              className="p-4 lg:w-64 w-44 lg:h-96 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 "
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

export default DoorSubCatagoriesPage;
