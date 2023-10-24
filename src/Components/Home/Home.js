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
    height: "564px",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 72.08%, 50% 100%, 0% 72.58%)",
    paddingTop: "107px",
  });

  return (
    <>
      <Banner>
        <Container>
          <HomeSearch />
        </Container>
      </Banner>
      <Welcome />
      <TravelPortal />
      <FullTravel />
      <WhiteLabel />
      <Map />
    </>
  );
};

export default Home;
