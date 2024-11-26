import { shoppingViewHeaderMenuItems } from "@/Config";
import { Link } from "react-router-dom";
import { useState } from "react";
import BedroomCatagories from "./CatagoriesDropdown/BedroomCatagories"; // Correct import
import DinningCatagories from "./CatagoriesDropdown/DinningCatagories";
import LivingRoomCatagories from "./CatagoriesDropdown/LivingRoomCatagories";
import OfficeCatagories from "./CatagoriesDropdown/OfficeCatagories";
import DoorCatagories from "./CatagoriesDropdown/DoorCatagories";

function MenuItems() {
  const [hoveredItem, setHoveredItem] = useState(null); // Tracks the hovered menu item

  // Handle mouse enter to set hovered item
  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  // Handle mouse leave to reset hovered item
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row relative">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(menuItem.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Item Link */}
          <Link
            to={menuItem.path}
            className="text-sm font-medium cursor-pointer flex items-center h-10"
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
          </Link>

          {/* Render Dropdown */}
          {hoveredItem === menuItem.id && (
            <div className="absolute z-[999] bg-white shadow-lg rounded-md mt-2">
              {/* Conditional rendering for different categories */}
              {menuItem.id === "Bedroom" && <BedroomCatagories />}
              {menuItem.id === "Dinning" && <DinningCatagories />}
              {menuItem.id === "LivingRoom" && <LivingRoomCatagories />}
              {menuItem.id === "Office" && <OfficeCatagories />}
              {menuItem.id === "Door" && <DoorCatagories />}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default MenuItems;
