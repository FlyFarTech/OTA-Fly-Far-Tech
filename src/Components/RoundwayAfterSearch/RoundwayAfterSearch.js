import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import { useLocation } from "react-router-dom";
import RoundwayflightBox from "../RoundwayflightBox/RoundwayflightBox";
import styled from "@emotion/styled";

const RoundwayAfterSearch = () => {
  let [flights, setFlights] = useState([]);
  console.log(flights);
  let location = useLocation();

  let departureCode = location?.state?.departureCode;
  let arrivalCode = location?.state?.arrivalCode;
  let departureDate = location?.state?.checkInDate;
  let returnDate = location?.state?.checkOutDate;
  let adultCount = location?.state?.adultCount;
  let childCount = location?.state?.childCount;
  let infantCount = location?.state?.childCount;

  useEffect(() => {
    fetch(
      `http://192.168.1.66:5000/api/v1/search-results?arr=${arrivalCode}&dep=${departureCode}&depdate=${departureDate}&arrdate=${returnDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, [
    departureCode,
    arrivalCode,
    departureDate,
    returnDate,
    adultCount,
    childCount,
    infantCount,
  ]);
  return (
    <>
      <Box sx={{ marginBottom: "34px" }}>
        <AfterSearchBox />
      </Box>

      <Box
        sx={{
          width: "70%",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={2.5}>
            {/* filter search area */}
            <Box>sadf</Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            {/*All flights area */}
            {flights.map((flight, index) => (
              <RoundwayflightBox key={index} flight={flight} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RoundwayAfterSearch;
