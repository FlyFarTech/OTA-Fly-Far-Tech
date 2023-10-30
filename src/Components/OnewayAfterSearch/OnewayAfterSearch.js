import React, { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import OnewayflightBox from "./OnewayflightBox/OnewayflightBox";
import { useLocation } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
const OnewayAfterSearch = () => {
  let [flights, setFlights] = useState([]);

  let location = useLocation();

  let departureCode =
    location?.state?.departureCode || location?.state?.depCode;
  let departureAddress =
    location?.state?.departureAddress || location?.state?.depAddress;
  let arrivalAddress =
    location?.state?.arrivalAddress || location?.state?.arrAddress;
  let arrivalCode = location?.state?.arrivalCode || location?.state?.arrCode;
  let departureDate =
    location?.state?.checkInDate || location?.state?.journeyDate;
  let adultCount =
    location?.state?.adultCount || location?.state?.adultNumberCount || 0;
  let childCount =
    location?.state?.childCount || location?.state?.childNumberCount || 0;
  let infantCount =
    location?.state?.infantCount || location?.state?.infantNumberCount || 0;
  let totalPassenger = location?.state?.totalPassenger;
  let flightClass = location?.state?.flightClass || location?.state?.planeClass;

  console.log(
    departureCode,
    arrivalCode,
    departureDate,
    adultCount,
    childCount,
    infantCount
  );

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
  console.log(flights);
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
          arrivalAddress={arrivalAddress}
          totalPassenger={totalPassenger}
          flightClass={flightClass}
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
