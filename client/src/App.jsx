import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/Admin-View/layout";
import AdminDashboard from "./pages/Admin-View/Dashboard";
import AdminFeatures from "./pages/Admin-View/Features";
import AdminOrder from "./pages/Admin-View/Order";
import AdminProducts from "./pages/Admin-View/Products";
import ShoppingLayout from "./components/Shopping-View/layout";
import ShoppingHome from "./pages/Shopping-View/Home";
import ShoppingListing from "./pages/Shopping-View/Listing";
import ShoppingCheckout from "./pages/Shopping-View/Checkout";
import ShoppingAccount from "./pages/Shopping-View/Account";
import NotFound from "./pages/Not-Found";
import UnauthPage from "./pages/unauth-page";
import CheckAuth from "./components/common/Check-Auth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";
import BedRoomSubCatagoriesPage from "./pages/Shopping-View/CatagoriesPage/BedRoomSubCatagoriesPage";
import DinningSubCatagoriesPage from "./pages/Shopping-View/CatagoriesPage/DinningSubCatagoriesPage";
import LivingRoomSubCatagoriesPage from "./pages/Shopping-View/CatagoriesPage/LivingRoomSubCatagoriesPage";
import OfficeRoomSubCatagoriesPage from "./pages/Shopping-View/CatagoriesPage/OfficeRoomSubCatagoriesPage";
import DoorSubCatagoriesPage from "./pages/Shopping-View/CatagoriesPage/DoorSubCatagoriesPage";

function App() {
  const {user , isAuthenticated , isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  } , [dispatch])


  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;


  const router = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "features",
          element: <AdminFeatures />,
        },
        {
          path: "orders",
          element: <AdminOrder />,
        },
        {
          path: "products",
          element: <AdminProducts />,
        },
      ],
    },
    {
      path: "shop",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "home",
          element: <ShoppingHome />,
        },
        {
          path: "listing",
          element: <ShoppingListing />,
        },
        {
          path: "checkout",
          element: <ShoppingCheckout />,
        },
        {
          path: "account",
          element: <ShoppingAccount />,
        },
        {
          path:"bedRoomSubCatagoriesPage",
          element: <BedRoomSubCatagoriesPage />
        },
        {
          path:"dinningRoomSubCatagoriesPage",
          element: <DinningSubCatagoriesPage />
        },
        {
          path:"livingRoomSubCatagoriesPage",
          element: <LivingRoomSubCatagoriesPage />
        },
        {
          path:"officeRoomSubCatagoriesPage",
          element: <OfficeRoomSubCatagoriesPage />
        },
        {
          path:"doorSubCatagoriesPage",
          element: <DoorSubCatagoriesPage />
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/unauth-page",
      element: <UnauthPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
