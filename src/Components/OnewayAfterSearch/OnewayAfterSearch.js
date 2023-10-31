import React, { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";
import OnewayflightBox from "./OnewayflightBox/OnewayflightBox";
import { useLocation } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
import dayjs from "dayjs";
const OnewayAfterSearch = () => {
  let [flights, setFlights] = useState([]);

  let location = useLocation();

  let departureCode = location?.state?.departureCode || "DAC";
  let departureAddress =
    location?.state?.departureAddress || "Dhaka,BANGLADESH";
  let arrivalAddress =
    location?.state?.arrivalAddress || "Cox's Bazar,Bangladesh";
  let arrivalCode = location?.state?.arrivalCode || "CXB";
  let departureDate =
    location?.state?.checkInDate ||
    dayjs(new Date()).add(1, "day").format("ddd, DD MMM YY");
  let adultCount = location?.state?.adultCount || 1;
  let childCount = location?.state?.childCount || 0;
  let infantCount = location?.state?.infantCount || 0;
  let totalPassenger = location?.state?.totalPassenger;
  let flightClass = location?.state?.flightClass || "Economy";

  const [departure, setDeparture] = useState(departureCode);
  const [arrival, setArrival] = useState(arrivalCode);
  const [deparDate, setDeparDate] = useState(departureDate);
  const [adult, setAdult] = useState(adultCount);
  const [child, setChild] = useState(childCount);
  const [infant, setInfant] = useState(infantCount);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://flyfar-quicktickets-394105.an.r.appspot.com/api/v1/search-results?type=oneway&arr=${arrival}&dep=${departure}&depdate=${deparDate}&adult=${adult}&child=${child}&infant=${infant}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, [departure, arrival, deparDate, adult, child, infant]);
  const [isLoading, setIsLoading] = useState(true);

  const [airlineFilter, setAirlineFilter] = useState("");
  const [refundability, setRefundability] = useState("");
  const [stops, setStops] = useState("");
  const [bag, setBag] = useState("");
  const [priceRange, setPriceRange] = useState("");
  let handleAirlineFilter = (airline) => {
    setAirlineFilter(airline);
  };
  let handleRefundability = (refundable) => {
    setRefundability(refundable);
  };

  let handleStops = (stop) => {
    setStops(stop);
  };

  let handleBags = (baggage) => {
    setBag(baggage);
  };

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
          setDeparture={setDeparture}
          setArrival={setArrival}
          setDeparDate={setDeparDate}
          setAdult={setAdult}
          setChild={setChild}
          setInfant={setInfant}
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
                flights={flights}
                airlineFilter={airlineFilter}
                refundability={refundability}
                setRefundability={refundability}
                stops={stops}
                setStops={setStops}
                setAirlineFilter={setAirlineFilter}
                handleAirlineFilter={handleAirlineFilter}
                handleRefundability={handleRefundability}
                handleStops={handleStops}
                handleBags={handleBags}
                bag={bag}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </Grid>
            <Grid item xs={12} lg={9}>
              {/*All flights area */}
              {flights
                ?.filter((flight) => {
                  if (airlineFilter && flight.carrierName !== airlineFilter)
                    return false;
                  if (refundability && flight.refundable !== refundability)
                    return false;
                  if (stops && flight.segments.length !== parseInt(stops))
                    return false;
                  return true;
                })
                .map((flight, index) => {
                  // Check if 'bag' matches the number of bags in any segment
                  if (bag) {
                    const matchingSegment = flight.segments.some(
                      (segment) => segment.bags === bag
                    );
                    if (!matchingSegment) return null; // Skip this flight if no matching segment
                  }

                  return <OnewayflightBox key={index} flight={flight} />;
                })}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default OnewayAfterSearch;
