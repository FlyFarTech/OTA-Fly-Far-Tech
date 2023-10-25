import React, { useState } from "react";

import Welcome from "./Welcome/Welcome";
import TravelPortal from "./TravelPortal/TravelPortal";
import FullTravel from "./FullTravel/FullTravel";
import WhiteLabel from "./WhiteLabel/WhiteLabel";
import Map from "./Map/Map";

import { Box, Container } from "@mui/material";

import BannerImage from "../Images/bannerpic.png";
import styled from "@emotion/styled";
import HomeSearch from "../HomeSearch/HomeSearch";
const Home = () => {
  let Banner = styled(Box)({
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            position: "absolute",
            zIndex: "50",
            left: "0%",
            right: "0%",
            paddingTop: "107px",
            width: "84%",
            margin: "0 auto",
          }}
        >
          <HomeSearch />
        </Box>

        <Banner
          sx={{
            clipPath: {
              xs: "0",
              sm: "polygon(0% 0%, 100% 0%, 100% 72.08%, 50% 100%, 0% 72.58%)",
            },

            height: { xs: "900px", sm: "740px", md: "700px", lg: "654px" },
            paddingTop: {
              xs: "76px",
              sm: "107px",
              md: "0px",
            },
          }}
        >
          <Container
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <HomeSearch />
          </Container>
        </Banner>
        <Welcome />
        <TravelPortal />
        <FullTravel />
        <WhiteLabel />
        <Map />
      </Box>
    </>
  );
};

export default Home;
