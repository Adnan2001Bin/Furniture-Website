import React from "react";
import { shoppingViewHeaderMenuItems } from "@/Config";
import { Link, useSearchParams } from "react-router-dom";

function MenuItems() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");

    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row relative">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <div key={menuItem.id} className="relative group">
          <Link
            onClick={() => handleNavigate(menuItem)}
            to={menuItem.path}
            className="text-sm font-medium cursor-pointer flex items-center h-10"
          >
            {menuItem.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default MenuItems;
