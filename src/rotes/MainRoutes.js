import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddGames from "../components/Games/AddGames";
import EditProduct from "../components/Games/EditProduct";
import GameList from "../components/Games/GameList";
import MediaCard from "../components/Games/Games";
import ProductDetails from "../components/Games/ProductDetails";
import HomePage from "../components/HomePage/HomePage";
import Auth from "../components/Auth/Auth";
import { useAuth } from "../context/AuthContext";
import { ADMIN } from "../information";
import PaymentForm from "../components/CreditCard/Creadit";
import Cart from "../components/Cart/Cart";
import AboutUs from "../components/AboutUs/AboutUs";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    {
      link: "/home",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/games",
      element: <MediaCard />,
      id: 2,
    },
    {
      link: "/list",
      element: <GameList />,
      id: 4,
    },

    {
      link: "/products/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 7,
    },
    {
      link: "/pay",
      element: <PaymentForm />,
      id: 8,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    },
    {
      link: "/aboutus",
      element: <AboutUs/>,
      id: 9,
    }
    
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/add",
      element: <AddGames />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 5,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
