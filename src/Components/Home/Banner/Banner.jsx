import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import BannerImage from "./bannerpic.png";
import SearchBox from "../../SearchBox/SearchBox";
const Banner = () => {
  let Banner = styled(Box)({
    background: "red",
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
          <SearchBox />
        </Container>
      </Banner>
    </>
  );
};

export default Banner;
