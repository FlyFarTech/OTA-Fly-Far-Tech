import React, { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import OnewayflightBox from "./OnewayflightBox/OnewayflightBox";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

const OnewayAfterSearch = () => {
  let [flights, setFlights] = useState([]);
  console.log(flights);
  let location = useLocation();

  let departureCode = location?.state?.departureCode;
  let arrivalCode = location?.state?.arrivalCode;
  let departureDate = location?.state?.checkInDate;
  let adultCount = location?.state?.adultCount;
  let childCount = location?.state?.childCount;
  let infantCount = location?.state?.childCount;
  console.log(arrivalCode);

  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/WhiteLabel/AirSearch/oneway.php?tripType=oneway&agentId=FFA2654&subagentId=FFSA1859&journeyfrom=${departureCode}&journeyto=${arrivalCode}&departuredate=${departureDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}`
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
          width: "84%",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            {/* filter search area */}
          </Grid>
          <Grid item xs={12} lg={9}>
            {/*All flights area */}
            {flights?.map((flight, index) => (
              <OnewayflightBox key={index} flight={flight} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OnewayAfterSearch;
