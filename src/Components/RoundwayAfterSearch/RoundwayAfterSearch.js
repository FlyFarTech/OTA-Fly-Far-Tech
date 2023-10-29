import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import { useLocation } from "react-router-dom";
import RoundwayflightBox from "../RoundwayflightBox/RoundwayflightBox";
import styled from "@emotion/styled";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import { ThreeDots } from "react-loader-spinner";

const RoundwayAfterSearch = () => {
  let [flights, setFlights] = useState([]);
  console.log(flights);
  let location = useLocation();

  let departureCode = location?.state?.departureCode;
  let arrivalAddress = location?.state?.arrivalAddress;
  let departureAddress = location?.state?.departureAddress;
  let arrivalCode = location?.state?.arrivalCode;
  let departureDate = location?.state?.checkInDate;
  let returnDate = location?.state?.checkOutDate;
  let adultCount = location?.state?.adultCount;
  let childCount = location?.state?.childCount;
  let infantCount = location?.state?.childCount;
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://192.168.1.66:5000/api/v1/search-results?arr=${arrivalCode}&dep=${departureCode}&depdate=${departureDate}&arrdate=${returnDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}`
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
    returnDate,
    adultCount,
    childCount,
    infantCount,
  ]);
  return (
    <>
      <Box sx={{ marginBottom: "34px" }}>
        <AfterSearchBox
          departureCode={departureCode}
          arrivalCode={arrivalCode}
          arrivalAddress={arrivalAddress}
          departureAddress={departureAddress}
          departureDate={departureDate}
          adultCount={adultCount}
          childCount={childCount}
          infantCount={infantCount}
          returnDate={returnDate}
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
              <AirSearchFilter
                arrivalAddress={arrivalAddress}
                departureAddress={departureAddress}
              />
            </Grid>
            <Grid item xs={12} lg={9}>
              {/* All flights area */}
              {flights.map((flight, index) => (
                <RoundwayflightBox key={index} flight={flight} />
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default RoundwayAfterSearch;
