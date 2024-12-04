import { shoppingViewHeaderMenuItems } from "@/Config";
import { Link } from "react-router-dom";


function MenuItems() {

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row relative">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="relative group"
        >

          <Link
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
