import React, { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import OnewayflightBox from "./OnewayflightBox/OnewayflightBox";

const OnewayAfterSearch = () => {
  // let [flights, setFlights] = useState([]);
  // useEffect(() => {
  //   const apiUrl = `https://api.flyfarint.com/v.1.0.0/WhiteLabel/AirSearch/oneway.php?tripType=oneway&agentId=FFA2654&subagentId=FFSA1859&journeyfrom=${departureCode}&journeyto=${arrivalCode}&departuredate=${checkInDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}`;

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFlights(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching flight data:", error);
  //     });
  // }, []);
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

            <OnewayflightBox />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OnewayAfterSearch;
