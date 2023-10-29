import React, { useEffect, useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import OnewayflightBox from "./OnewayflightBox/OnewayflightBox";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { ThreeDots } from "react-loader-spinner";
const OnewayAfterSearch = () => {
  let [flights, setFlights] = useState([]);

  let location = useLocation();

  let departureCode = location?.state?.departureCode;
  let departureAddress = location?.state?.departureAddress;
  let arrivalCode = location?.state?.arrivalCode;
  let departureDate = location?.state?.checkInDate;
  let adultCount = location?.state?.adultCount;
  let childCount = location?.state?.childCount;
  let infantCount = location?.state?.childCount;

  console.log(location);
  useEffect(() => {
    fetch(
      `https://quickticketsb2b-nodejs.de.r.appspot.com/api/v1/search-results?type=oneway&arr=${arrivalCode}&dep=${departureCode}&depdate=${departureDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setIsLoading(false);
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ marginBottom: "34px" }}>
        <AfterSearchBox
          departureCode={departureCode}
          arrivalCode={arrivalCode}
          departureDate={departureDate}
          adultCount={adultCount}
          childCount={childCount}
          infantCount={infantCount}
          departureAddress={departureAddress}
        />
      </Box>

      {isLoading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThreeDots
            height="30"
            width="100%"
            radius="9"
            color="var(--purple-color)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Box>
      ) : (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              {/* filter search area */}
              <AirSearchFilter />
            </Grid>
            <Grid item xs={12} lg={9}>
              {/*All flights area */}
              {flights?.map((flight, index) => (
                <OnewayflightBox key={index} flight={flight} />
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default OnewayAfterSearch;
