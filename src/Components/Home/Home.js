import React from "react";
import Banner from "./Banner/Banner";
import Welcome from "./Welcome/Welcome";
import TravelPortal from "./TravelPortal/TravelPortal";
import FullTravel from "./FullTravel/FullTravel";
import WhiteLabel from "./WhiteLabel/WhiteLabel";
import Map from "./Map/Map";

const Home = () => {
  return (
    <>
      <Banner />
      <Welcome />
      <TravelPortal />
      <FullTravel />
      <WhiteLabel />
      <Map />
    </>
  );
};

export default Home;
