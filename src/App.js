import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/cartContext";
import GamesContextProvider from "./context/GamesContext";
import MainRoutes from "./rotes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <GamesContextProvider>
        <CartContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer/>
        </CartContextProvider>
      </GamesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
