import { shoppingViewHeaderMenuItems } from "@/Config";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BedroomCatagories from "./CatagoriesDropdown/BedroomCatagories"; // Correct import
import DinningCatagories from "./CatagoriesDropdown/DinningCatagories";
import LivingRoomCatagories from "./CatagoriesDropdown/LivingRoomCatagories";
import OfficeCatagories from "./CatagoriesDropdown/OfficeCatagories";
import DoorCatagories from "./CatagoriesDropdown/DoorCatagories";

function MenuItems() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown menu
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const handleToggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id)); // Toggle active state
  };

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row relative">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link key={menuItem.id} to={menuItem.path} className="relative group ">
          {/* Menu Item Link */}
          <div
            className="text-sm font-medium cursor-pointer flex items-center h-10 group"
            onClick={() => handleToggleDropdown(menuItem.id)}
          >
            {menuItem.label}
            
            {/* Icon logic */}
            {menuItem.label !== "Search" && menuItem.label !== "Home" && (
              <img
                className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180 mt-1"
                src={menuItem.img}
                alt=""
              />
            )}
          </div>

          {/* Render Dropdown */}
          {activeDropdown === menuItem.id && (
            <div className="absolute z-[999] group-hover:block hidden">
              {/* Conditional rendering for different categories */}
              {menuItem.id === "Bedroom" && <BedroomCatagories />}
              {menuItem.id === "Dinning" && <DinningCatagories />}
              {menuItem.id === "LivingRoom" && <LivingRoomCatagories />}
              {menuItem.id === "Office" && <OfficeCatagories />}
              {menuItem.id === "Door" && <DoorCatagories />}
              
            </div>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default MenuItems;
