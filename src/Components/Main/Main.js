import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

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
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
      {!hideFooter && <Footer />}
      {/* footer */}
    </>
  );
};

export default Main;
