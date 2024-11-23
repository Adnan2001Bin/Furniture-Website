import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden min-h-screen">
      <div className="w-full block">
        <ShoppingHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ShoppingLayout;
