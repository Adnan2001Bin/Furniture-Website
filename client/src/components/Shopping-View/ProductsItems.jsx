import { shoppingViewHeaderMenuItems } from "@/Config";
import { Link, useNavigate } from "react-router-dom";

function MenuItems() {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

export default MenuItems;
