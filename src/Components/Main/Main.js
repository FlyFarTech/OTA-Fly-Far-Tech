import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
  let location = useLocation();
  const hideFooter =
    location.pathname === "/onewayaftersearch" ||
    location.pathname === "/roundwayaftersearch";

  return (
    <>
      {/* Header */}
      <Header />
      {/* outlet */}
      <Outlet />
      {!hideFooter && <Footer />}
      {/* footer */}
    </>
  );
};

export default Main;
